"use client";

import { useCallback, useEffect, useState } from "react";
import { PiUserLight } from "react-icons/pi";
import SectionTitle from "@/src/components/common/section-title";

function CommentForm({ articleId, parentId = null, onSaved, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/articles/${encodeURIComponent(articleId)}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, content, parentId }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "ثبت نظر انجام نشد.");
      setName("");
      setEmail("");
      setContent("");
      await onSaved();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form dir="rtl" onSubmit={submit} className={`grid gap-4 rounded-2xl ${parentId ? "bg-gray-50 p-4" : "bg-gf5 p-5 md:p-7"}`}>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="نام شما *"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gDarkYellow"
        />
        <input
          type="email"
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="ایمیل (نمایش داده نمی‌شود)"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gDarkYellow"
        />
      </div>
      <textarea
        required
        maxLength={3000}
        rows={parentId ? 3 : 5}
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder={parentId ? "پاسخ خود را بنویسید *" : "نظر خود را بنویسید *"}
        className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gDarkYellow"
      />
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
      <div className="flex flex-wrap gap-2">
        <button disabled={loading} type="submit" className="rounded-xl bg-g21 px-6 py-3 text-white transition hover:opacity-85 disabled:opacity-50">
          {loading ? "در حال ثبت..." : parentId ? "ثبت پاسخ" : "ثبت نظر"}
        </button>
        {onCancel && <button type="button" onClick={onCancel} className="rounded-xl border border-gray-300 px-5 py-3">انصراف</button>}
      </div>
    </form>
  );
}

function CommentCard({ comment, articleId, onSaved }) {
  const [replying, setReplying] = useState(false);

  async function saved() {
    setReplying(false);
    await onSaved();
  }

  return (
    <article dir="rtl" className="rounded-2xl border border-gray-200 bg-white p-5">
      <header className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100">
          <PiUserLight className="text-xl text-gray-600" />
        </div>
        <div>
          <h3 className="font-bold text-g21">{comment.name}</h3>
          <time className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString("fa-IR")}</time>
        </div>
      </header>
      <p className="whitespace-pre-wrap py-4 leading-7 text-gray-700">{comment.content}</p>
      <button type="button" onClick={() => setReplying((value) => !value)} className="text-sm font-medium text-gDarkYellow">
        {replying ? "بستن پاسخ" : "پاسخ دادن"}
      </button>

      {replying && (
        <div className="mt-4">
          <CommentForm articleId={articleId} parentId={comment.id} onSaved={saved} onCancel={() => setReplying(false)} />
        </div>
      )}

      {comment.replies?.length > 0 && (
        <div className="mt-5 space-y-3 border-r-2 border-amber-300 pr-4">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <strong className="text-sm text-g21">{reply.name}</strong>
                <time className="text-xs text-gray-500">{new Date(reply.createdAt).toLocaleString("fa-IR")}</time>
              </div>
              <p className="mt-2 whitespace-pre-wrap leading-7 text-gray-700">{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadComments = useCallback(async () => {
    try {
      setError("");
      const response = await fetch(`/api/articles/${encodeURIComponent(articleId)}/comments`, { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "دریافت نظرات انجام نشد.");
      setComments(data.comments || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [articleId]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  const count = comments.reduce((total, comment) => total + 1 + (comment.replies?.length || 0), 0);

  return (
    <section className="my-[5%]">
      <div className="mb-8">
        <SectionTitle classes="text-g21" title="نظر شما" />
        <CommentForm articleId={articleId} onSaved={loadComments} />
      </div>

      <div className="mb-5 flex items-center justify-between">
        <SectionTitle classes="text-g21" title="نظرات" />
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{count} نظر و پاسخ</span>
      </div>

      {loading && <div className="rounded-xl bg-gray-50 p-6 text-center">در حال دریافت نظرات...</div>}
      {error && <div className="rounded-xl bg-red-50 p-4 text-red-700">{error}</div>}
      {!loading && !error && comments.length === 0 && (
        <div dir="rtl" className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
          هنوز نظری ثبت نشده؛ اولین نفر باشید.
        </div>
      )}
      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} articleId={articleId} onSaved={loadComments} />
        ))}
      </div>
    </section>
  );
}
