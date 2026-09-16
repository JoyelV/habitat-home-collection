type AnnouncementBarProps = {
  /** Merchant-configurable messages. Only merchant-provided claims. */
  messages?: string[];
};

export function AnnouncementBar({
  messages = ["Complimentary shipping thresholds set by the store", "New season arrivals"],
}: AnnouncementBarProps) {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-6 px-5 py-2.5 sm:px-8">
        {messages.map((message, i) => (
          <p
            key={message}
            className={`text-[0.6875rem] uppercase tracking-[0.18em] ${i > 0 ? "hidden sm:block" : ""}`}
          >
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}
