export type QcDef = {
  key: string;
  label: string;
  cf: string;
  hint: string;
};

export const QC: QcDef[] = [
  {
    key: "relevance",
    label: "Thích hợp (Relevance)",
    cf: "CF.2.6–2.11",
    hint: "Thông tin có khả năng tạo khác biệt cho quyết định; predictive / confirmatory; không phụ thuộc đã ghi nhận hay chưa.",
  },
  {
    key: "materiality",
    label: "Trọng yếu (Materiality)",
    cf: "CF.2.11",
    hint: "Khía cạnh entity-specific của Relevance: bản chất hoặc quy mô, không có ngưỡng % thống nhất.",
  },
  {
    key: "faithful representation",
    label: "Trình bày trung thực (Faithful representation)",
    cf: "CF.2.12",
    hint: "Mô tả đúng hiện tượng kinh tế: đầy đủ, trung lập, không sai sót; bản chất hơn hình thức.",
  },
  {
    key: "completeness",
    label: "Đầy đủ (Completeness)",
    cf: "CF.2.13–2.14",
    hint: "Gồm mô tả, số liệu và giải thích cần thiết để user hiểu hiện tượng — ghi nhận số không thay thuyết minh.",
  },
  {
    key: "neutrality",
    label: "Trung lập (Neutrality)",
    cf: "CF.2.15–2.17",
    hint: "Không thiên lệch; prudence không cho phép bi quan có hệ thống hay big bath.",
  },
  {
    key: "free from error",
    label: "Không sai sót (Free from error)",
    cf: "CF.2.18–2.19",
    hint: "Quy trình phù hợp và mô tả đúng; ước tính sau này khác không tự thành error.",
  },
  {
    key: "comparability",
    label: "Có thể so sánh (Comparability)",
    cf: "CF.2.24–2.29",
    hint: "Like things look alike; consistency là phương tiện; không phải uniformity hay copy mô tả sai.",
  },
  {
    key: "verifiability",
    label: "Có thể kiểm chứng (Verifiability)",
    cf: "CF.2.30–2.32",
    hint: "Người quan sát độc lập có thể đồng thuận; ước tính cần công bố giả định, khoảng, phương pháp.",
  },
  {
    key: "timeliness",
    label: "Kịp thời (Timeliness)",
    cf: "CF.2.33",
    hint: "Đặc tính nâng cao: thông tin còn khả năng ảnh hưởng quyết định khi đến tay user.",
  },
  {
    key: "understandability",
    label: "Dễ hiểu (Understandability)",
    cf: "CF.2.34–2.36",
    hint: "Phân loại, trình bày súc tích; không được dùng để loại thông tin phức tạp nhưng cần thiết.",
  },
  {
    key: "cost constraint",
    label: "Ràng buộc chi phí (Cost constraint)",
    cf: "CF.2.39–2.43",
    hint: "IASB cân khi viết chuẩn mực; từng entity không tự miễn yêu cầu của IFRS.",
  },
  {
    key: "trade-off",
    label: "Đánh đổi thích hợp và trình bày trung thực",
    cf: "CF.2.20–2.22",
    hint: "Hai đặc tính nền tảng áp dụng đồng thời; uncertainty cực cao có thể khiến không ghi nhận mà thuyết minh.",
  },
  {
    key: "hierarchy",
    label: "Thứ tự ưu tiên các đặc tính",
    cf: "CF.2.21 / CF.2.37",
    hint: "Nền tảng trước, nâng cao sau; enhancing không cứu mô tả không trung thực.",
  },
];

export const GENERIC_DISTRACTORS = QC.map((q) => q.label);

export function qcByKey(key: string): QcDef {
  return QC.find((q) => q.key === key) ?? QC[0]!;
}

export function pickRandomQc(exclude?: string): QcDef {
  const pool = exclude ? QC.filter((q) => q.key !== exclude) : QC;
  return pool[Math.floor(Math.random() * pool.length)] ?? QC[0]!;
}

export function fourDistractors(
  primaryLabel: string,
  rng: () => number = Math.random,
  excludeKey?: string,
): string[] {
  const skip = new Set<string>([primaryLabel]);
  if (excludeKey) {
    const q = QC.find((x) => x.key === excludeKey);
    if (q) skip.add(q.label);
  }
  const others = GENERIC_DISTRACTORS.filter((l) => !skip.has(l));
  const out: string[] = [];
  const bag = others.slice();
  while (out.length < 4 && bag.length) {
    const i = Math.floor(rng() * bag.length);
    out.push(bag.splice(i, 1)[0]!);
  }
  return out;
}
