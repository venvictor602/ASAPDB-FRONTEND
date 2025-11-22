"use client";

import { useState, useEffect } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  replies: Comment[];
}

interface BlogInteractionsProps {
  postId: number;
}

export function BlogInteractions({ postId }: BlogInteractionsProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [replyAuthor, setReplyAuthor] = useState("");

  // Load likes and comments from localStorage
  useEffect(() => {
    const storageKey = `blog_${postId}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const data = JSON.parse(stored);
      setTimeout(() => {
        setLiked(data.liked || false);
      }, 0);
      setTimeout(() => {
        setLikeCount(data.likeCount || 0);
      }, 0);
      setTimeout(() => {
        setComments(data.comments || []);
      }, 0);
    }
  }, [postId]);

  // Save to localStorage
  const saveToStorage = (updates: {
    liked?: boolean;
    likeCount?: number;
    comments?: Comment[];
  }) => {
    const storageKey = `blog_${postId}`;
    const current = localStorage.getItem(storageKey);
    const data = current ? JSON.parse(current) : {};
    const updated = { ...data, ...updates };
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const handleLike = () => {
    const newLiked = !liked;
    const newCount = newLiked ? likeCount + 1 : Math.max(0, likeCount - 1);
    setLiked(newLiked);
    setLikeCount(newCount);
    saveToStorage({ liked: newLiked, likeCount: newCount });
  };

  // Check if comment form is valid
  const isCommentFormValid =
    newComment.trim() !== "" && commentAuthor.trim() !== "";

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCommentFormValid) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: commentAuthor,
      content: newComment,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      replies: [],
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    setNewComment("");
    setCommentAuthor("");
    saveToStorage({ comments: updatedComments });
  };

  const handleSubmitReply = (parentId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyContent.trim() || !replyAuthor.trim()) return;

    const reply: Comment = {
      id: crypto.randomUUID(),
      author: replyAuthor,
      content: replyContent,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      replies: [],
    };

    const updateComments = (comments: Comment[]): Comment[] => {
      return comments.map((comment) => {
        if (comment.id === parentId) {
          return { ...comment, replies: [...comment.replies, reply] };
        }
        return { ...comment, replies: updateComments(comment.replies) };
      });
    };

    const updatedComments = updateComments(comments);
    setComments(updatedComments);
    setReplyingTo(null);
    setReplyContent("");
    setReplyAuthor("");
    saveToStorage({ comments: updatedComments });
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Like Button */}
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className={`flex items-center gap-2 px-6 py-3 rounded-[8px] font-semibold text-sm sm:text-base transition-colors ${
            liked
              ? "bg-red-50 text-red-600 border-2 border-red-200"
              : "bg-gray-100 text-[#48484A] border-2 border-transparent hover:bg-gray-200"
          }`}
        >
          <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
          <span>{likeCount}</span>
          <span className="hidden sm:inline">
            {likeCount === 1 ? "Like" : "Likes"}
          </span>
        </motion.button>
      </div>

      {/* Comments Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#48484A]" />
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#48484A]">
            Comments ({comments.length})
          </h3>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              className="w-full px-4 py-3 border border-[#E8E8E8] rounded-[8px] text-[#48484A] placeholder-[#A1A1A1] focus:outline-none focus:border-[#101010] transition-colors text-sm sm:text-base"
              required
            />
          </div>
          <div className="flex gap-3">
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="flex-1 px-4 py-3 border border-[#E8E8E8] rounded-[8px] text-[#48484A] placeholder-[#A1A1A1] focus:outline-none focus:border-[#101010] transition-colors resize-none text-sm sm:text-base"
              required
            />
            <motion.button
              type="submit"
              disabled={!isCommentFormValid}
              whileHover={isCommentFormValid ? { scale: 1.05 } : {}}
              whileTap={isCommentFormValid ? { scale: 0.95 } : {}}
              className="bg-[#101010] text-white px-6 py-3 rounded-[8px] font-semibold hover:bg-[#262626] transition-colors self-end disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#101010]"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.length === 0 ? (
            <p className="text-[#606060] text-sm sm:text-base">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                onReply={(id) => setReplyingTo(id)}
                replyingTo={replyingTo}
                replyContent={replyContent}
                replyAuthor={replyAuthor}
                onReplyContentChange={setReplyContent}
                onReplyAuthorChange={setReplyAuthor}
                onSubmitReply={(e) => handleSubmitReply(comment.id, e)}
                onCancelReply={() => {
                  setReplyingTo(null);
                  setReplyContent("");
                  setReplyAuthor("");
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

interface CommentItemProps {
  comment: Comment;
  onReply: (id: string) => void;
  replyingTo: string | null;
  replyContent: string;
  replyAuthor: string;
  onReplyContentChange: (value: string) => void;
  onReplyAuthorChange: (value: string) => void;
  onSubmitReply: (e: React.FormEvent) => void;
  onCancelReply: () => void;
}

function CommentItem({
  comment,
  onReply,
  replyingTo,
  replyContent,
  replyAuthor,
  onReplyContentChange,
  onReplyAuthorChange,
  onSubmitReply,
  onCancelReply,
}: CommentItemProps) {
  const isReplying = replyingTo === comment.id;
  // Check if reply form is valid
  const isReplyFormValid =
    replyContent.trim() !== "" && replyAuthor.trim() !== "";

  return (
    <div className="border-l-2 border-[#E8E8E8] pl-4 sm:pl-6 space-y-4">
      {/* Comment */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#101010] flex items-center justify-center text-white font-semibold text-sm sm:text-base">
            {comment.author.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-[#48484A] text-sm sm:text-base">
              {comment.author}
            </p>
            <p className="text-[#A1A1A1] text-xs sm:text-sm">{comment.date}</p>
          </div>
        </div>
        <p className="text-[#48484A] text-sm sm:text-base leading-relaxed">
          {comment.content}
        </p>
        <button
          onClick={() => onReply(comment.id)}
          className="text-[#606060] cursor-pointer hover:text-[#101010] text-xs sm:text-sm font-medium transition-colors"
        >
          Reply
        </button>
      </div>

      {/* Reply Form */}
      {isReplying && (
        <motion.form
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          onSubmit={onSubmitReply}
          className="ml-4 sm:ml-8 space-y-3 pt-2"
        >
          <input
            type="text"
            placeholder="Your name"
            value={replyAuthor}
            onChange={(e) => onReplyAuthorChange(e.target.value)}
            className="w-full px-4 py-2 border border-[#E8E8E8] rounded-[8px] text-[#48484A] placeholder-[#A1A1A1] focus:outline-none focus:border-[#101010] transition-colors text-sm sm:text-base"
            required
          />
          <div className="flex gap-3">
            <textarea
              placeholder="Write a reply..."
              value={replyContent}
              onChange={(e) => onReplyContentChange(e.target.value)}
              rows={3}
              className="flex-1 px-4 py-2 border border-[#E8E8E8] rounded-[8px] text-[#48484A] placeholder-[#A1A1A1] focus:outline-none focus:border-[#101010] transition-colors resize-none text-sm sm:text-base"
              required
            />
            <div className="flex flex-col gap-2">
              <motion.button
                type="submit"
                disabled={!isReplyFormValid}
                whileHover={isReplyFormValid ? { scale: 1.05 } : {}}
                whileTap={isReplyFormValid ? { scale: 0.95 } : {}}
                className="bg-[#101010] text-white px-4 py-2 rounded-[8px] font-semibold hover:bg-[#262626] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#101010]"
              >
                <Send className="w-4 h-4" />
              </motion.button>
              <button
                type="button"
                onClick={onCancelReply}
                className="px-4 py-2 border border-[#E8E8E8] rounded-[8px] text-[#48484A] hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.form>
      )}

      {/* Replies */}
      {comment.replies.length > 0 && (
        <div className="ml-4 sm:ml-8 space-y-4 mt-4">
          {comment.replies.map((reply) => (
            <div
              key={reply.id}
              className="border-l-2 border-[#E8E8E8] pl-4 sm:pl-6 space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#606060] flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                  {reply.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-[#48484A] text-xs sm:text-sm">
                    {reply.author}
                  </p>
                  <p className="text-[#A1A1A1] text-xs">{reply.date}</p>
                </div>
              </div>
              <p className="text-[#48484A] text-sm leading-relaxed">
                {reply.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
