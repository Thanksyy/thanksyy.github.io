/**
 * 渲染作者字符串：**Yuyu Luo** -> 加粗高亮；*学生* -> 加下划线点缀。
 */
export default function Authors({ text }: { text: string }) {
  // 先按 **...** 拆分（自己），再处理 *...*（学生）
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return (
    <span className="text-sm text-muted-foreground">
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <span key={i} className="font-semibold text-foreground">
              {p.slice(2, -2)}
            </span>
          );
        }
        if (p.startsWith("*") && p.endsWith("*")) {
          return (
            <span
              key={i}
              className="underline decoration-gold/60 decoration-dotted underline-offset-2"
            >
              {p.slice(1, -1)}
            </span>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </span>
  );
}
