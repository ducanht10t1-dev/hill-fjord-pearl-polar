//#region node_modules/.nitro/vite/services/ssr/assets/explain-D5oGm6vd.js
/** Strip qualitative-characteristic names from the exam stem so students only see context. */
var LABELS = [
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
	"Prudence"
];
function escapeRe(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function stripQcFromStem(text) {
	let t = text;
	for (const label of LABELS) t = t.replace(new RegExp(escapeRe(label), "gi"), "cách xử lý đang được đề xuất");
	t = t.replace(/đặc tính quyết định phải là\s+/gi, "");
	t = t.replace(/đặc tính quyết định/gi, "cách xử lý");
	t = t.replace(/đặc tính (định tính|nâng cao|nền tảng)/gi, "cách trình bày");
	t = t.replace(/mọi đặc tính/gi, "mọi khoản mục");
	t = t.replace(/liệt kê hết QC|liệt kê mọi đặc tính/gi, "liệt kê mọi lý do");
	t = t.replace(/\s{2,}/g, " ").replace(/ ,/g, ",").trim();
	return t;
}
function thickenStem(rng, base, company, y1, other) {
	const extras = [
		` Biên bản ủy ban kiểm toán ngày ${String(18 + Math.floor(rng() * 10)).padStart(2, "0")} tháng 12 năm ${y1} ghi rằng ${other} đã xác nhận số dư nhưng từ chối cho ý kiến về bản chất kinh tế của thỏa thuận, và yêu cầu ban quản trị tự chịu trách nhiệm về nhãn trên mặt báo cáo.`,
		` Một khoản mục khác — phí bảo trì 0,${1 + Math.floor(rng() * 8)} triệu CU đã thanh toán đúng hạn ngày 10 tháng 12 — được nêu như bằng chứng “chính sách ghi nhận đã nhất quán cả năm,” dù bản chất khoản phí đó không liên quan tới giao dịch đang tranh cãi.`,
		` Email hội đồng ngày 29 tháng 12 năm ${y1}: “Giữ guidance. Đừng để kiểm toán kéo ta ra khỏi covenant. Người sử dụng tự đọc note nếu muốn; mặt báo cáo phải sạch.”`,
		` Luật sư nội bộ lưu ý rằng hình thức pháp lý đủ để chống kiện cổ đông thiểu số, còn việc mô tả lại trên mặt các báo cáo chính sẽ trì phát hành khoảng ba tuần và có thể làm lung lay đợt tái tài trợ đang đàm phán với ${other}.`,
		` Báo cáo quản trị tháng 11 của ${company} đã nêu cùng hiện tượng với số liệu gần giống nhưng dùng một nhãn khác; ban quản trị không đối chiếu hai tài liệu khi khóa sổ và không thuyết minh sự khác biệt.`,
		` Kiểm toán tiền nhiệm, trong thư bàn giao, đã cảnh báo rằng một giao dịch cùng loại năm trước bị chất vấn nhưng không bị điều chỉnh; ban quản trị trích thư đó như tiền lệ “đã qua cửa kiểm toán.”`,
		` Tại ngày 31 tháng 12, ${company} vẫn vận hành, bảo hiểm và chịu chi phí liên quan tài sản/khoản mục đang bàn; không có biên bản nào ghi nhận chuyển giao kiểm soát cho bên thứ ba độc lập.`
	];
	let s = stripQcFromStem(base);
	let i = 0;
	while (s.length < 1550 && i < extras.length) {
		s += extras[i];
		i += 1;
	}
	return s;
}
/** Full post-answer explanation: Conceptual Framework 2018 Ch. 2 + IFRS 18. */
var EXPLAIN = {
	1: {
		cfApply: "Đặc tính quyết định là trình bày trung thực (faithful representation), cụ thể substance over form — CF.2.12. Một mô tả trung thực phản ánh hiện tượng kinh tế, không phải nhãn pháp lý. BuildTech vẫn vận hành máy, chịu bảo trì/bảo hiểm và có nghĩa vụ mua lại với phần chênh đúng bằng lãi thị trường: hiện tượng là khoản vay có tài sản đảm bảo, không phải thanh lý. Relevance của dòng tiền 10 triệu CU (CF.2.6–2.8) vẫn còn, nhưng không cho phép mô tả sai bản chất. Enhancing (comparability với đối thủ, verifiability của legal title) đứng sau nền tảng — CF.2.21, CF.2.37.",
		ifrs18: "IFRS 18.6 đòi hỏi trình bày trung thực các giao dịch theo đúng các đặc tính của Khung khái niệm. IFRS 18.41–43: phân loại và gắn nhãn phải dựa trên đặc điểm được chia sẻ của hiện tượng; nhãn “Deed of Sale” không trung thực nếu quyền và rủi ro không chuyển. IFRS 18.4: việc ghi nhận/đo lường khoản vay vẫn do IFRS 9 / IFRS 15 — IFRS 18 không cho phép “ghi bán” chỉ vì tiện trình bày. Dòng tiền nhận được trình bày theo đúng bản chất tài trợ, không phải như khoản thu từ thanh lý PPE trên mặt các báo cáo chính.",
		traps: "Relevance (confirmatory value của cash) là nhiễu: thông tin thích hợp vẫn phải faithful. Materiality 0,4% doanh thu không xóa sai bản chất. Comparability với peer hạch toán “Deed of Sale” là uniformity — CF.2.27, unlike things would look alike. Nhà kho phụ ngày 15/12 đã chuyển giao kiểm soát: đó mới là bán; không phải tiền lệ cho dây chuyền còn nằm trong nhà máy.",
		treatment: "Giữ dây chuyền trên Bảng cân đối theo giá trị ghi sổ. Ghi nhận nợ phải trả tài chính 10 triệu CU. Phân bổ 1,45 triệu CU như chi phí lãi trong hai năm. Không ghi lãi thanh lý 2 triệu CU. Thuyết minh bản chất thỏa thuận mua lại, lãi suất ngầm định và việc FinanceCo không có quyền sử dụng tài sản."
	},
	2: {
		cfApply: "Đặc tính quyết định là trung lập (neutrality) trong prudence — CF.2.15–2.17. Prudence là thận trọng khi bất định, không phải chọn số bi quan nhất, cũng không cho phép lạc quan có hệ thống. ECL 2% khi phân tích độc lập 4–6 triệu CU, đồng thời dự phòng kiện 10 triệu CU khi most likely 2,4 triệu CU, là thiên lệch đối xứng ngược (bias). Không phải free from error thuần túy: quy trình ước tính bị bóp vì covenant/bonus, không phải ước tính trung lập sau này hóa ra khác (CF.2.18–2.19).",
		ifrs18: "IFRS 18.6: trình bày trung thực gồm trung lập. IFRS 18.43 yêu cầu mô tả và giải thích cần thiết để user hiểu khoản mục — khoảng ECL và khoảng kiện tụng thuộc giải thích đó. IFRS 18.41: gộp/tách theo đặc điểm được chia sẻ; không dùng “thận trọng” để thổi một khoản dự phòng và nén một khoản khác. Ghi nhận/đo lường dự phòng vẫn theo IAS 37 / IFRS 9; IFRS 18 cấm làm mờ (obscure) thông tin trọng yếu bằng cách không thuyết minh khoảng.",
		traps: "“Prudence = bi quan” là sai CF.2.16. Free from error không cứu ước tính bị điều khiển. Materiality 0,7% tài sản bỏ qua bản chất thiên lệch có chủ đích. Completeness “đừng dump spreadsheet” không cho phép giấu khoảng. Vụ kiện thắng 0,3 triệu CU tháng 10 không cân bằng bias trên hai khoản còn lại.",
		treatment: "ECL trung lập khoảng 5 triệu CU (giữa 4–6). Dự phòng kiện khoảng 2,4–2,5 triệu CU. Thuyết minh khoảng, giả định then chốt, và không lấy mút trên/mút dưới vì EBITDA hay “bảo vệ năm sau”."
	},
	3: {
		cfApply: "Đặc tính quyết định là thích hợp (relevance) — CF.2.6–2.11. Thông tin có predictive/confirmatory value thì thích hợp dù chưa ghi nhận. Thông báo 20/12 xảy ra trước khóa sổ; mất 28% doanh thu có khả năng tạo khác biệt cho đánh giá dòng tiền 20X7. Recognition không phải điều kiện của relevance. Số hóa đơn 20X6 đã đúng nên không điều chỉnh — nhưng im lặng là obscuring thông tin trọng yếu (CF.2.11).",
		ifrs18: "IFRS 18.15–24 phân vai trò báo cáo chính và thuyết minh: PFS cung cấp tóm tắt có cấu trúc; notes cung cấp thông tin material bổ sung. IFRS 18.20 và 18.41(d): phải tách/thuyết minh thông tin trọng yếu trong notes. IFRS 18.43: không được để user suy ra sai rằng mô hình kinh doanh còn nguyên. Tập trung khách hàng 28% là đặc điểm cần mô tả. IFRS 18 không bắt ghi nhận một “tài sản/nợ” mới — đúng với CF: thuyết minh, không bút toán doanh thu.",
		traps: "Faithful representation của số đã ghi không xóa nghĩa vụ mô tả hiện tượng khác. Free from error của hóa đơn 20X6 là đúng nhưng không quyết định. Comparability “đừng trộn kỳ” bị hiểu sai: một note không phá so sánh giữa các năm. Timeliness không liên quan khi báo cáo vẫn phát hành đúng hạn. Lô 0,4 triệu CU tháng 1 không đảo 28%. Cắt CF.2.6 thành “chỉ thích hợp khi đã ghi nhận” là sai.",
		treatment: "Không sửa doanh thu/lợi nhuận 20X6. Thuyết minh: khách hàng 28%, thông báo không gia hạn, không thể thay thế trước quý 3/20X7, rủi ro tập trung và ảnh hưởng dòng tiền dự kiến."
	},
	4: {
		cfApply: "Đặc tính quyết định là trọng yếu (materiality) như khía cạnh entity-specific của relevance — CF.2.11. Không có ngưỡng % thống nhất. Nature hoặc magnitude, hoặc cả hai. 600.000 CU nhỏ so với doanh thu (0,3%) nhưng đưa EPS đúng forecast 0,24 CU mà ba sell-side đang neo, không có bằng chứng mới: có thể thay đổi quyết định. Đảo không căn cứ cũng tổn hại neutrality / free from error, nhưng câu hỏi “trực tiếp nhất” là materiality theo ngữ cảnh.",
		ifrs18: "IFRS 18 (B1–B5) tái khẳng định materiality: thông tin là trọng yếu nếu có thể ảnh hưởng quyết định khi bỏ sót, sai hoặc làm mờ. IFRS 18.41 cấm obscure material information. Ngưỡng nội bộ 1% không thay thế đánh giá định tính. Trình bày EPS và lợi nhuận trên mặt báo cáo lãi lỗ (IFRS 18.46+) khiến một bút toán “nhỏ” có thể trọng yếu vì vị trí và ngữ cảnh forecast.",
		traps: "“Chỉ neutrality / chỉ free from error” là hệ quả, không phải QC quyết định. Cost constraint không cho phép bỏ qua thư luật sư đã có. Comparability với EPS 0,24 của đối thủ không biện minh đảo không có bằng chứng. Điều chỉnh FX 80.000 CU là nhiễu: không đổi quyết định như EPS.",
		treatment: "Giữ dự chi 600.000 CU theo thư 15/12. Không đảo. Nếu sau khóa sổ có bằng chứng mới, xử lý theo IAS 10. Không dùng ngưỡng 1% máy móc. Thuyết minh ước tính pháp lý nếu còn bất định trọng yếu."
	},
	5: {
		cfApply: "Đặc tính quyết định là không sai sót (free from error) — CF.2.18–2.19. Faithful representation không nghĩa chính xác tuyệt đối. Nếu quy trình phù hợp và dùng bằng chứng sẵn có tại thời điểm, kết quả sau này khác không tự thành error mà là thay đổi ước tính (IAS 8). Lỗi linh kiện 20X6 là thông tin mới. Error chỉ khi dùng dữ liệu sai, bỏ qua thông tin đã có, hoặc bias.",
		ifrs18: "IFRS 18 không thay IAS 8 về sai sót so với thay đổi ước tính. IFRS 18.30–34: nhất quán trình bày; restatement chỉ khi thật sự là lỗi kỳ trước. IFRS 18.43: thuyết minh ước tính (đã có trong BCTC 20X4) là mô tả cần thiết. “Thích hợp với quyết định năm 20X4” không biến một ước tính trung lập thành error để IFRS 18 buộc trình bày lại số so sánh.",
		traps: "Relevance của quyết định cổ đông năm 20X4 là nhiễu. Timeliness của restatement không đặt ra khi không có error. Comparability giữa các năm được IAS 8 bảo vệ đúng cách: thay đổi ước tính triển vọng, không hồi tố. Hàng trả lại 0,48 vs 0,50 triệu CU minh họa lệch kết quả ≠ error.",
		treatment: "Không restatement 20X4. Năm 20X6 hấp thụ thay đổi ước tính bảo hành (và thuyết minh nếu trọng yếu). Giữ mô tả phương pháp ước tính."
	},
	6: {
		cfApply: "Đặc tính quyết định là đầy đủ (completeness) — CF.2.13–2.14. Ghi nhận đủ số không thay cho mô tả: bản chất (present value), thời điểm, dòng tiền chưa chiết khấu, lãi suất, độ nhạy, giả định luật. User không tái lập được hiện tượng từ một dòng. Verifiability và understandability bị kéo theo, nhưng thiếu thông tin cần thiết trước hết là không complete.",
		ifrs18: "IFRS 18.15–24: notes bổ sung thông tin mà tóm tắt trên mặt Bảng cân đối không chứa. IFRS 18.43: nhãn và giải thích phải faithful — “Dự phòng tháo dỡ 60 triệu CU” thiếu ý nghĩa của số (PV, 15 năm, 4,1%). IFRS 18.41: không obscure; cảnh báo quy định có thể đẩy dòng tiền lên 160 triệu CU thuộc đặc điểm không chia sẻ cần mô tả. IAS 37 vẫn chi phối đo lường; IFRS 18 chi phối cách trình bày/thuyết minh.",
		traps: "Verifiability “hai kỹ sư ra cùng 60” không thay completeness của depiction. Understandability không cho phép một dòng vì “user chết đuối”. Materiality của tổng số không xóa thiếu note. Cost constraint do IASB cân khi viết chuẩn mực, không phải entity tự cắt (CF.2.39; IFRS 18 không cấp miễn trừ).",
		treatment: "Giữ 60 triệu CU nếu PV trung lập. Thuyết minh: dòng tiền 110 triệu CU / 15 năm / 4,1%, độ nhạy lãi suất và ngày đóng cửa, giả định luật hiện hành, rủi ro quy định 20X7."
	},
	7: {
		cfApply: "Đặc tính quyết định là trung lập — CF.2.16–2.17. Prudence không cho phép overstate liabilities. Chỉ 8 triệu CU là present obligation. 22 triệu CU cửa hàng chưa được HĐQT biểu quyết và 15 triệu CU “đệm” là big bath: 20X6 quá bi quan, 20X7 quá lạc quan. Gộp bảo hành 1,1 triệu CU vào cùng dòng làm unlike things look alike (CF.2.27).",
		ifrs18: "IFRS 18.41–43: chỉ gộp khoản có đặc điểm được chia sẻ; tái cấu trúc đã cam kết, kế hoạch tương lai, buffer và bảo hành là bốn hiện tượng khác nhau. IFRS 18.6 trung lập trong việc chọn gì đưa vào operating profit (IFRS 18.47+): một “dự phòng chiến lược” 45 triệu CU làm méo subtotal bắt buộc. IAS 37: không ghi kế hoạch tương lai. IFRS 18 không biến overstatement thành “thận trọng”.",
		traps: "Prudence “thà ghi nhiều nợ” là sai CF.2.16. Completeness (thiếu tách) là hệ quả. Timeliness không quyết định. Comparability với đối thủ lỗ 40 triệu CU là copy mô tả sai. Email “làm 20X6 xấu hết mức” là bằng chứng bias.",
		treatment: "Chỉ ghi 8 triệu CU thôi việc đã thông báo. Không ghi 22 + 15. Tách bảo hành. Thuyết minh kế hoạch đóng cửa như sự kiện sau khóa sổ / kế hoạch, không phải provision."
	},
	8: {
		cfApply: "Đặc tính quyết định là có thể so sánh — CF.2.24–2.29. Consistency là phương tiện, không phải QC độc lập. Đổi FIFO → bình quân đúng một năm, lý do không khớp physical flow, có động cơ covenant, không restatement comparatives: like things trông khác theo thời gian. Alternative methods diminish comparability. Cũng tổn hại faithful representation.",
		ifrs18: "IFRS 18.30: nhất quán phân loại và trình bày giữa các kỳ. IFRS 18.32–34: khi thay đổi, trình bày lại số so sánh hoặc thuyết minh nếu impracticable. IFRS 18.6: useful information gồm comparability. Việc đổi công thức giá vốn là IAS 2 / IAS 8; IFRS 18 cấm lấy “một cột số cho dễ hiểu” để bỏ comparatives. Đổi scrap 0,3 triệu CU là thay đổi ước tính — khác đổi công thức; IFRS 18.41 không cho gộp hai thay đổi khác bản chất dưới một nhãn.",
		traps: "Understandability, timeliness hai tuần, cost 0,6 triệu CU, “0,9% doanh thu” là nhiễu. IAS 2 cho chọn FIFO/WA không xóa consistency intra-entity.",
		treatment: "Quay lại FIFO (khớp physical flow) hoặc, nếu đổi thật sự tốt hơn, restatement 20X5 theo IAS 8 và thuyết minh lý do, ảnh hưởng, ý định không nhảy lại năm sau."
	},
	9: {
		cfApply: "Đặc tính quyết định là kịp thời (timeliness) — CF.2.33, đặc tính nâng cao. Thông tin 9 tháng sau khóa sổ kém khả năng ảnh hưởng quyết định (tái tài trợ tháng 4, bán cổ phiếu tháng 5). Relevance tiềm năng còn nhưng bị weakening. Timeliness không cứu thông tin sai (CF.2.37) — nhưng số đã khóa nội bộ từ 18/3.",
		ifrs18: "IFRS 18.28: tần suất báo cáo; thông tin phải được cung cấp kịp để còn useful. IFRS 18.6 liệt kê timeliness như đặc tính nâng cao của thông tin hữu ích. IFRS 18 không cho phép giữ báo cáo đã hoàn tất vì ĐHĐCĐ hay “chất lượng thuyết minh” khi completeness/verifiability đã đạt từ tháng 3. Vai trò PFS/notes (18.15–24) đã được thỏa khi bộ IFRS đầy đủ đã qua EQCR.",
		traps: "Completeness/verifiability/FR là lý do đưa ra sau. Relevance “nền tảng bị mất” là hệ quả của trễ, không thay QC quyết định. Sai sót tiền mặt 0,2 triệu CU đã sửa — nhiễu.",
		treatment: "Phê duyệt và phát hành khi bộ số đã sẵn sàng (tháng 3). Không trì vì nghị quyết cổ tức. Nếu đã trễ: thuyết minh ngày duyệt và sự kiện sau khóa sổ trọng yếu (IAS 10), không giấu việc tái tài trợ."
	},
	10: {
		cfApply: "Đặc tính quyết định là dễ hiểu (understandability) — nhưng CF.2.34–2.36, đặc biệt CF.2.35: không được loại thông tin phức tạp chỉ vì khó. User được giả định có hiểu biết hợp lý. Loại danh mục 1,1 tỷ CU (9% tài sản) làm incomplete và có thể misleading. Completeness cũng bị phá, nhưng lý do ban quản trị viện đúng là understandability — và viện sai.",
		ifrs18: "IFRS 18.15–24: notes tồn tại đúng để chứa thông tin phức tạp mà PFS không tóm tắt được. IFRS 18.41–43: gộp “tài sản tài chính khác” làm obscure; nhãn không faithful. IFRS 18.20: disaggregate material information in the notes. Level 3 inputs, độ nhạy, rủi ro là giải thích cần thiết (18.43). Trái phiếu chính phủ minh bạch không bù cho structured credit bị giấu. IFRS 7/IFRS 13 chi phối nội dung; IFRS 18 cấm lấy “đơn giản” để xóa note.",
		traps: "Cost 2 triệu CU tư vấn, ngưỡng 8%, timeliness nộp hồ sơ, comparability với peer gộp “other” là nhiễu. Email “đừng cho họ đọc fourteen inputs” là thao túng, không phải understandability.",
		treatment: "Tách dòng hoặc note Level 3: bản chất danh mục, 14 unobservable inputs (dải), bảng độ nhạy, rủi ro tín dụng/thanh khoản. Không xóa sổ. PFS có thể một dòng nếu note đầy đủ và không obscure."
	},
	11: {
		cfApply: "Đặc tính quyết định là có thể kiểm chứng (verifiability) kết hợp completeness — CF.2.30–2.32. Có thể verify một khoảng, không bắt buộc một điểm. Không công bố input thì không indirect-verify được. CF.2.22: ước tính bất định vẫn useful nếu mô tả uncertainty. Hai chuyên gia 41 vs 120 triệu CU không tự thành error.",
		ifrs18: "IFRS 18.43: mô tả và giải thích cần thiết để hiểu khoản mục — WACC 11–18%, tăng trưởng 4–22%, khoảng 41–120. IFRS 18.15–24: note, không phải im lặng vì “IFRS chỉ cho một điểm trên mặt”. Điểm 87 triệu CU trên Bảng cân đối (IFRS 13) đi cùng disaggregation trong notes (IFRS 18.20, 18.41). File “confidential” không phải ngoại lệ IFRS 18. Khoản Level 1 6 triệu CU không cứu Level 3 không tài liệu.",
		traps: "Free from error vì hai chuyên gia khác nhau là sai. Relevance của số fundraising, comparability với peer im lặng, timeliness ngày duyệt là nhiễu.",
		treatment: "Ghi một điểm (87 triệu CU nếu trung lập trong khoảng), thuyết minh phương pháp, unobservable inputs, khoảng, độ nhạy, và rằng tư vấn ngoài duy trì mô hình. Không giấu file giả định then chốt."
	},
	12: {
		cfApply: "Đặc tính quyết định là trình bày trung thực — CF.2.12 / CF.2.27. Tiền gửi Bank A và thấu chi Bank B không có legally enforceable right of set-off là hai hiện tượng khác nhau. Netting làm unlike things look alike. Understandability không được đánh đổi FR (CF.2.37).",
		ifrs18: "IFRS 18.44: không bù trừ tài sản và nợ trừ khi IFRS khác yêu cầu/cho phép. Offsetting, trừ khi phản ánh substance, làm giảm khả năng hiểu giao dịch và đánh giá dòng tiền. IFRS 18.41: đặc điểm không chia sẻ (hai ngân hàng, hai khu vực pháp lý, thấu chi on demand) → disaggregate. Quyền set-off 1 triệu CU cùng Bank A là trường hợp được phép riêng, không lan sang Bank B. Covenant không phải căn cứ IFRS 18.",
		traps: "Understandability như “đặc tính nền tảng” là sai hierarchy. Materiality 1,8% nguồn vốn không cho phép net unlike items. Cost/timeliness đàm phán lại covenant là nhiễu.",
		treatment: "Trình bày groos: tiền 48 triệu CU, thấu chi 46 triệu CU (nợ ngắn hạn). Có thể net 1 triệu CU trong Bank A nếu đủ quyền. Thuyết minh không có quyền bù trừ liên ngân hàng. Covenant test không được lập từ số ròng 2 triệu CU trên mặt BCTC."
	},
	13: {
		cfApply: "Đặc tính quyết định là đánh đổi đồng thời relevance và faithful representation — CF.2.20–2.22. Brand tự tạo thích hợp nhưng measurement uncertainty 150–900 triệu CU quá cao nên không sufficiently faithful. Framework không override IAS 38. Relevance không thắng một mình. Kênh đúng: thuyết minh, không đưa 400 triệu CU vào lãi.",
		ifrs18: "IFRS 18.4: đo lường/ghi nhận do chuẩn mực khác (IAS 38 cấm internally generated brand). IFRS 18.6 không cho “Framework-based treatment” để ghi lên mặt P/L. IFRS 18.117+ MPM: nếu quản trị muốn user thấy “giá trị thương hiệu”, đó là thông tin ngoài tổng IFRS — không được thay operating profit. IFRS 18.43: nếu thuyết minh giá trị, phải mô tả khoảng và quy trình, không một điểm im lặng. Nhãn mua 20X3 (acquired) khác internally generated — IFRS 18.41 không “đồng bộ” bằng revaluation tùy tiện.",
		traps: "Chỉ relevance là sai CF.2.20. Completeness của khoảng không biến khoản cấm ghi nhận thành tài sản. Prudence “không ghi gì” gần đúng về ghi nhận nhưng bỏ kênh thuyết minh. Comparability với MD&A đối thủ không phải ghi P/L.",
		treatment: "Không ghi 400 triệu CU. Không đánh giá lại nhãn mua. Thuyết minh (ngoài PFS): khoảng 150–900, giả định, rằng IAS 38 cấm ghi nhận."
	},
	14: {
		cfApply: "Đặc tính quyết định là comparability khi phân loại dòng tiền — CF.2.26–2.29. IAS 7 cho chọn operating/financing không xóa nhất quán intra-entity. Nhảy 20X4 operating → 20X5 financing → 20X6 operating làm like cash flows trông khác. Thuyết minh giúp tái phân loại một phần (CF.2.38) nhưng không phục hồi hết time-series.",
		ifrs18: "IFRS 18.30 consistency of presentation, disclosure and classification giữa các kỳ. IFRS 18.32–34 comparatives. Phân loại lãi vay trên BCSLTT vẫn là IAS 7; IFRS 18 yêu cầu cùng chính sách được áp nhất quán và, nếu đổi, restatement số so sánh. IFRS 18.6: comparability là đặc tính của thông tin hữu ích trên mọi primary statement, kể cả cash flows. Email “guidance OCF 85” là động cơ, không phải đặc điểm được chia sẻ để phân loại (18.41).",
		traps: "Neutrality “cả hai đều được phép”, materiality 2%, cost/timeliness restatement là nhiễu. Cổ tức nhất quán không cứu lãi vay nhảy.",
		treatment: "Chọn một chính sách IAS 7, restatement comparatives, thuyết minh. Không nhảy để đạt guidance OCF."
	},
	15: {
		cfApply: "Đặc tính quyết định là relevance (và completeness của depiction về entity) — CF.2.6 / Chương 3 going concern. 40% khả năng rút giấy phép — chấm dứt mô hình 70% doanh thu — capable of making a difference dù chưa ghi impairment. Im lặng khi có nghi ngờ đáng kể không phải prudence; “đừng panic thị trường” là thao túng neutrality.",
		ifrs18: "IFRS 18.10–14 (cơ sở hoạt động liên tục, chuyển từ IAS 1): nếu có bất định trọng yếu liên quan going concern, phải thuyết minh. IFRS 18.15–24: notes mang thông tin mà giả định going concern trên mặt báo cáo không diễn tả. IFRS 18.6 trung lập — không được giấu vì market cap. IFRS 18.41 không cho “sản phẩm phụ 4% vừa gia hạn” obscure rủi ro sản phẩm chính 70%. Đo lường tồn kho/nhà xưởng vẫn IAS 2/IAS 36 nếu giả định đổi; trước hết IFRS 18 đòi disclosure.",
		traps: "Prudence “đừng gieo hoảng loạn” là sai. Verifiability của xác suất luật sư không xóa relevance. Comparability với đối thủ im lặng là copy omission. Free from error của số đã ghi không thay thế note.",
		treatment: "Có thể vẫn going concern nếu 40% chưa buộc break-up, nhưng thuyết minh: rà soát, 40%, kịch bản wind-down, ảnh hưởng thu hồi tài sản. Không nhấn mạnh giả tạo sự ổn định bằng sản phẩm 4%."
	},
	16: {
		cfApply: "Đặc tính quyết định là faithful representation bản chất bên liên quan — CF.2.12 / CF.2.11 (nature). Gọi arm’s length khi bằng chứng gấp 10 lần là mô tả sai. Phần 10,8 triệu CU có bản chất phân phối. Nature (related party) làm thông tin material dù có thể nhỏ so với tổng chi phí.",
		ifrs18: "IFRS 18.43: nhãn phải faithful — câu “arm’s-length terms” là nhãn sai. IFRS 18.41: không obscure identity, số tiền, so sánh thị trường. IAS 24 chi phối nội dung related party; IFRS 18.6/18.20 cấm một câu làm mờ. Hợp đồng bao bì không liên quan không cân bằng (18.41: unlike). Email “cổ tức dưới hình thức thuê” xác định substance: không phải operating rent thuần trên P/L.",
		traps: "Understandability “dài khó đọc”, comparability với peer một câu, cost/timeliness thẩm định thêm là nhiễu.",
		treatment: "Ghi 12 triệu CU đã chi, nhưng thuyết minh: bên liên quan là công ty gia đình chủ tịch, 12 vs 1,2 triệu CU thị trường, phần vượt có bản chất phân phối. Không viết “arm’s length”."
	},
	17: {
		cfApply: "Đặc tính quyết định là neutrality; materiality định tính theo ngữ cảnh bonus — CF.2.15 / CF.2.11. NRV 20/12 có bằng chứng; đảo 2 triệu CU không có bằng chứng mới, chỉ có target 50 triệu CU. 2 triệu CU đổi kết quả thưởng nên qualitative material. Quy trình ước tính bị áp dụng sai nên cũng không free from error.",
		ifrs18: "IFRS 18.6 trung lập khi xác định operating profit (IFRS 18.47+): đảo NRV để vượt hurdle làm méo subtotal bắt buộc. IFRS 18.41–43: thay đổi ước tính có/không có bằng chứng là hai đặc điểm khác nhau — không gộp với đảo vải vụn 0,1 triệu CU có hợp đồng. IFRS 18.B1–B5 materiality: 2 triệu CU “nhỏ” vẫn trọng yếu vì bonus. Thuyết minh thay đổi ước tính (IAS 2/IAS 8) nằm trong vai trò notes (18.20).",
		traps: "Completeness của note, understandability, comparability bonus với peer, timeliness là nhiễu. Đảo vải vụn có bằng chứng — khác bản chất.",
		treatment: "Giữ giảm NRV 3,2 triệu CU. Không đảo 2,0. Không trả thưởng trên số 50,1 triệu CU kế toán. Thuyết minh ước tính NRV và kế hoạch thưởng nếu trọng yếu."
	},
	18: {
		cfApply: "Đặc tính quyết định là comparability gắn faithful representation của cùng hiện tượng — CF.2.12 / CF.2.27. Hai tàu đồng nhất: like things must look alike. Nhãn “Lease” vs “Capacity purchase agreement” không đổi substance (quyền chỉ đạo sử dụng, residual-value risk). Thuyết minh 40 trang bù một phần (CF.2.38) không thay nhận diện nhất quán. Enhancing không cứu unfaithful depiction của tàu B.",
		ifrs18: "IFRS 18.41: aggregate theo shared characteristics — cùng tàu, cùng bên cho thuê, cùng term, cùng thanh toán, cùng residual. IFRS 18.43: nhãn phải faithful, không copy chữ trên bìa hợp đồng. Ghi nhận lease là IFRS 16; IFRS 18 cấm để một tàu on-balance và một tàu off-balance khi đặc điểm giống nhau. Sà lan nhỏ ghi đúng vì substance là lease — đúng đối trọng, không phải tiền lệ “chỉ ghi khi hợp đồng gọi là lease”.",
		traps: "Timeliness, materiality “chỉ trình bày / covenant 9 điểm”, cost luật sư, understandability của nhãn pháp lý là nhiễu.",
		treatment: "Ghi cả hai tàu theo IFRS 16 (ROU + liability). Một chính sách, một nhãn. Thuyết minh residual-value guarantee. Không dựa vào 40 trang để “user tự dựng comparability”."
	},
	19: {
		cfApply: "Đặc tính quyết định là hiểu đúng prudence trong neutrality — CF.2.16–2.17. Prudence không hàm ý bất đối xứng. Chọn systematically mút biên = bias. Bỏ inflow virtually certain 5 triệu CU là understatement of assets. Mục tiêu BCTC đa mục đích không phải bảo vệ chủ nợ bằng số lệch.",
		ifrs18: "IFRS 18.6: faithful representation gồm trung lập, không asymmetric conservatism. IFRS 18.43: thuyết minh khoảng 4–9 triệu CU của vụ kiện là giải thích cần thiết; ghi 9 triệu CU im lặng là nhãn không faithful. Ghi nhận bồi thường virtually certain là IAS 37; IFRS 18 không cho “chính sách thận trọng” override. Khoản phải thu 14 triệu CU không bất định không chứng minh chính sách là trung lập (18.41: unlike).",
		traps: "Relevance “cho chủ nợ”, completeness “khoảng làm phình note”, comparability với peer bi quan, timeliness là nhiễu. Email “asymmetry protects lenders” trái CF và IFRS 18.6.",
		treatment: "Vụ kiện: ghi khoảng most likely 6 triệu CU, thuyết minh 4–9. Bồi thường virtually certain: ghi 5 triệu CU (hoặc thuyết minh nếu chưa đủ tiêu chí IAS 37). Bỏ chính sách “luôn mút xấu”."
	},
	20: {
		cfApply: "Đặc tính quyết định là materiality theo nature, không theo magnitude — CF.2.11. Gian lận, chứng nhận giả cho trường học, điều tra cơ quan quản lý: bản chất có thể ảnh hưởng quyết định dù 0,04% doanh thu. Omitting và obscuring nằm trong định nghĩa. Hoàn trả không xóa hiện tượng đã xảy ra.",
		ifrs18: "IFRS 18.B1–B5: materiality gồm nature. IFRS 18.41: không obscure — gộp 180.000 CU gian lận vào “hao hụt vận hành” 220.000 CU chuỗi lạnh là gộp unlike items. IFRS 18.20: thông tin material trong notes (điều tra, contingent liability — IAS 37). IFRS 18.6 trung lập: “đừng viết fraud vì cổ đông lẻ rối” là hiểu sai understandability. Không có miễn trừ cost constraint cho gian lận.",
		traps: "Cost constraint, timeliness chờ luật sư, comparability với peer im lặng, understandability là nhiễu. Hao hụt chuỗi lạnh khác bản chất.",
		treatment: "Thuyết minh gian lận, hoàn trả, điều tra thực phẩm, nợ tiềm tàng (phạt chưa ước được). Tách khỏi hao hụt vận hành. Cân nhắc provision nếu phạt probable; nếu không, contingent liability."
	},
	21: {
		cfApply: "Đặc tính quyết định là verifiability — CF.2.30–2.32. Ước tính vẫn cần verifiable: kiểm tra input và tính lại (indirect). Macro không tài liệu + experience adjustment +12% không mô tả → thất bại. Thông tin hướng tương lai phải công bố giả định và phương pháp (CF.2.32).",
		ifrs18: "IFRS 18.43: giải thích cần thiết gồm phương pháp, giả định, +12%. IFRS 18.15–24: note, không “ước tính nên khỏi verify”. Đo lường FV là IFRS 13; IFRS 18 cấm lấy “bí mật thương mại” để không mô tả đặc điểm then chốt. Cộng 12% vì DSCR là bias (18.6). Trang trại Level 2 không cứu PPA không tái lập được (18.41 unlike).",
		traps: "Timeliness, chỉ relevance, prudence “đừng understate”, comparability với peer không công bố macro là nhiễu.",
		treatment: "Tài liệu hóa mô hình, bỏ hoặc thuyết minh +12%. Công bố discount rate, volume assumption, rằng hai người khác phải tái lập được. Không giấu file vì covenant."
	},
	22: {
		cfApply: "Đặc tính quyết định là comparability ≠ uniformity — CF.2.27–2.28. Nimbus là principal; ghi net sẽ làm unlike things look alike nếu peer là agent, hoặc nhân rộng unfaithful nếu peer cũng là principal. Enhancing không được dùng để chọn mô tả không trung thực. Giữ gross + thuyết minh để user tự so sánh.",
		ifrs18: "IFRS 18.41: phân loại theo đặc điểm của chính Nimbus (phát triển, host, định giá, chịu service credits) — không theo peer. IFRS 18.46–47: doanh thu operating phải faithful; net commission sẽ méo revenue và operating profit bắt buộc. IFRS 18.117 MPM: nếu muốn “sánh bội số peer”, có thể thuyết minh một subtotal ngoài IFRS, reconcile — không thay dòng revenue. Mảng marketplace 6% (agent) ghi net đúng; không lan sang nền tảng tự host (18.41 disaggregate).",
		traps: "Understandability “biên % thấp”, materiality “chỉ trình bày / 1% vốn hóa”, cost/timeliness billing là nhiễu. Email multiple là động cơ.",
		treatment: "Gross cho nền tảng principal. Net cho marketplace agent. Thuyết minh mix. Không chuyển cả hệ thống sang net để đẹp multiple."
	},
	23: {
		cfApply: "Đặc tính quyết định là understandability bị lạm dụng chống completeness — CF.2.34–2.35. Concise là cách trình bày, không phải xóa hiện tượng. Data room = obscuring (CF.2.11). Aggregation quá mức làm unlike items look alike. Listed group không tự miễn notes.",
		ifrs18: "IFRS 18.15–24: PFS = useful structured summary; notes = thông tin material bổ sung. Hai trang bảy dòng không hoàn thành vai trò PFS (18.16). Chuyển segment, maturity, related party, uncertainty vào data room mật khẩu trái 18.20/18.41 (obscure) và trái việc nộp hồ sơ đầy đủ. IFRS 18.28 timeliness không cho cắt note để phát hành sớm. ESG 90 trang không thay note IFRS (unlike, 18.41). Email hạn chế short-seller là thao túng (18.6).",
		traps: "Timeliness, verifiability/free from error của số mặt, prudence “đừng tự tin thái quá” là nhiễu.",
		treatment: "Bộ IFRS đầy đủ: PFS có line items đủ vai trò tóm tắt, notes bắt buộc. Data room có thể bổ sung, không thay thế. Không hạn chế người dùng."
	},
	24: {
		cfApply: "Đặc tính quyết định là relevance (predictive value) của sự kiện sau khóa sổ không điều chỉnh — CF.2.6–2.8. Non-adjusting (IAS 10): không sửa số 20X6 nhưng phải thuyết minh nếu material. Im lặng đến 28/2 là obscuring. Comparability không bị phá bởi một note; note ngăn user suy ra sai rằng năng lực sản xuất còn nguyên.",
		ifrs18: "IFRS 18.20/18.41: thông tin material trong notes. IFRS 18.15–24: PFS giữ số 31/12; notes mang sự kiện 5/1. IFRS 18.6: useful information gồm relevance. IFRS 18 không thay IAS 10, nhưng cấm lấy comparability/neutrality “đừng dọa user” để không note. Kho phụ dột 12/12 là adjusting trong kỳ — unlike cháy sau khóa sổ (18.41). Cost định giá bảo hiểm không miễn disclosure.",
		traps: "Comparability như đặc tính nền tảng, free from error của số 31/12, neutrality “đừng bán tháo”, cost constraint là nhiễu. Email “để Q1 hấp thụ” là giấu.",
		treatment: "Không ghi giảm nhà máy 20X6. Thuyết minh: cháy 5/1, 70 triệu CU / 31% tài sản, bảo hiểm tranh chấp, dừng sản xuất đến quý 3/20X7."
	},
	25: {
		cfApply: "Đặc tính quyết định là cost constraint bị từng đơn vị áp dụng sai — CF.2.39–2.43. IASB cân cost/benefit khi xây chuẩn mực; entity không tự loại yêu cầu. Mẫu lệch 11% → số không còn faithful / free from error. Phải kiểm kê hoặc phương pháp thay thế đáng tin, và thuyết minh limitation.",
		ifrs18: "IFRS 18 không cấp miễn trừ “đếm đá quá đắt”. IFRS 18.6: thông tin trên PFS phải faithful — tồn kho 40% tài sản cuốn từ 20X4, mẫu −11%, không còn FR. IFRS 18.43: phải mô tả hạn chế. IFRS 18.30 consistency: hủy kiểm kê 31/40 điểm phá nhất quán. Phụ tùng 2% đếm đúng không cứu 40% đá (18.41). IAS 2 tồn kho; IFRS 18 cấm obscure limitation.",
		traps: "Timeliness tháng 4, understandability, “prudence bằng cách không đếm”, comparability với peer cuốn số là nhiễu. Email covenant là động cơ.",
		treatment: "Đếm hoặc ước đáng tin, điều chỉnh theo mẫu 11% nếu ngoại suy hợp lý, thuyết minh phương pháp và hạn chế. Không viện CF cost constraint để bỏ kiểm kê."
	},
	26: {
		cfApply: "Đặc tính quyết định là trade-off CF.2.21–2.22: relevance vs faithful representation. Ước tính hiện tại thích hợp hơn giá 18 tháng bên liên quan, nhưng 95 triệu CU trong khoảng 19–140, chọn điểm vì covenant, uncertainty cực cao. Useful nhất: ước tính kèm mô tả uncertainty / công bố range — không một điểm im lặng, cũng không neo mãi 22 triệu CU như current value.",
		ifrs18: "IFRS 18.43: giải thích khoảng, kịch bản FDA, lý do chọn điểm. IFRS 18.6: không được chọn mút trên chỉ vì equity covenant (neutrality). IFRS 13 đo FV; IFRS 18 chi phối nhãn và note. Cổ phiếu niêm yết Level 1 không cùng hiện tượng (18.41). Prudence mút dưới 19 triệu CU cũng là bias. Materiality 3% không xóa disclosure uncertainty.",
		traps: "Comparability với số cũ 22, timeliness chạy thêm kịch bản, prudence mút dưới, “chỉ materiality” là nhiễu. Email “22 chết, 95 sống” là covenant-driven.",
		treatment: "Nếu ghi điểm, chọn điểm trung lập trong khoảng (không 95 vì covenant), thuyết minh 19–140, kịch bản FDA, rằng giao dịch 22 triệu CU là related-party stale. Hoặc giữ cost/stale price chỉ khi không có FV đủ faithful — kèm note vì sao."
	},
	27: {
		cfApply: "Đặc tính quyết định là neutrality trong trình bày kết quả — CF.2.15. Không nhấn/làm mờ để hướng phản ứng của user. Đưa adjusted EBITDA thành dòng cuối đậm, chôn IFRS profit là de-emphasising. Relevance không đứng trên FR (CF.2.20). MPM hữu ích nếu minh bạch, không át via, reconcile rõ.",
		ifrs18: "Đây là case IFRS 18 điển hình. IFRS 18.117–125: management-defined performance measures — subtotal income/expenses dùng trong public communication, thể hiện view của quản trị, không phải tổng IFRS bắt buộc. Adjusted EBITDA 41 triệu CU là MPM. Phải: một note duy nhất, tuyên bố đây là view của quản trị, reconcile về subtotal IFRS gần nhất (operating profit — subtotal bắt buộc của IFRS 18), thuế và NCI, giải thích tại sao useful. IFRS 18 cấm MPM thay thế hay át operating profit / profit trên mặt P/L. IFRS 18.14 equal prominence: EPS IFRS cỡ nhỏ hơn một bậc không đủ. “Normalised rent” và “non-cash depreciation” là điều chỉnh MPM, không phải dòng IFRS.",
		traps: "Timeliness in ấn, verifiability của note 28, cost constraint, prudence “phi tiền mặt” là nhiễu. Relevance “đứng trước” trái CF.2.20 và IFRS 18.6.",
		treatment: "Mặt P/L: cấu trúc IFRS 18 (operating / investing / financing, subtotal bắt buộc), lợi nhuận IFRS nổi bù. Adjusted EBITDA chỉ trong một note MPM, reconcile 41 → 12, giải thích từng cộng lại. Biểu đồ front-half không được là nơi duy nhất user thấy kết quả."
	},
	28: {
		cfApply: "Đặc tính quyết định là completeness khi gộp dự phòng — CF.2.14 / CF.2.11 (obscuring). Điều tra 0–400 triệu CU ghi 12 triệu CU rồi trộn bảo hành là unlike things look alike. Predictive value mất. Ghi nhận tổng không thay completeness của mô tả.",
		ifrs18: "IFRS 18.41–43: aggregate chỉ khi shared characteristics. Môi trường, bảo hành, onerous, tái cấu trúc, điều tra cạnh tranh 0–400, indemnity 30 triệu CU khi bán công ty con — không cùng đặc điểm. IFRS 18.20: disaggregate material items in the notes. IFRS 18.B1–B5: ghi 12 trong khoảng 0–400 rồi một dòng 88 là obscure. Tuổi nợ phải trả thương mại 22 triệu CU không bù (unlike). IAS 37 đo lường; IFRS 18 trình bày.",
		traps: "Timeliness, comparability với peer một dòng, free from error của phép cộng, cost luật sư là nhiễu. Email “12 giữ going concern off the table” là bias (18.6).",
		treatment: "Tách các loại dự phòng trên note (và trên mặt nếu từng loại material). Điều tra: thuyết minh khoảng 0–400, giả định, không chôn 12 triệu CU. Indemnity 30 triệu CU dán nhãn, không “khác”."
	},
	29: {
		cfApply: "Đặc tính quyết định là faithful representation của control/substance — CF.2.12 / CF.2.20. Hàng còn kho người bán, quyền trả đến 30/6, chưa trả tiền, Vertex vẫn bảo hiểm và kiểm soát lối vào: chưa chuyển giao kiểm soát. Hiện tượng là inventory + executory arrangement. Confirmatory value nhân tạo (guidance −6%) không cứu mô tả không faithful. Backlog ở thuyết minh, không trên dòng revenue.",
		ifrs18: "IFRS 18.4: ghi nhận doanh thu do IFRS 15 (control), không do hóa đơn pháp lý. IFRS 18.43: nhãn “doanh thu” không faithful nếu control chưa pass. IFRS 18.46–47: operating income phải phản ánh hiệu quả đã xảy ra; 35 triệu CU bill-and-hold làm méo operating profit bắt buộc. IFRS 18.41: lô 2 triệu CU giao thật ngày 27/12 unlike lô còn trong kho. Comparability với peer bill-and-hold là uniformity sai (CF.2.27 / IFRS 18.41).",
		traps: "Timeliness của confirmatory value, comparability, understandability “đơn hàng chưa giao”, cost hợp đồng kho là nhiễu. Email nhà phân phối: không có nghĩa vụ nhận hàng.",
		treatment: "Không ghi 35 triệu CU doanh thu. Giữ tồn kho. Thuyết minh đơn hàng, quyền trả, bill-and-hold. Lô 2 triệu CU giao thật giữ nguyên."
	},
	30: {
		cfApply: "Đặc tính quyết định của cả case là hierarchy QC — CF.2.21 / CF.2.37. (i) Free from error: đã sửa trước ban hành, depiction cuối faithful. (ii) Relevance + completeness của thông tin khí hậu đã hứa, không phải timeliness. (iii) Faithful representation thắng comparability with rival. (iv) Neutrality (mút trên vì covenant) quyết định, không chỉ measurement uncertainty. Đừng liệt kê hết QC; chỉ ra QC quyết định từng mục. Quy tắc bỏ túi “luôn materiality / luôn prudence / luôn comparability / cost luôn thắng” là sai hierarchy.",
		ifrs18: "IFRS 18.6 neo đúng hierarchy: thông tin hữu ích = relevant + faithfully represented, được enhancing hỗ trợ. (i) Sửa lỗi tiền mặt trước authorisation — IFRS 18.6 FR. (ii) Bỏ phân tích đã hứa: IFRS 18.20/41 notes, không cắt vì 18.28 timeliness. (iii) Cut-off doanh thu theo control (IFRS 15 + IFRS 18.41 đặc điểm hợp đồng mình), không copy rival. (iv) Biological Level 3: IFRS 18.43 khoảng; IFRS 18.6 cấm mút trên vì covenant. Hóa đơn 12.000 CU là nhiễu — đừng gắn bảy QC.",
		traps: "Luôn trọng yếu / luôn thận trọng / luôn so sánh / cost luôn thắng — bốn distractors đúng là quy tắc bỏ túi sai. Email CFO “pick comparability / prudence / cost, ship 28 Feb” trái IFRS 18.6 và CF.2.37.",
		treatment: "(i) Đã sửa — xong. (ii) Trì phát hành hoặc thuyết minh mô hình chưa xong + lịch công bố. (iii) Giữ cut-off theo control của MultiSignal. (iv) Điểm trung lập + note khoảng, không mút trên vì covenant."
	}
};
var BY_QC = {
	relevance: {
		cfApply: "Đặc tính quyết định là thích hợp (Relevance) — CF.2.6–2.11. Recognition không phải điều kiện. Thông tin có predictive/confirmatory value thì phải được đưa vào BCTC (thường là thuyết minh) dù số đã ghi chưa đổi.",
		ifrs18: "IFRS 18.6 neo các đặc tính của Khung khái niệm. IFRS 18.15–24: notes mang thông tin material mà PFS không tóm tắt. IFRS 18.20/18.41: không obscure sự kiện đã xảy ra trước khóa sổ chỉ vì “chưa ghi nhận”.",
		traps: "Faithful representation của số đã ghi, timeliness, comparability “đừng trộn kỳ” thường là nhiễu khi ban quản trị im lặng.",
		treatment: "Không bút toán sai số đúng. Thuyết minh sự kiện, quy mô, ảnh hưởng dòng tiền. Im lặng = obscuring (CF.2.11 / IFRS 18.41)."
	},
	materiality: {
		cfApply: "Đặc tính quyết định là trọng yếu — CF.2.11: nature hoặc magnitude hoặc cả hai. Không có ngưỡng % thống nhất. Omitting và obscuring nằm trong định nghĩa.",
		ifrs18: "IFRS 18.B1–B5 và 18.41: thông tin trọng yếu không được làm mờ. Gian lận, EPS, bonus, điều tra cơ quan quản lý có thể trọng yếu dù nhỏ về số.",
		traps: "Cost constraint, understandability, comparability với peer im lặng, ngưỡng 1%/5% máy móc là nhiễu.",
		treatment: "Đánh giá theo quyết định của user thực. Thuyết minh bản chất. Không gộp vào dòng “hao hụt” hay “khác”."
	},
	"faithful representation": {
		cfApply: "Đặc tính quyết định là trình bày trung thực — CF.2.12: substance over form, complete, neutral, free from error. Nhãn pháp lý không thay quyền, rủi ro và kiểm soát.",
		ifrs18: "IFRS 18.6, 18.41–44: phân loại/nhãn theo đặc điểm được chia sẻ; cấm offset unlike items; cấm nhãn không faithful. Ghi nhận vẫn do IFRS 9/15/16.",
		traps: "Relevance của dòng tiền, comparability với peer theo nhãn, verifiability của legal title là nhiễu (CF.2.37).",
		treatment: "Mô tả đúng hiện tượng (vay, lease, tồn kho, không phải bán). Tách unlike items. Thuyết minh bản chất."
	},
	completeness: {
		cfApply: "Đặc tính quyết định là đầy đủ — CF.2.13–2.14. Ghi nhận số không thay mô tả: giả định, khoảng, độ nhạy, bản chất hiện giá.",
		ifrs18: "IFRS 18.15–24 và 18.41–43: notes phải chứa giải thích cần thiết; không gộp unlike; không một dòng cho mọi nghĩa vụ.",
		traps: "Understandability “user chết đuối”, verifiability một điểm, materiality của tổng, cost constraint là nhiễu.",
		treatment: "Giữ số nếu trung lập. Tách hiện tượng khác bản chất. Thuyết minh giả định then chốt và khoảng."
	},
	neutrality: {
		cfApply: "Đặc tính quyết định là trung lập — CF.2.15–2.17. Prudence không phải bi quan có hệ thống, big bath, hay chọn mút vì bonus/covenant.",
		ifrs18: "IFRS 18.6: FR gồm trung lập. IFRS 18.47+ operating profit không được méo vì buffer hay đảo ước tính. IFRS 18.117+ MPM phải reconcile, không át tổng IFRS.",
		traps: "Gọi “prudence”, comparability với peer bi quan, materiality % nhỏ là nhiễu. Email bonus/covenant là bằng chứng bias.",
		treatment: "Ước tính trong khoảng bằng chứng, không mút biên vì mục tiêu. Tách buffer khỏi provision thật."
	},
	"free from error": {
		cfApply: "Đặc tính quyết định là không sai sót — CF.2.18–2.19. Ước tính dùng quy trình và bằng chứng lúc đó không thành error khi thực tế sau khác (IAS 8 — thay đổi ước tính).",
		ifrs18: "IFRS 18.30–34: restatement comparatives chỉ khi lỗi kỳ trước, không khi thay đổi ước tính. IFRS 18.43: đã mô tả là ước tính thì depiction không đòi chính xác tuyệt đối.",
		traps: "Relevance của quyết định cũ, comparability giữa các năm, timeliness của restatement là nhiễu.",
		treatment: "Không hồi tố. Hấp thụ thay đổi ước tính kỳ này. Thuyết minh nếu trọng yếu."
	},
	comparability: {
		cfApply: "Đặc tính quyết định là có thể so sánh — CF.2.24–2.29. Like things look alike; consistency là phương tiện; không phải uniformity hay copy mô tả sai.",
		ifrs18: "IFRS 18.30–34 nhất quán và comparatives. IFRS 18.41 phân loại theo đặc điểm của chính entity, không theo peer.",
		traps: "Understandability một cột số, cost/timeliness restatement, “chuẩn mực cho chọn nên khỏi nhất quán” là nhiễu.",
		treatment: "Một chính sách, restatement nếu đổi. Không nhảy mô hình/công thức/cut-off vì covenant hay multiple."
	},
	verifiability: {
		cfApply: "Đặc tính quyết định là có thể kiểm chứng — CF.2.30–2.32. Indirect verification = input + tính lại. Công bố giả định, khoảng, phương pháp.",
		ifrs18: "IFRS 18.43: giải thích cần thiết gồm mô hình, macro, experience adjustment. IFRS 18.20 notes; không “ước tính nên khỏi verify”.",
		traps: "Free from error vì hai chuyên gia khác nhau, relevance một điểm, timeliness, bí mật thương mại là nhiễu.",
		treatment: "Tài liệu hóa mô hình. Thuyết minh input, khoảng, độ nhạy. Điểm trên mặt đi cùng note, không im lặng."
	},
	timeliness: {
		cfApply: "Đặc tính quyết định là kịp thời — CF.2.33 (enhancing). Thông tin đến tay muộn kém khả năng ảnh hưởng quyết định. Không cứu thông tin sai (CF.2.37).",
		ifrs18: "IFRS 18.28 tần suất/kịp thời. IFRS 18.6 liệt kê timeliness. Không giữ báo cáo đã xong vì deal hay ĐHĐCĐ khi completeness đã đạt.",
		traps: "Completeness/verifiability “chờ chất lượng”, FR “đừng phát hành số dở” khi số đã khóa là nhiễu.",
		treatment: "Phát hành khi bộ IFRS sẵn sàng. Thuyết minh ngày duyệt và sự kiện sau khóa sổ."
	},
	understandability: {
		cfApply: "Đặc tính quyết định là dễ hiểu — CF.2.34–2.36. Phân loại, trình bày súc tích; CF.2.35 cấm loại thông tin phức tạp nhưng cần thiết.",
		ifrs18: "IFRS 18.15–24: notes là chỗ cho phức tạp. IFRS 18.41–43: không obscure bằng một dòng hay data room mật khẩu.",
		traps: "Cost constraint, materiality “chỉ vừa”, timeliness, comparability với peer gộp “other” là nhiễu.",
		treatment: "Tách, nhãn faithful, độ nhạy/rủi ro trong notes. Không xóa sổ vì “user không hiểu”."
	},
	"cost constraint": {
		cfApply: "Đặc tính quyết định là ràng buộc chi phí bị áp dụng sai — CF.2.39–2.43. IASB cân khi viết chuẩn mực; entity không tự miễn IFRS.",
		ifrs18: "IFRS 18 không cho bỏ kiểm kê, impairment, note bắt buộc vì “user không trả thêm cho cổ phiếu”. Số không còn faithful thì 18.6 bị phá.",
		traps: "Timeliness, understandability, prudence “không đếm thì không overstate”, comparability với peer cắt góc là nhiễu.",
		treatment: "Làm đủ yêu cầu chuẩn mực (hoặc phương pháp thay thế đáng tin) và thuyết minh limitation. Không viện CF để cắt."
	},
	"trade-off": {
		cfApply: "Đặc tính quyết định là đánh đổi CF.2.20–2.22: relevance và faithful representation áp dụng đồng thời. Uncertainty cực cao → không ghi nhận một điểm im lặng; thuyết minh.",
		ifrs18: "IFRS 18.4: không override IAS 38/IFRS 13. IFRS 18.43: khoảng và quy trình. IFRS 18.117+ không biến “giá trị chiến lược” thành dòng P/L.",
		traps: "Chỉ relevance, chỉ prudence không ghi, comparability với số cũ/stale price là nhiễu.",
		treatment: "Không book midpoint của khoảng quá rộng nếu không sufficiently faithful. Note khoảng, giả định, chuẩn mực cấm/cho phép gì."
	},
	hierarchy: {
		cfApply: "Đặc tính quyết định là xếp tầng QC — CF.2.21 / CF.2.37. Nền tảng trước, nâng cao sau; enhancing không cứu mô tả không trung thực. Chỉ ra QC quyết định từng mục, đừng liệt kê hết.",
		ifrs18: "IFRS 18.6 cùng hierarchy: relevant + faithful, rồi enhancing. Timeliness/comparability/cost không thắng FR hay relevance đã hứa.",
		traps: "Quy tắc bỏ túi luôn materiality / luôn prudence / luôn comparability / cost luôn thắng là sai.",
		treatment: "Gắn đúng một QC quyết định cho từng khoản: sửa lỗi; thuyết minh đã hứa; không copy cut-off rival; không mút trên vì covenant."
	}
};
function resolveExplain(issue) {
	if (issue.explain) return issue.explain;
	return EXPLAIN[issue.id] ?? BY_QC[issue.primaryKey] ?? {
		cfApply: issue.model,
		ifrs18: "IFRS 18.6 yêu cầu thông tin trên báo cáo tài chính phải thích hợp và được trình bày trung thực theo Khung khái niệm; IFRS 18.41–43 cấm gộp unlike items và cấm nhãn không faithful.",
		traps: "Các đặc tính nâng cao và ràng buộc chi phí không được dùng để chọn mô tả sai (CF.2.37).",
		treatment: issue.model
	};
}
//#endregion
export { stripQcFromStem as n, thickenStem as r, resolveExplain as t };
