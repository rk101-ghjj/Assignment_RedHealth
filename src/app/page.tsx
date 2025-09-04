"use client";
import React, { useCallback, useMemo, useState } from "react";
import { comments as initialComments } from "../mock/comments";
import { users } from "../mock/users";
import type { Comment } from "../mock/comments";
import AddCommentForm from "../components/AddCommentForm";
import CommentCard from "../components/CommentCard";
import SortToggle from "../components/SortToggle";
import Toast from "../components/Toast";

export default function HomePage() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [comments, sortOrder]);

  const handleAddComment = useCallback((payload: { userId: string; content: string }) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      authorId: payload.userId,
      content: payload.content,
      createdAt: new Date().toISOString(),
    };
    setComments(prev => [newComment, ...prev]);
    setToast({ message: "Your comment has been successfully added.", type: "success" });
  }, []);

  const handleSortChange = useCallback((order: "newest" | "oldest") => {
    setSortOrder(order);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Comment System</h1>
          <p className="text-lg text-slate-600">
            Share your thoughts and engage with the community. Join the conversation below!
          </p>
        </div>

        <div className="space-y-6">
          <AddCommentForm onAdd={handleAddComment} />
          
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Comments ({comments.length})
            </h2>
            <SortToggle value={sortOrder} onChange={handleSortChange} />
          </div>

          <div className="space-y-4">
            {sortedComments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}