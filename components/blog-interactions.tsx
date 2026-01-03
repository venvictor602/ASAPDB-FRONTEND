"use client";

import { useState, useEffect } from "react";
import { Heart, MessageCircle, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  useGetPostCommentsQuery,
  useCreateCommentMutation,
  useLikePostMutation,
} from "@/lib/api/blog-api";

interface BlogInteractionsProps {
  postId: number;
  initialLikesCount?: number;
}

export function BlogInteractions({
  postId,
  initialLikesCount = 0,
}: BlogInteractionsProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikesCount);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [page, setPage] = useState(1);

  const { data: commentsData, isLoading: loading } = useGetPostCommentsQuery({
    postId,
    page,
  });
  const [createComment, { isLoading: submitting }] = useCreateCommentMutation();
  const [likePost] = useLikePostMutation();

  const comments = commentsData?.comments || [];
  const hasMoreComments = commentsData?.hasNext || false;

  // Check if user has liked this post (from localStorage)
  useEffect(() => {
    const storageKey = `blog_liked_${postId}`;
    const stored = localStorage.getItem(storageKey);
    if (stored === "true") {
      setLiked(true);
    }
  }, [postId]);

  const handleLike = async () => {
    if (liked) {
      // Already liked, just update local state
      setLiked(false);
      setLikeCount((prev) => Math.max(0, prev - 1));
      localStorage.setItem(`blog_liked_${postId}`, "false");
    } else {
      // Like the post via API
      try {
        await likePost(postId).unwrap();
        setLiked(true);
        setLikeCount((prev) => prev + 1);
        localStorage.setItem(`blog_liked_${postId}`, "true");
      } catch (error) {
        console.error("Failed to like post:", error);
      }
    }
  };

  // Check if comment form is valid
  const isCommentFormValid =
    newComment.trim() !== "" &&
    commentName.trim() !== "" &&
    commentEmail.trim() !== "" &&
    commentEmail.includes("@");

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCommentFormValid || submitting) return;

    try {
      await createComment({
        postId,
        data: {
          name: commentName,
          email: commentEmail,
          content: newComment,
        },
      }).unwrap();
      setNewComment("");
      setCommentName("");
      setCommentEmail("");
      setPage(1);
    } catch (error) {
      console.error("Failed to create comment:", error);
    }
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
              : "bg-[#f0f5ff] text-black border-2 border-transparent hover:bg-[#dbeafe]"
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
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-black">
            Comments ({comments.length})
          </h3>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              className="w-full px-4 py-3 border border-[#93c5fd] rounded-[8px] bg-white text-black placeholder-[#93c5fd] focus:outline-none focus:border-[#2563eb] transition-colors text-sm sm:text-base"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={commentEmail}
              onChange={(e) => setCommentEmail(e.target.value)}
              className="w-full px-4 py-3 border border-[#93c5fd] rounded-[8px] bg-white text-black placeholder-[#93c5fd] focus:outline-none focus:border-[#2563eb] transition-colors text-sm sm:text-base"
              required
            />
          </div>
          <div className="flex gap-3">
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="flex-1 px-4 py-3 border border-[#93c5fd] rounded-[8px] bg-white text-black placeholder-[#93c5fd] focus:outline-none focus:border-[#2563eb] transition-colors resize-none text-sm sm:text-base"
              required
            />
            <motion.button
              type="submit"
              disabled={!isCommentFormValid || submitting}
              whileHover={
                isCommentFormValid && !submitting ? { scale: 1.05 } : {}
              }
              whileTap={
                isCommentFormValid && !submitting ? { scale: 0.95 } : {}
              }
              className="bg-[#2563eb] text-white px-6 py-3 rounded-[8px] font-semibold hover:bg-[#1d4ed8] transition-colors self-end disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#2563eb]"
            >
              {submitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {loading && comments.length === 0 ? (
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="border-l-2 border-[#E8E8E8] pl-4 sm:pl-6 space-y-2 animate-pulse"
                >
                  <div className="h-4 bg-gray-200 rounded w-24" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : comments.length === 0 ? (
            <p className="text-black text-sm sm:text-base">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            <>
              {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
              {hasMoreComments && (
                <button
                  onClick={() => setPage((p) => p + 1)}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-[#93c5fd] rounded-[8px] text-black hover:bg-[#f0f5ff] transition-colors text-sm font-medium disabled:opacity-50"
                >
                  {loading ? "Loading..." : "Load More Comments"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface CommentItemProps {
  comment: {
    id: number;
    name: string;
    email: string;
    content: string;
    created_at: string;
  };
}

function CommentItem({ comment }: CommentItemProps) {
  const formattedDate = new Date(comment.created_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="border-l-2 border-[#E8E8E8] pl-4 sm:pl-6 space-y-4">
      {/* Comment */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-semibold text-sm sm:text-base">
            {comment.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-black text-sm sm:text-base">
              {comment.name}
            </p>
            <p className="text-[#93c5fd] text-xs sm:text-sm">{formattedDate}</p>
          </div>
        </div>
        <p className="text-black text-sm sm:text-base leading-relaxed">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
