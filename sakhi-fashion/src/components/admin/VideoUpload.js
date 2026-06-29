"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  UploadCloud,
  Film,
  Trash2,
  CheckCircle2,
  Link2,
  AlertTriangle,
} from "lucide-react";
import {
  getBannerVideo,
  setBannerVideo,
  clearBannerVideo,
} from "@/lib/banner";

export default function VideoUpload() {
  const inputRef = useRef(null);
  const [current, setCurrent] = useState("");
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setCurrent(getBannerVideo());
  }, []);

  const handleFile = (file) => {
    setError("");
    setSaved(false);
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      setError("Please choose a video file (MP4, WebM or MOV).");
      return;
    }
    if (file.size > 60 * 1024 * 1024) {
      setError("File is over 60MB. Use a hosted URL instead for large videos.");
      return;
    }

    setFileName(file.name);
    setUploading(true);
    setProgress(0);

    // Simulated upload progress (replace with a real upload to your storage/API)
    const objectUrl = URL.createObjectURL(file);
    let p = 0;
    const timer = setInterval(() => {
      p += Math.random() * 18;
      if (p >= 100) {
        p = 100;
        clearInterval(timer);
        setUploading(false);
        setPreview(objectUrl);
      }
      setProgress(Math.min(p, 100));
    }, 140);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const useUrl = () => {
    setError("");
    if (!urlInput.trim()) {
      setError("Paste a direct video URL first.");
      return;
    }
    setPreview(urlInput.trim());
    setFileName("Hosted video URL");
    setProgress(100);
  };

  const save = () => {
    if (!preview) return;
    setBannerVideo(preview);
    setCurrent(preview);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const remove = () => {
    clearBannerVideo();
    setCurrent("");
    setPreview("");
    setFileName("");
    setProgress(0);
    setUrlInput("");
  };

  const isObjectUrl = preview.startsWith("blob:");

  return (
    <div className="space-y-6">
      {/* Current live banner */}
      <div className="rounded-2xl border border-blush-100/50 bg-white/60 p-5 dark:border-ink-700 dark:bg-ink-800/50">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-display text-xl font-medium text-ink-900 dark:text-cream-50">
            <Film size={18} className="text-gold-500" /> Live Hero Banner
          </h3>
          {current ? (
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-600 dark:text-emerald-400">
              Video active
            </span>
          ) : (
            <span className="rounded-full bg-blush-100 px-3 py-1 text-xs text-blush-600 dark:bg-ink-900 dark:text-blush-300">
              Using fallback image
            </span>
          )}
        </div>

        <div className="mt-4 overflow-hidden rounded-xl bg-ink-900">
          {current ? (
            <video
              key={current}
              src={current}
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover"
            />
          ) : (
            <div className="grid aspect-video w-full place-items-center text-center text-cream-50/60">
              <div>
                <Film size={32} className="mx-auto opacity-50" />
                <p className="mt-2 text-sm">No banner video uploaded yet</p>
              </div>
            </div>
          )}
        </div>

        {current && (
          <button
            onClick={remove}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-300/50 px-4 py-2 text-xs uppercase tracking-wider text-red-500 transition-colors hover:bg-red-500 hover:text-white"
          >
            <Trash2 size={14} /> Delete Video
          </button>
        )}
      </div>

      {/* Dropzone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-colors ${
          dragging
            ? "border-gold-400 bg-gold-50/60 dark:bg-ink-800"
            : "border-blush-200/70 bg-white/40 hover:border-gold-300 dark:border-ink-700 dark:bg-ink-800/40"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="video/mp4,video/webm,video/quicktime"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-gold-600 dark:bg-ink-900">
          <UploadCloud size={26} />
        </span>
        <p className="mt-4 font-display text-xl text-ink-900 dark:text-cream-50">
          Drag &amp; drop your MP4 here
        </p>
        <p className="mt-1 text-sm text-ink-700/70 dark:text-cream-50/60">
          or click to browse · MP4, WebM, MOV up to 60MB
        </p>
      </div>

      {/* URL alternative */}
      <div className="flex flex-col gap-3 rounded-2xl border border-blush-100/50 bg-white/40 p-4 dark:border-ink-700 dark:bg-ink-800/40 sm:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-blush-100/60 bg-cream-50/60 px-4 dark:border-ink-700 dark:bg-ink-900/60">
          <Link2 size={16} className="text-gold-500" />
          <input
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="Or paste a hosted video URL (.mp4)"
            className="w-full bg-transparent py-3 text-sm text-ink-900 outline-none dark:text-cream-50"
          />
        </div>
        <button onClick={useUrl} className="btn-outline whitespace-nowrap">
          Use URL
        </button>
      </div>

      {/* Progress */}
      <AnimatePresence>
        {uploading && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-2xl border border-blush-100/50 bg-white/60 p-4 dark:border-ink-700 dark:bg-ink-800/50"
          >
            <div className="flex items-center justify-between text-sm text-ink-900 dark:text-cream-50">
              <span className="truncate">{fileName}</span>
              <span className="text-gold-500">{Math.round(progress)}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-blush-100 dark:bg-ink-900">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gold-300 to-gold-500"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error */}
      {error && (
        <p className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-500">
          <AlertTriangle size={16} /> {error}
        </p>
      )}

      {/* Preview + save */}
      <AnimatePresence>
        {preview && !uploading && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-gold-300/40 bg-white/60 p-5 dark:border-ink-700 dark:bg-ink-800/50"
          >
            <h3 className="font-display text-lg font-medium text-ink-900 dark:text-cream-50">
              Preview
            </h3>
            <p className="mt-1 text-sm text-ink-700/70 dark:text-cream-50/60">
              {fileName}
            </p>
            <video
              src={preview}
              autoPlay
              muted
              loop
              playsInline
              className="mt-3 aspect-video w-full rounded-xl object-cover"
            />
            {isObjectUrl && (
              <p className="mt-3 flex items-start gap-2 rounded-lg bg-gold-50 px-3 py-2 text-xs text-gold-600 dark:bg-ink-900 dark:text-gold-300">
                <AlertTriangle size={14} className="mt-0.5 flex-shrink-0" />
                Uploaded files preview from browser memory and reset on reload.
                For permanent banners, upload to your storage/CDN and paste the
                hosted URL above.
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={save} className="btn-primary dark:bg-gold-400">
                {saved ? (
                  <>
                    <CheckCircle2 size={16} /> Saved &amp; Published
                  </>
                ) : (
                  "Save & Publish to Homepage"
                )}
              </button>
              <button
                onClick={() => {
                  setPreview("");
                  setFileName("");
                  setProgress(0);
                }}
                className="btn-outline"
              >
                Discard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
