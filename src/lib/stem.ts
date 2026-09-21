/** Strip qualitative-characteristic names from the exam stem so students only see context. */

const LABELS = [
  "Trình bày trung thực (Faithful representation)",
  "Đánh đổi thích hợp và trình bày trung thực",
  "Thứ tự ưu tiên các đặc tính",
  "Ràng buộc chi phí (Cost constraint)",
  "Có thể kiểm chứng (Verifiability)",
  "Có thể so sánh (Comparability)",
  "Không sai sót (Free from error)",
  "Dễ hiểu (Understandability)",
  "Thích hợp (Relevance)",
  "Trọng yếu (Materiality)",
  "Trung lập (Neutrality)",
  "Đầy đủ (Completeness)",
  "Kịp thời (Timeliness)",
  "Trình bày trung thực",
  "Faithful representation",
  "Free from error",
  "Cost constraint",
  "Understandability",
  "Comparability",
  "Verifiability",
  "Materiality",
  "Completeness",
  "Neutrality",
  "Timeliness",
  "Relevance",
  "Prudence",
];

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function stripQcFromStem(text: string): string {
  let t = text;
  for (const label of LABELS) {
    t = t.replace(new RegExp(escapeRe(label), "gi"), "cách xử lý đang được đề xuất");
  }
  t = t.replace(/đặc tính quyết định phải là\s+/gi, "");
  t = t.replace(/đặc tính quyết định/gi, "cách xử lý");
  t = t.replace(/đặc tính (định tính|nâng cao|nền tảng)/gi, "cách trình bày");
  t = t.replace(/mọi đặc tính/gi, "mọi khoản mục");
  t = t.replace(/liệt kê hết QC|liệt kê mọi đặc tính/gi, "liệt kê mọi lý do");
  t = t.replace(/\s{2,}/g, " ").replace(/ ,/g, ",").trim();
  return t;
}

export function thickenStem(
  rng: () => number,
  base: string,
  company: string,
  y1: string,
  other: string,
): string {
  const extras = [
    ` Biên bản ủy ban kiểm toán ngày ${String(18 + Math.floor(rng() * 10)).padStart(2, "0")} tháng 12 năm ${y1} ghi rằng ${other} đã xác nhận số dư nhưng từ chối cho ý kiến về bản chất kinh tế của thỏa thuận, và yêu cầu ban quản trị tự chịu trách nhiệm về nhãn trên mặt báo cáo.`,
    ` Một khoản mục khác — phí bảo trì 0,${1 + Math.floor(rng() * 8)} triệu CU đã thanh toán đúng hạn ngày 10 tháng 12 — được nêu như bằng chứng “chính sách ghi nhận đã nhất quán cả năm,” dù bản chất khoản phí đó không liên quan tới giao dịch đang tranh cãi.`,
    ` Email hội đồng ngày 29 tháng 12 năm ${y1}: “Giữ guidance. Đừng để kiểm toán kéo ta ra khỏi covenant. Người sử dụng tự đọc note nếu muốn; mặt báo cáo phải sạch.”`,
    ` Luật sư nội bộ lưu ý rằng hình thức pháp lý đủ để chống kiện cổ đông thiểu số, còn việc mô tả lại trên mặt các báo cáo chính sẽ trì phát hành khoảng ba tuần và có thể làm lung lay đợt tái tài trợ đang đàm phán với ${other}.`,
    ` Báo cáo quản trị tháng 11 của ${company} đã nêu cùng hiện tượng với số liệu gần giống nhưng dùng một nhãn khác; ban quản trị không đối chiếu hai tài liệu khi khóa sổ và không thuyết minh sự khác biệt.`,
    ` Kiểm toán tiền nhiệm, trong thư bàn giao, đã cảnh báo rằng một giao dịch cùng loại năm trước bị chất vấn nhưng không bị điều chỉnh; ban quản trị trích thư đó như tiền lệ “đã qua cửa kiểm toán.”`,
    ` Tại ngày 31 tháng 12, ${company} vẫn vận hành, bảo hiểm và chịu chi phí liên quan tài sản/khoản mục đang bàn; không có biên bản nào ghi nhận chuyển giao kiểm soát cho bên thứ ba độc lập.`,
  ];
  let s = stripQcFromStem(base);
  let i = 0;
  while (s.length < 1550 && i < extras.length) {
    s += extras[i]!;
    i += 1;
  }
  return s;
}
