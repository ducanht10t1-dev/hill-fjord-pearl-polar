import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-ifcoejEr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ISSUES = [
	{
		"id": 1,
		"title": "Giao dịch bán hay khoản vay có tài sản đảm bảo?",
		"company": "BuildTech Co.",
		"difficulty": "Khó",
		"primary": "Trình bày trung thực — bản chất hơn hình thức",
		"primaryKey": "faithful representation",
		"cf": "CF.2.12",
		"distractors": [
			"Thích hợp (Relevance)",
			"Trọng yếu (Materiality)",
			"Trung lập (Neutrality)",
			"Có thể so sánh (Comparability)"
		],
		"keywords": [
			"substance",
			"form",
			"vay",
			"repurchase",
			"không bán",
			"liability",
			"faithful",
			"kiểm soát",
			"secured",
			"bản chất",
			"trung thực",
			"Deed of Sale"
		],
		"scenario": "BuildTech Co. đang lập báo cáo tài chính năm 20X6. Ngày 28 tháng 12 năm 20X6, công ty chuyển giao một dây chuyền sản xuất có giá trị ghi sổ (carrying amount) 8 triệu CU cho FinanceCo và nhận 10 triệu CU bằng tiền mặt. Hợp đồng mang tiêu đề “Deed of Sale” (Chứng thư mua bán) và nêu rằng quyền sở hữu pháp lý (legal title) chuyển giao ngay lập tức. BuildTech tuy nhiên vẫn tiếp tục vận hành máy móc trong nhà máy của chính mình, vẫn chịu trách nhiệm bảo trì và bảo hiểm, và có nghĩa vụ hợp đồng mua lại cùng những tài sản đó vào ngày 28 tháng 12 năm 20X8 với giá 11,45 triệu CU. FinanceCo không có quyền sử dụng, di dời hay bán máy móc cho bên thứ ba trong khoảng thời gian hai năm. Chênh lệch 1,45 triệu CU bằng đúng lãi suất thị trường của một khoản vay có đảm bảo kỳ hạn hai năm. Ban quản trị đã ghi nhận khoản thu từ thanh lý (disposal proceeds) 10 triệu CU, một khoản lãi 2 triệu CU và không ghi nhận nợ phải trả tài chính, với lý do rằng hình thức pháp lý của thỏa thuận là một giao dịch bán đã hoàn tất trước ngày kết thúc năm. Tờ trình của giám đốc tài chính gửi ủy ban kiểm toán lập luận rằng dòng tiền 10 triệu CU có giá trị xác nhận (confirmatory value) đối với thanh khoản năm 20X6, do đó đặc tính quyết định phải là Thích hợp (Relevance), không phải hình thức ghi nhận; lãi 2 triệu CU chỉ bằng 0,4% doanh thu nên Trọng yếu (Materiality) không bị ảnh hưởng; và ba đối thủ niêm yết cũng hạch toán các “Deed of Sale” tương tự như bán nên Có thể so sánh (Comparability) đòi hỏi BuildTech làm giống. Một nhà kho phụ đã được bán thật cho bên thứ ba ngày 15 tháng 12, kèm chuyển giao kiểm soát, bàn giao chìa khóa và chấm dứt bảo hiểm — ban quản trị trích dẫn giao dịch đó như “tiền lệ” cho dây chuyền. Luật sư nội bộ thêm rằng việc cấu trúc lại thành khoản vay sẽ trì hoãn phát hành vì chưa nhận được xác nhận ngân hàng, còn thuê thêm ý kiến về bản chất là lãng phí vì quyền sở hữu pháp lý là bằng chứng “dễ kiểm chứng nhất”. Biên bản ủy ban kiểm toán kết luận: “Legal title đã chuyển — mô tả trung lập nhất là ghi nhận một vụ bán.”",
		"model": "Đặc tính quyết định: Faithful representation (substance over form) — CF.2.12. Pháp lý gọi là sale nhưng quyền và nghĩa vụ cho thấy đây là khoản vay có tài sản đảm bảo: BuildTech vẫn kiểm soát máy, chịu rủi ro, nghĩa vụ mua lại với lãi suất thị trường. Ghi nhận bán + lãi CU2m + không ghi nợ là mô tả sai hiện tượng kinh tế. Xử lý đúng: giữ máy trên Bảng cân đối, ghi khoản vay CU10m, phân bổ lãi CU1,45m. Relevance của dòng tiền, Materiality của lãi 0,4%, Comparability với đối thủ, verifiability của legal title là nhiễu: CF.2.37 — đặc tính nâng cao không được dùng để chọn mô tả không trung thực. Nhà kho phụ ngày 15/12 khác bản chất vì kiểm soát đã chuyển."
	},
	{
		"id": 2,
		"title": "Khoản phải thu lạc quan, khoản dự phòng bi quan",
		"company": "SpeedTrade Co.",
		"difficulty": "Khó",
		"primary": "Trung lập — thận trọng áp dụng không nhất quán",
		"primaryKey": "neutrality",
		"cf": "CF.2.15–2.17",
		"distractors": [
			"Không sai sót (Free from error)",
			"Trọng yếu (Materiality)",
			"Đầy đủ (Completeness)",
			"Thận trọng như sự bi quan"
		],
		"keywords": [
			"neutral",
			"prudence",
			"bias",
			"thiên lệch",
			"không bi quan",
			"inconsistent",
			"overstate",
			"trung lập",
			"ECL"
		],
		"scenario": "SpeedTrade Co. đang hoàn thiện báo cáo tài chính năm 20X6. Công ty nắm một khoản phải thu thương mại 20 triệu CU đến hạn từ một khách hàng đã bước vào tái cấu trúc chính thức (formal restructuring) từ tháng 11 năm 20X6. Trong cùng kỳ, một đối thủ đã khởi kiện SpeedTrade; luật sư ước tính rằng nếu SpeedTrade thua kiện sẽ phải trả từ 2 triệu CU đến 3 triệu CU, với kết quả có khả năng xảy ra nhiều nhất (most likely outcome) là 2,4 triệu CU. Ban quản trị chỉ ghi nhận một khoản dự phòng tổn thất tín dụng kỳ vọng (expected-credit-loss allowance) bằng 2% khoản phải thu vì hội đồng quản trị “lạc quan về khả năng khách hàng phục hồi.” Đồng thời công ty đã ghi một khoản dự phòng 10 triệu CU cho vụ kiện vì muốn “thận trọng (conservative) và bảo vệ kết quả năm sau.” Phân tích tín dụng độc lập do ủy ban kiểm toán thuê cho thấy tổn thất kỳ vọng trên khoản phải thu nằm trong khoảng 4 triệu CU đến 6 triệu CU. Không có khoảng hay ước tính thay thế nào được thuyết minh cho cả hai khoản. Giám đốc tài chính viết rằng việc chọn mút trên của vụ kiện là thực hiện đúng khái niệm Prudence của Khung khái niệm, và rằng Không sai sót (Free from error) không bị ảnh hưởng vì cả hai số đều là “ước tính” — ước tính sau này khác đi không phải error. Tờ trình còn nói khoản chênh 8 triệu CU trên vụ kiện chỉ bằng 0,7% tổng tài sản nên Trọng yếu (Materiality) không đặt ra, còn việc không công bố khoảng là để Đầy đủ (Completeness) không biến thuyết minh thành “dump spreadsheet.” Một email nội bộ ngày 22 tháng 12 ghi: “Giữ ECL thấp để covenant EBITDA còn đứng; đẩy provision kiện lên để 20X7 có thể nhả.” Ban pháp chế thêm một chi tiết dễ gây nhiễu: công ty vừa thắng một vụ kiện khác trị giá 0,3 triệu CU vào tháng 10, đã ghi nhận đúng, và cho rằng thành công đó “cân bằng” sự bi quan trên vụ còn lại.",
		"model": "Đặc tính quyết định: Neutrality, được hỗ trợ bởi prudence — CF.2.15–2.17. Prudence không phải chọn số bi quan nhất và không cho phép bất đối xứng có hệ thống. Ở đây lạc quan với phải thu và bi quan với kiện tụng — thiên lệch có chủ đích (bias). Ước tính trung lập nên nằm trong khoảng bằng chứng: ECL khoảng CU5m; provision khoảng CU2,5m, kèm thuyết minh khoảng. Không phải Free from error thuần túy (quy trình bị bóp vì mục tiêu, không phải ước tính trung lập sau này khác). Materiality 0,7% và Completeness “đừng dump” là nhiễu. Email covenant/bonus là bằng chứng bias, không phải prudence."
	},
	{
		"id": 3,
		"title": "Sự mất đi của một khách hàng lớn",
		"company": "Delta Delivery Co.",
		"difficulty": "Khó",
		"primary": "Thích hợp — không bắt buộc ghi nhận",
		"primaryKey": "relevance",
		"cf": "CF.2.6–2.11",
		"distractors": [
			"Trình bày trung thực (Faithful representation)",
			"Chỉ kịp thời (Timeliness)",
			"Không sai sót (Free from error)",
			"Có thể so sánh (Comparability)"
		],
		"keywords": [
			"relevant",
			"predictive",
			"thuyết minh",
			"disclosure",
			"không ghi nhận",
			"28",
			"concentration",
			"thích hợp"
		],
		"scenario": "Delta Delivery Co. đã ghi nhận doanh thu 100 triệu CU và lợi nhuận 8 triệu CU trong năm kết thúc ngày 31 tháng 12 năm 20X6. Ngày 20 tháng 12 năm 20X6, khách hàng lớn nhất — vốn tạo ra 28% doanh thu năm và một tỷ lệ tương đương của dòng tiền hoạt động — đã gửi thông báo bằng văn bản (written notice) rằng hợp đồng giao nhận sẽ không được gia hạn sau ngày 31 tháng 1 năm 20X7. Công việc thay thế có quy mô tương đương không thể được huy động trước quý 3 năm 20X7. Bản thân các hóa đơn năm 20X6 đã được ghi nhận đúng và hợp đồng vẫn còn hiệu lực pháp lý tại ngày báo cáo. Ban quản trị không đưa vào thuyết minh nào, không công bố rủi ro nào và không bàn về tập trung khách hàng (customer concentration), lập luận rằng hợp đồng vẫn còn hiệu lực tại ngày kết thúc năm và việc mất doanh thu sẽ xảy ra năm sau, vì vậy thông tin không thuộc báo cáo tài chính năm 20X6. Giám đốc tài chính bổ sung rằng Trình bày trung thực (Faithful representation) chỉ yêu cầu mô tả các số đã ghi nhận — mà số 20X6 “không sai” — nên Không sai sót (Free from error) đã được thỏa; thuyết minh một sự kiện 20X7 sẽ trộn kỳ và phá Có thể so sánh (Comparability) giữa các năm; còn Kịp thời (Timeliness) không liên quan vì báo cáo vẫn sẽ phát hành đúng hạn tháng 3. Một chi tiết phụ: ngày 8 tháng 1 năm 20X7 (sau khóa sổ, trước ngày duyệt) khách hàng đó đặt thêm một lô nhỏ 0,4 triệu CU với điều khoản thanh toán 15 ngày; ban quản trị gọi đây là “bằng chứng hợp đồng vẫn sống” và càng không cần note. Tờ trình hội đồng còn viện CF.2.6 một cách cắt xén: “thông tin chỉ thích hợp nếu đã được ghi nhận như một yếu tố của báo cáo.”",
		"model": "Đặc tính quyết định: Relevance — CF.2.6–2.11. Recognition không phải điều kiện của relevance. Thông báo 20/12 đã xảy ra trước ngày khóa sổ. Predictive value mạnh với dòng tiền 20X7. Không điều chỉnh số 20X6 đã ghi đúng, nhưng PHẢI thuyết minh (tập trung khách hàng, rủi ro). Im lặng = obscuring thông tin material. Faithful representation của số đã ghi không xóa nghĩa vụ mô tả hiện tượng khác. Lô 0,4 triệu CU tháng 1 không đảo 28% doanh thu. Cắt CF.2.6 thành “chỉ thích hợp khi đã ghi nhận” là sai."
	},
	{
		"id": 4,
		"title": "Mục tiêu thu nhập trên mỗi cổ phiếu hơn một xu",
		"company": "CareHealth Services",
		"difficulty": "Khó",
		"primary": "Trọng yếu — định tính và theo ngữ cảnh",
		"primaryKey": "materiality",
		"cf": "CF.2.11",
		"distractors": [
			"Chỉ trung lập (Neutrality)",
			"Chỉ không sai sót (Free from error)",
			"Ràng buộc chi phí (Cost constraint)",
			"Có thể so sánh (Comparability)"
		],
		"keywords": [
			"material",
			"eps",
			"ngưỡng",
			"qualitative",
			"1%",
			"forecast",
			"nature",
			"trọng yếu"
		],
		"scenario": "CareHealth Services có 100 triệu cổ phiếu phổ thông đang lưu hành và được ba chuyên viên phân tích bên bán (sell-side analysts) theo dõi sát, tất cả đều đã công bố forecast EPS năm 20X6 là 0,24 CU. Trước bút toán kế toán cuối cùng, lợi nhuận trong năm là 23,4 triệu CU, tạo ra EPS 0,234 CU. Ngày 30 tháng 12, không có tư vấn pháp lý mới hay diễn biến tòa án nào, ban quản trị đã đảo một khoản dự chi chi phí pháp lý 600.000 CU vốn được một thư luật sư bên ngoài đề ngày 15 tháng 12 chống lưng. Lợi nhuận tăng lên 24,0 triệu CU và EPS lên 0,240 CU. Khoản 600.000 CU đại diện 0,3% doanh thu và 0,2% tổng tài sản. Hồ sơ khóa sổ của ban quản trị kết luận rằng việc đảo là không trọng yếu vì cả hai tỷ lệ đều dưới ngưỡng nội bộ không chính thức 1% của công ty, và không cần thuyết minh riêng. Chủ tịch ủy ban kiểm toán viết tay bên lề: “Nếu có thiên lệch thì là Trung lập (Neutrality); nếu thư luật sư bị bỏ qua thì là Không sai sót (Free from error) — chứ đừng nói trọng yếu khi 0,2% tài sản.” Giám đốc tài chính thêm rằng việc giữ nguyên dự chi sẽ làm EPS lệch so với hai đối thủ cùng ngành vừa công bố 0,24 CU, nên Có thể so sánh (Comparability) ủng hộ đảo; còn thuê lại luật sư để xác nhận thư 15/12 sẽ tốn 40.000 CU và Ràng buộc chi phí (Cost constraint) không cho phép. Một khoản mục khác cùng ngày — điều chỉnh tỷ giá 80.000 CU — được đảo vì “dưới 1%” và không ai tranh cãi; ban quản trị gộp hai khoản để nói “chính sách ngưỡng được áp dụng nhất quán.” Ba chuyên viên đã viết trong báo cáo tháng 11 rằng CareHealth “sẽ bị định giá lại nếu trượt 0,24 CU.”",
		"model": "Đặc tính quyết định: Materiality như khía cạnh entity-specific của Relevance — CF.2.11. Không có ngưỡng % thống nhất. Nature hoặc magnitude. CU600.000 nhỏ so với doanh thu nhưng đưa EPS đúng forecast, không có bằng chứng mới, có thể thay đổi quyết định. Đảo ngược không căn cứ còn vi phạm free from error / neutrality — nhưng câu hỏi “bị ảnh hưởng trực tiếp nhất” là materiality theo ngữ cảnh. “Dưới 1% = immaterial” là sai. Khoản FX 80.000 CU là nhiễu (không đổi quyết định). Cost constraint và comparability với đối thủ không biện minh đảo không có bằng chứng."
	},
	{
		"id": 5,
		"title": "Một ước tính về sau hóa ra sai",
		"company": "FreshMart Co.",
		"difficulty": "Khó",
		"primary": "Không sai sót — kết quả khác không phải error",
		"primaryKey": "free from error",
		"cf": "CF.2.18–2.19",
		"distractors": [
			"Thích hợp (Relevance)",
			"Trung lập (Neutrality)",
			"Có thể so sánh (Comparability)",
			"Kịp thời (Timeliness)"
		],
		"keywords": [
			"estimate",
			"không phải error",
			"change in estimate",
			"IAS 8",
			"free from error",
			"quy trình",
			"không sai sót"
		],
		"scenario": "FreshMart Co. bán thiết bị gia dụng kèm bảo hành hai năm. Khi lập báo cáo tài chính năm 20X4, công ty đã ước tính chi phí bảo hành ở mức 3,0 triệu CU, sử dụng lịch sử khiếu nại năm năm, tỷ lệ hỏng hiện tại và cơ cấu sản phẩm lúc đó đang có trên thị trường. Ước tính được mô tả trong thuyết minh là một ước tính và phương pháp được giải thích. Trong năm 20X6, một lỗi linh kiện bất ngờ từ một nhà cung cấp mới đã làm các khoản chi tiền mặt thực tế trên lứa hàng 20X4 đạt 4,2 triệu CU. Một cổ đông đã viết thư cho hội đồng quản trị lập luận rằng con số 3 triệu CU là không đúng và do đó báo cáo tài chính gốc đã không trình bày trung thực nghĩa vụ của công ty. Ban quản trị đang cân nhắc liệu báo cáo năm 20X4 có nên được điều chỉnh hồi tố như một sai sót hay liệu năm 20X6 chỉ nên hấp thụ một thay đổi ước tính (change in estimate). Cố vấn của cổ đông nhấn mạnh Thích hợp (Relevance): người sử dụng năm 20X4 đã quyết định dựa trên số “sai”; nếu restatement chậm đến 20X7 thì Kịp thời (Timeliness) cũng chết. Một thành viên hội đồng muốn restatement để “thận trọng và trung lập,” cho rằng để 20X6 gánh chênh 1,2 triệu CU sẽ làm Có thể so sánh (Comparability) giữa các năm méo. Hồ sơ 20X4 cho thấy quy trình ước tính đã dùng đúng dữ liệu có tại thời điểm, ủy ban bảo hành đã họp, và không có bằng chứng lúc đó về nhà cung cấp mới — vốn chỉ được chọn tháng 3 năm 20X5. Chi tiết nhiễu: năm 20X4 công ty còn một ước tính khác về hàng trả lại 0,5 triệu CU, sau đó thực tế là 0,48 triệu CU; cổ đông gộp cả hai để nói “mô hình ước tính của FreshMart có hệ thống sai.”",
		"model": "Đặc tính quyết định: Free from error — CF.2.18–2.19. Faithful representation không có nghĩa chính xác tuyệt đối. Nếu quy trình phù hợp và dùng bằng chứng lúc đó, đây không phải error mà là thay đổi ước tính (IAS 8). Defect bất ngờ là thông tin mới. Error chỉ khi dùng dữ liệu sai, bỏ qua thông tin đã có, hoặc bias. Relevance của quyết định năm 20X4, timeliness của restatement, comparability giữa các năm, và “thận trọng” là nhiễu. Khoản hàng trả lại 0,48 vs 0,50 triệu CU càng minh họa: lệch kết quả không tự thành error."
	},
	{
		"id": 6,
		"title": "Một con số đầy đủ với một mô tả không đầy đủ",
		"company": "NorthPeak Mining",
		"difficulty": "Trung bình–Khó",
		"primary": "Đầy đủ (Completeness)",
		"primaryKey": "completeness",
		"cf": "CF.2.13–2.14",
		"distractors": [
			"Có thể kiểm chứng (Verifiability)",
			"Chỉ dễ hiểu (Understandability)",
			"Trọng yếu (Materiality)",
			"Ràng buộc chi phí (Cost constraint)"
		],
		"keywords": [
			"complete",
			"thuyết minh",
			"discount",
			"sensitivity",
			"giả định",
			"một dòng",
			"đầy đủ"
		],
		"scenario": "NorthPeak Mining ghi nhận một khoản dự phòng tháo dỡ (decommissioning provision) 60 triệu CU tại ngày 31 tháng 12 năm 20X6. Con số là giá trị hiện tại (present value) của các dòng tiền phục hồi môi trường ước tính 110 triệu CU dự kiến trong mười lăm năm, được chiết khấu ở mức 4,1%, và giả định rằng các đạo luật môi trường hiện hành sẽ không thay đổi. Mỏ là mỏ sản xuất duy nhất của NorthPeak và khoản dự phòng là trọng yếu đối với cả nợ phải trả lẫn các covenant đòn bẩy (gearing covenants). Trên mặt Bảng cân đối kế toán và trong thuyết minh, công ty trình bày một dòng duy nhất: “Dự phòng tháo dỡ 60 triệu CU.” Không có mô tả về thời điểm, dòng tiền chưa chiết khấu, lãi suất chiết khấu, độ nhạy đối với một thay đổi của lãi suất hay của ngày đóng cửa, hay khả năng quy định sắp ban hành sẽ làm tăng phạm vi công việc. Ban quản trị cho rằng khoản mục đã đầy đủ vì số tiền đã được ghi nhận toàn bộ. Giám đốc tài chính viết thêm rằng công bố bảng độ nhạy sẽ làm người sử dụng “chết đuối,” nên Dễ hiểu (Understandability) đòi hỏi một dòng; rằng hai kỹ sư độc lập ra cùng 60 triệu CU nên Có thể kiểm chứng (Verifiability) đã xong; rằng 60 triệu CU đã vượt ngưỡng 5% nợ phải trả nên Trọng yếu (Materiality) không còn vấn đề; và rằng thuê tư vấn viết năm trang thuyết minh sẽ tốn 180.000 CU — Ràng buộc chi phí (Cost constraint) không cho phép. Một chi tiết phụ được để ở thuyết minh 2 về chính sách kế toán: “Các khoản dự phòng được ghi nhận khi có nghĩa vụ hiện tại” — không thêm gì về mỏ. Email nội bộ của trưởng phòng môi trường ngày 11 tháng 12 cảnh báo dự thảo quy định 20X7 có thể đẩy dòng tiền chưa chiết khấu lên 160 triệu CU; ban quản trị gọi đây là “tin đồn chính sách” không thuộc BCTC.",
		"model": "Đặc tính quyết định: Completeness — CF.2.13–2.14. Ghi nhận số không thay cho mô tả đầy đủ: bản chất, ý nghĩa của số (present value), giả định then chốt, độ nhạy. Không cần dump spreadsheet kỹ sư. Verifiability và understandability bị kéo theo, nhưng thiếu thông tin cần thiết trước hết là không complete. Materiality của tổng số không xóa completeness của depiction. Cost constraint do IASB cân khi viết IAS 37, không phải entity tự cắt note. Cảnh báo quy định 20X7 thuộc thông tin cần thiết về giả định."
	},
	{
		"id": 7,
		"title": "Năm dọn dẹp của một tổng giám đốc mới",
		"company": "Apex Retail Group",
		"difficulty": "Khó",
		"primary": "Trung lập — quản trị lãi big-bath",
		"primaryKey": "neutrality",
		"cf": "CF.2.16–2.17",
		"distractors": [
			"Thận trọng (Prudence)",
			"Đầy đủ (Completeness)",
			"Kịp thời (Timeliness)",
			"Có thể so sánh (Comparability)"
		],
		"keywords": [
			"big bath",
			"neutral",
			"overstate",
			"không phải prudence",
			"buffer",
			"present obligation",
			"trung lập"
		],
		"scenario": "Apex Retail Group bổ nhiệm một tổng giám đốc mới ngày 1 tháng 11 năm 20X6. Trong tháng 12 công ty đã ghi nhận một “dự phòng tái cấu trúc chiến lược” 45 triệu CU, biến một khoản lãi dự thảo 12 triệu CU thành lỗ báo cáo 33 triệu CU. Hồ sơ làm việc tách 45 triệu CU như sau: 8 triệu CU chi phí trợ cấp thôi việc mà việc thông báo cho những người bị ảnh hưởng đã xảy ra trước ngày 31 tháng 12 và do đó một nghĩa vụ hiện tại (present obligation) tồn tại; 22 triệu CU liên quan đến đóng cửa cửa hàng mà hội đồng sẽ chỉ bỏ phiếu vào tháng 3 năm 20X7; và 15 triệu CU được ghi nhãn nội bộ là “đệm cho bất ngờ để năm 20X7 bắt đầu sạch.” Trong cuộc gọi công bố kết quả tháng 1, tổng giám đốc mô tả 20X6 là “một năm chuyển tiếp” và nói rằng guidance năm 20X7 đã được đặt ở mức công ty có thể “dễ dàng vượt.” Không có phân tích nào về ba thành phần được cung cấp trong báo cáo tài chính. Thư gửi ủy ban kiểm toán gọi 45 triệu CU là Prudence: “thà ghi nhiều nợ hơn là ghi ít.” Trưởng phòng báo cáo phản đối rằng Đầy đủ (Completeness) mới là vấn đề vì thiếu tách khoản, và đề xuất phát hành sớm hơn một tháng để Kịp thời (Timeliness) không bị hy sinh vì tranh cãi kỹ thuật. Một thành viên hội đồng muốn ghi toàn bộ 45 triệu CU để “sánh” với một đối thủ vừa công bố lỗ tái cấu trúc 40 triệu CU — Có thể so sánh (Comparability). Chi tiết nhiễu: Apex cũng có một khoản dự phòng bảo hành 1,1 triệu CU được ước đúng theo lịch sử khiếu nại; ban quản trị gộp bảo hành vào “tái cấu trúc chiến lược” trên mặt báo cáo “cho gọn.” Email CEO ngày 19 tháng 12: “Hãy làm 20X6 xấu hết mức có thể. Năm sau ta là người hùng.”",
		"model": "Đặc tính quyết định: Neutrality. Prudence không cho phép overstate liabilities. Chỉ khoảng CU8m là nghĩa vụ hiện tại. Phần còn lại là kế hoạch tương lai và buffer — big bath. 20X6 quá bi quan, 20X7 quá lạc quan. Không gọi đây là conservative/prudence. Completeness (thiếu tách) và comparability với đối thủ là nhiễu/hệ quả, không phải QC quyết định. Gộp bảo hành 1,1 triệu CU vào cùng dòng càng làm unlike things look alike, nhưng gốc vẫn là bias."
	},
	{
		"id": 8,
		"title": "Một thay đổi một năm trong công thức tồn kho",
		"company": "Helio Electronics",
		"difficulty": "Khó",
		"primary": "Có thể so sánh — nhất quán là phương tiện",
		"primaryKey": "comparability",
		"cf": "CF.2.24–2.29",
		"distractors": [
			"Dễ hiểu (Understandability)",
			"Ràng buộc chi phí (Cost constraint)",
			"Trọng yếu (Materiality)",
			"Kịp thời (Timeliness)"
		],
		"keywords": [
			"comparab",
			"consistency",
			"FIFO",
			"restat",
			"không phải uniformity",
			"so sánh"
		],
		"scenario": "Helio Electronics đã đo lường hàng tồn kho theo giá FIFO trong mười hai năm liên tiếp. Giá đầu vào tăng mạnh trong năm 20X6. Ban quản trị đã đổi sang giá vốn bình quân gia quyền chỉ cho năm 20X6, làm giảm giá vốn hàng bán 18 triệu CU so với FIFO và nâng lợi nhuận vừa vượt ngưỡng trong một covenant ngân hàng. Thuyết minh nêu rằng thay đổi “phản ánh tốt hơn luồng vật lý của hàng hóa (physical flow of goods).” Dữ liệu quét kho vẫn cho thấy các lô cũ nhất được xuất trước. Giám đốc tài chính đã ghi biên bản ý định trở lại FIFO trong năm 20X7 “khi giá ổn định.” Các số so sánh năm 20X5 chưa được trình bày lại và không có kết quả FIFO pro forma nào cho năm 20X6 được đưa ra. Ban quản trị lập luận rằng một đơn vị được tự do chọn một công thức giá vốn chấp nhận được mỗi năm. Tờ trình thêm rằng Dễ hiểu (Understandability) ủng hộ một con số duy nhất, không phải hai cột FIFO/WA; rằng restatement 20X5 sẽ trì hoãn phát hành hai tuần nên Kịp thời (Timeliness) bị đe dọa; rằng 18 triệu CU bằng 0,9% doanh thu nên Trọng yếu (Materiality) “không đáng một note dài”; và rằng chạy lại FIFO trên hệ thống cũ tốn 0,6 triệu CU — Ràng buộc chi phí (Cost constraint). Một chi tiết phụ: Helio cũng đổi ước tính tỷ lệ phế phẩm từ 2,0% lên 2,1% trong cùng năm, ảnh hưởng 0,3 triệu CU; ban quản trị gộp hai thay đổi dưới tiêu đề “cập nhật ước tính hoạt động” để làm mờ việc đổi công thức. Email ngân hàng ngày 4 tháng 12 nhắc covenant lãi 41 triệu CU; số FIFO đang là 39,2 triệu CU.",
		"model": "Đặc tính quyết định: Comparability — CF.2.24–2.29. Consistency là phương tiện, không phải QC. Thay đổi một năm, lý do không khớp physical flow, có động cơ covenant, không restatement. Alternative methods diminish comparability. Cũng tổn hại faithful representation. Understandability, timeliness, cost constraint và “0,9% doanh thu” là nhiễu. Đổi scrap 0,3 triệu CU là thay đổi ước tính hợp lệ — đừng gộp với đổi công thức."
	},
	{
		"id": 9,
		"title": "Báo cáo được phê duyệt phát hành muộn chín tháng",
		"company": "Harbor Ports Ltd",
		"difficulty": "Trung bình",
		"primary": "Kịp thời (Timeliness)",
		"primaryKey": "timeliness",
		"cf": "CF.2.33",
		"distractors": [
			"Thích hợp như đặc tính nền tảng",
			"Trình bày trung thực (Faithful representation)",
			"Có thể kiểm chứng (Verifiability)",
			"Đầy đủ (Completeness)"
		],
		"keywords": [
			"timely",
			"trễ",
			"enhancing",
			"chín tháng",
			"delay",
			"kịp thời"
		],
		"scenario": "Ngày báo cáo của Harbor Ports Ltd là 31 tháng 12 năm 20X6. Báo cáo tài chính IFRS đầy đủ chỉ được phê duyệt phát hành (authorised for issue) vào ngày 28 tháng 9 năm 20X7. Ban quản trị quy việc chậm trễ cho việc chuyển đổi một hệ thống ERP mới và cho một tranh chấp kéo dài với kiểm toán tiền nhiệm. Tháng 4 năm 20X7, khi báo cáo năm 20X6 vẫn chưa được công bố, Harbor đã tái tài trợ riêng một hạn mức 200 triệu CU; bên cho vay sau đó nói với hội đồng rằng họ đã định giá hạn mức khác nếu nhìn thấy được các báo cáo quá hạn. Hai đối thủ niêm yết đã phát hành kết quả năm 20X6 vào tháng 3 năm 20X7 và sau đó được mua lại với premium. Một nhà đầu tư tổ chức đã bán toàn bộ vị thế vào tháng 5 năm 20X7 viết rằng thông tin, khi cuối cùng xuất hiện, không còn khả năng ảnh hưởng quyết định đã thực hiện. Giám đốc tài chính bác bỏ rằng vấn đề thật sự là Đầy đủ (Completeness) và Có thể kiểm chứng (Verifiability): “Chúng tôi giữ báo cáo đến khi ERP cho số tái lập được.” Ủy ban kiểm toán ghi rằng Trình bày trung thực (Faithful representation) đòi hỏi không phát hành số “dở”; còn một thành viên hội đồng nói Thích hợp (Relevance) mới là đặc tính nền tảng bị mất, timeliness chỉ là hệ quả. Chi tiết nhiễu: bộ số đã “khóa nội bộ” từ ngày 18 tháng 3 năm 20X7 — đầy đủ thuyết minh IFRS, đã qua soát xét EQCR — nhưng chủ tịch yêu cầu chờ đến sau đại hội cổ đông tháng 9 “để khỏi nhiễu nghị quyết cổ tức.” Một sai sót cộng tiền mặt 0,2 triệu CU phát hiện tháng 2 đã được sửa trước khi khóa nội bộ.",
		"model": "Đặc tính quyết định: Timeliness — CF.2.33. Enhancing, không phải fundamental. Thông tin 9 tháng sau khóa sổ kém khả năng ảnh hưởng quyết định (tái tài trợ, bán cổ phiếu). Relevance tiềm năng vẫn còn nhưng bị weakening. Timeliness không cứu được thông tin sai (CF.2.37) — nhưng ở đây số đã khóa nội bộ từ tháng 3. Completeness/verifiability/FR là lý do ban quản trị đưa ra sau; động cơ thật là chờ ĐHĐCĐ. Sai sót 0,2 triệu CU đã sửa — nhiễu."
	},
	{
		"id": 10,
		"title": "Quá phức tạp nên không thuyết minh",
		"company": "NovaBank",
		"difficulty": "Khó",
		"primary": "Dễ hiểu không cho phép lược bỏ thông tin",
		"primaryKey": "understandability",
		"cf": "CF.2.34–2.36",
		"distractors": [
			"Ràng buộc chi phí (Cost constraint)",
			"Trọng yếu (Materiality)",
			"Kịp thời (Timeliness)",
			"Có thể so sánh (Comparability)"
		],
		"keywords": [
			"understand",
			"không được loại",
			"complex",
			"complete",
			"omit",
			"dễ hiểu"
		],
		"scenario": "NovaBank nắm một danh mục phái sinh tín dụng cấu trúc (structured credit derivatives) có giá trị ghi sổ 1,1 tỷ CU, bằng 9% tổng tài sản. Giá trị hợp lý được tạo ra bởi một mô hình nội bộ sử dụng mười bốn đầu vào không quan sát được (unobservable inputs). Giám đốc tài chính đã chỉ đạo đội báo cáo lược bỏ mọi mô tả tường thuật về danh mục khỏi Bảng cân đối kế toán và khỏi thuyết minh, chỉ để lại một dòng duy nhất “tài sản tài chính khác.” Bản ghi nhớ chỉ đạo nêu rằng ngay cả người sử dụng tinh vi cũng sẽ không hiểu mô hình, đưa nó vào sẽ làm báo cáo tài chính không đọc được, và dễ hiểu (understandability) đòi hỏi chúng ta giữ báo cáo đơn giản. Không còn bảng độ nhạy, không còn khoảng đầu vào và không còn mô tả rủi ro nào trong bộ được phê duyệt. Tờ trình bổ sung rằng viết mười trang Level 3 sẽ tốn 2 triệu CU phí tư vấn — Ràng buộc chi phí (Cost constraint); rằng 9% vừa trên ngưỡng nội bộ 8% nên Trọng yếu (Materiality) “chỉ vừa đủ, có thể gộp”; rằng công bố đầy đủ sẽ trì hoãn nộp hồ sơ cơ quan quản lý hai tuần nên Kịp thời (Timeliness) bị đe dọa; và rằng hai ngân hàng ngang hàng cũng gộp structured credit vào “other,” nên Có thể so sánh (Comparability) ủng hộ một dòng. Chi tiết nhiễu: NovaBank có thêm danh mục trái phiếu chính phủ 3,2 tỷ CU đo theo giá niêm yết, thuyết minh rất chi tiết — ban quản trị chỉ vào đó như bằng chứng “chúng tôi không giấu tài sản tài chính.” Email CFO ngày 3 tháng 2: “Nếu user đọc được fourteen inputs, họ sẽ hỏi về capital. Đừng cho họ đọc.”",
		"model": "Đặc tính quyết định: Understandability — nhưng CF.2.35 cấm loại thông tin phức tạp. Loại ra làm incomplete và có thể misleading. User được giả định có hiểu biết hợp lý. Cách đúng: phân loại, mô tả súc tích, độ nhạy Level 3 — không xóa sổ. Completeness cũng bị phá. Cost constraint, materiality 8%, timeliness nộp hồ sơ, comparability với peer gộp “other” là nhiễu. Trái phiếu chính phủ minh bạch không bù cho việc giấu 1,1 tỷ CU."
	},
	{
		"id": 11,
		"title": "Một giá trị hợp lý Cấp 3 không có đầu vào",
		"company": "Lumen Ventures",
		"difficulty": "Khó",
		"primary": "Có thể kiểm chứng và đầy đủ của ước tính cấp 3",
		"primaryKey": "verifiability",
		"cf": "CF.2.30–2.32",
		"distractors": [
			"Chỉ không sai sót (Free from error)",
			"Thích hợp (Relevance)",
			"Có thể so sánh (Comparability)",
			"Kịp thời (Timeliness)"
		],
		"keywords": [
			"verif",
			"range",
			"input",
			"indirect",
			"uncertainty",
			"CF.2.22",
			"kiểm chứng"
		],
		"scenario": "Lumen Ventures đo lường khoản nắm giữ 22% tại một bên được đầu tư chưa niêm yết theo giá trị hợp lý 87 triệu CU tại ngày 31 tháng 12 năm 20X6. Số tiền đến từ một mô hình chiết khấu dòng tiền độc quyền (proprietary discounted-cash-flow model) do một tư vấn bên ngoài duy trì. Thuyết minh chứa một câu: “Giá trị hợp lý dựa trên một mô hình chiết khấu dòng tiền.” Không có đầu vào không quan sát được, không có kịch bản rời rạc, không có khoảng và không có độ nhạy đối với tăng trưởng doanh thu hay lãi suất chiết khấu được thuyết minh. Hai chuyên gia định giá do ủy ban kiểm toán thuê, sử dụng các giả định khác nhau nhưng hợp lý, đã đi đến lần lượt 41 triệu CU và 120 triệu CU. Ban quản trị đã từ chối công bố khoảng đó với lý do rằng IFRS yêu cầu một ước tính điểm duy nhất phải được ghi nhận và trình bày một khoảng sẽ làm người sử dụng rối. Giám đốc tài chính lập luận rằng hai chuyên gia khác nhau chứng tỏ Không sai sót (Free from error) không thể đạt — “vậy đừng công bố gì thêm”; rằng 87 triệu CU là thông tin Thích hợp (Relevance) nhất vì là số tư vấn dùng cho fundraising tháng 11; rằng một đối thủ cũng công bố một điểm Level 3 không có input nên Có thể so sánh (Comparability); và rằng bổ sung bảng độ nhạy sẽ lùi ngày duyệt từ 28 tháng 2 sang 15 tháng 3 nên Kịp thời (Timeliness) bị hy sinh. Chi tiết nhiễu: Lumen còn một khoản nắm giữ niêm yết 6 triệu CU đo theo giá đóng cửa, thuyết minh đầy đủ Level 1; ban quản trị nói “chính sách FV của chúng tôi minh bạch.” Email tư vấn ngày 9 tháng 12 liệt kê WACC 11–18% và tăng trưởng 4–22% — chính file đã tạo ra khoảng 41–120 triệu CU — nhưng bị đóng “confidential, not for notes.”",
		"model": "Đặc tính quyết định: Verifiability (CF.2.30–2.32) kết hợp Completeness. Có thể verify một khoảng, không bắt buộc một điểm. Không có input thì không indirect-verify được. CF.2.22: ước tính bất định vẫn useful nếu mô tả rõ uncertainty. Khác biệt giữa hai chuyên gia không tự thành error. Relevance của số fundraising, comparability với peer im lặng, timeliness của ngày duyệt là nhiễu. Khoản Level 1 không cứu Level 3 không tài liệu."
	},
	{
		"id": 12,
		"title": "Tiền được trình bày ròng với một khoản thấu chi không liên quan",
		"company": "Orion Logistics",
		"difficulty": "Trung bình–Khó",
		"primary": "Trình bày trung thực — bù trừ khoản không cùng bản chất",
		"primaryKey": "faithful representation",
		"cf": "CF.2.12 / CF.2.27",
		"distractors": [
			"Trọng yếu (Materiality)",
			"Dễ hiểu như đặc tính nền tảng",
			"Kịp thời (Timeliness)",
			"Ràng buộc chi phí (Cost constraint)"
		],
		"keywords": [
			"offset",
			"set-off",
			"gross",
			"thấu chi",
			"faithful",
			"unlike",
			"bù trừ",
			"trung thực"
		],
		"scenario": "Orion Logistics trình bày một dòng duy nhất “Tiền và các khoản tương đương tiền 2 triệu CU” như khoản mục đầu tiên của tài sản ngắn hạn. Thuyết minh 17, ở trang 64 của báo cáo thường niên, tiết lộ rằng tập đoàn nắm 48 triệu CU tiền gửi không kỳ hạn (demand deposits) tại Ngân hàng A và một khoản thấu chi 46 triệu CU tại Ngân hàng B. Hai hạn mức nằm ở các khu vực pháp lý khác nhau, khoản thấu chi phải trả ngay khi đòi (repayable on demand), và tập đoàn không có quyền bù trừ có thể thi hành về mặt pháp lý (legally enforceable right of set-off) cũng không có ý định thanh toán ròng. Tờ trình của ban quản trị gửi ủy ban kiểm toán lập luận rằng con số ròng 2 triệu CU cho thấy tốt hơn thanh khoản sẵn có cho tập đoàn như một tổng thể và dễ hiểu hơn hai số gộp lớn gần như triệt tiêu nhau. Các kiểm tra covenant và báo cáo lưu chuyển tiền tệ cũng được lập từ số ròng. Giám đốc tài chính gọi Dễ hiểu (Understandability) là đặc tính nền tảng “trong trường hợp này”; rằng 46 triệu CU thấu chi chỉ bằng 1,8% tổng nguồn vốn nên Trọng yếu (Materiality) không bắt buộc tách; rằng trình bày gộp sẽ buộc viết lại bộ covenant với bốn ngân hàng, tốn 3 tháng và 0,4 triệu CU phí — Ràng buộc chi phí (Cost constraint) và Kịp thời (Timeliness) đều chống. Chi tiết nhiễu: Orion có quyền set-off hợp lệ 1 triệu CU giữa hai tài khoản cùng Ngân hàng A, đã bù trừ đúng; ban quản trị suy ra “vậy netting 48 trừ 46 cũng cùng nguyên tắc.” Email thủ quỹ ngày 2 tháng 1: “Nếu trình bày gộp, tỷ lệ thanh khoản tức thì rơi khỏi covenant. Giữ số 2 triệu CU trên mặt.”",
		"model": "Đặc tính quyết định: Faithful representation. Tiền và thấu chi không có quyền bù trừ là hai hiện tượng khác nhau. Netting làm unlike things look alike (CF.2.27). Understandability không được đánh đổi FR (CF.2.37). Trình bày gộp: cash CU48m và overdraft CU46m. Quyền set-off 1 triệu CU cùng Bank A là nhiễu — không lan sang Bank B. Materiality 1,8% và cost/timeliness của đàm phán lại covenant không biến unlike items thành alike."
	},
	{
		"id": 13,
		"title": "Một thương hiệu tự tạo được ghi nhận theo giá trị chiến lược",
		"company": "Aura Cosmetics",
		"difficulty": "Rất khó",
		"primary": "Đánh đổi thích hợp và trình bày trung thực",
		"primaryKey": "trade-off",
		"cf": "CF.2.20–2.22",
		"distractors": [
			"Chỉ thích hợp (Relevance)",
			"Chỉ đầy đủ (Completeness)",
			"Có thể so sánh (Comparability)",
			"Thận trọng (Prudence)"
		],
		"keywords": [
			"trade-off",
			"IAS 38",
			"uncertainty",
			"không ghi nhận",
			"thuyết minh",
			"2.22",
			"đánh đổi"
		],
		"scenario": "Aura Cosmetics đã gây dựng một thương hiệu tiêu dùng trong hơn hai mươi năm quảng cáo và phát triển sản phẩm. Năm 20X6 ban quản trị muốn người sử dụng thấy giá trị thực của doanh nghiệp và đã ghi nhận một tài sản thương hiệu tự tạo (internally generated brand) 400 triệu CU, với một khoản lãi tương ứng trong lợi nhuận năm. 400 triệu CU là điểm giữa của khoảng 150 triệu CU đến 900 triệu CU của một tư vấn marketing. Không có thị trường hoạt động cho thương hiệu và không có giao dịch có trật tự (orderly transaction) gần đây. IAS 38 cấm ghi nhận thương hiệu tự tạo. Giám đốc tài chính đã nói với kiểm toán rằng Khung khái niệm ưu tiên thông tin thích hợp nhất, giá trị thương hiệu là thông tin thích hợp nhất về nguồn lực của chúng ta, và một xử lý dựa trên Framework nên override một chuẩn mực hạn chế. Không khoảng nào cũng không quy trình ước tính nào được mô tả trong thuyết minh. Ủy ban kiểm toán chia hai phe: phe A nói chỉ cần Thích hợp (Relevance) — “user muốn thấy brand”; phe B nói ghi 400 triệu CU thiếu Đầy đủ (Completeness) vì không có khoảng, hãy ghi rồi thuyết minh 150–900. Một thành viên độc lập muốn không ghi gì cả và gọi đó là Prudence. Giám đốc thương mại chỉ vào hai đối thủ đã “thuyết minh giá trị thương hiệu” trong MD&A (không ghi nhận) và đề xuất Aura phải ghi để Có thể so sánh (Comparability) “mạnh hơn họ.” Chi tiết nhiễu: Aura có một nhãn hàng mua lại năm 20X3, giá gốc 18 triệu CU, đang khấu hao đúng IAS 38; ban quản trị muốn “đồng bộ” bằng cách đánh giá lại nhãn đó lên 90 triệu CU cùng ngày, lấy điểm giữa một khoảng 40–140 triệu CU.",
		"model": "Đặc tính quyết định: áp dụng đồng thời Relevance và Faithful representation — CF.2.20–2.22. Brand tự tạo relevant nhưng measurement uncertainty quá cao (CU150–900m) nên không sufficiently faithful. Framework không override IAS 38. Kênh đúng: thuyết minh, không đưa CU400m vào P/L. Relevance không thắng một mình. Completeness của khoảng, prudence “không ghi,” comparability với MD&A của đối thủ là nhiễu từng phần. Nhãn mua 20X3 (acquired) khác internally generated — đừng đồng bộ bằng revaluation tùy tiện."
	},
	{
		"id": 14,
		"title": "Lãi vay đã trả được phân loại lại mỗi năm",
		"company": "Riverbond Plc",
		"difficulty": "Trung bình–Khó",
		"primary": "Có thể so sánh khi phân loại dòng tiền",
		"primaryKey": "comparability",
		"cf": "CF.2.26–2.29",
		"distractors": [
			"Kịp thời (Timeliness)",
			"Trọng yếu (Materiality)",
			"Trung lập (Neutrality)",
			"Ràng buộc chi phí (Cost constraint)"
		],
		"keywords": [
			"comparab",
			"IAS 7",
			"operating",
			"consistency",
			"restat",
			"so sánh"
		],
		"scenario": "Riverbond Plc trình bày báo cáo lưu chuyển tiền tệ theo IAS 7. Lãi vay đã trả khoảng 40 triệu CU một năm đã được phân loại là dòng ra hoạt động trong năm 20X4, là dòng ra tài trợ trong năm 20X5, và lại là dòng ra hoạt động trong năm 20X6. Thuyết minh mỗi năm khẳng định rằng cách phân loại phản ánh tốt hơn bản chất tài trợ của đơn vị. Dòng tiền hoạt động báo cáo năm 20X6 là 90 triệu CU sau khi cộng lại 40 triệu CU lãi vay; theo chính sách năm 20X5 thì dòng tiền hoạt động cùng năm đó đã là 50 triệu CU. Các mô hình bên bán (sell-side) lấy dòng tiền hoạt động làm điểm xuất phát định giá. Các số so sánh chưa được trình bày lại cho lần thay đổi mới nhất. Ban quản trị lưu ý rằng IAS 7 cho phép một sự lựa chọn và do đó coi nhất quán là vấn đề sở thích chứ không phải của thông tin hữu ích. Giám đốc tài chính viết rằng việc nhảy phân loại không phải thiên lệch — Trung lập (Neutrality) ổn vì “cả hai lựa chọn đều có trong chuẩn mực”; rằng 40 triệu CU bằng 2% tổng dòng nên Trọng yếu (Materiality) không bắt buộc restatement; rằng chạy lại số 20X5 tốn 3 tuần lập trình — Ràng buộc chi phí (Cost constraint) và Kịp thời (Timeliness). Chi tiết nhiễu: cổ tức đã trả 12 triệu CU được phân loại nhất quán là dòng ra tài trợ cả ba năm; ban quản trị chỉ vào đó như bằng chứng “chúng tôi nhất quán khi chuẩn mực bắt buộc.” Email CFO ngày 7 tháng 1 năm 20X6: “Năm nay để lãi vay trong operating lại, guidance OCF là 85 triệu CU.”",
		"model": "Đặc tính quyết định: Comparability. IAS 7 cho chọn không xóa yêu cầu nhất quán intra-entity. Nhảy qua lại làm like cash flows trông khác. Thuyết minh giúp tái phân loại một phần (CF.2.38) nhưng không phục hồi hết time-series. Chọn một chính sách và restatement comparatives. Neutrality “cả hai đều được phép,” materiality 2%, cost/timeliness của restatement là nhiễu. Cổ tức nhất quán không cứu lãi vay nhảy. Email guidance OCF là động cơ, không phải bản chất tài trợ."
	},
	{
		"id": 15,
		"title": "Nghi ngờ hoạt động liên tục bị lược bỏ vì chưa ghi sổ",
		"company": "Cedar Pharma",
		"difficulty": "Khó",
		"primary": "Thích hợp và đầy đủ của mô tả hoạt động liên tục",
		"primaryKey": "relevance",
		"cf": "CF.2.6 / Ch.3",
		"distractors": [
			"Thận trọng (Prudence)",
			"Có thể kiểm chứng (Verifiability)",
			"Có thể so sánh (Comparability)",
			"Không sai sót (Free from error)"
		],
		"keywords": [
			"going concern",
			"relevant",
			"thuyết minh",
			"40%",
			"im lặng",
			"predictive",
			"thích hợp"
		],
		"scenario": "Sản phẩm chính của Cedar Pharma, đại diện 70% doanh thu, đang chịu một cuộc rà soát an toàn của cơ quan quản lý. Hai luật sư độc lập đã tư vấn hội đồng rằng có 40% xác suất giấy phép lưu hành sẽ bị rút trong mười hai tháng kể từ ngày 31 tháng 12 năm 20X6, trong trường hợp đó công ty sẽ đi vào giải thể có trật tự (orderly wind-down). Hàng tồn kho và nhà xưởng chuyên dụng sẽ thu hồi được thực chất ít hơn nhiều so với giá trị ghi sổ theo giả định hoạt động liên tục. Ban quản trị đã lập báo cáo tài chính năm 20X6 trên cơ sở hoạt động liên tục (going-concern basis) với không nhấn mạnh sự kiện, không thuyết minh về cuộc rà soát và không mô tả kết cục thay thế. Tờ trình hội đồng nêu rằng chưa phát sinh nghĩa vụ hiện tại, không tài sản nào bị giảm giá nếu giả định hoạt động liên tục, và do đó không có gì thích hợp để báo cáo. Thuyết minh sẽ làm thị trường hoảng và phá hủy giá trị doanh nghiệp. Chủ tịch lập luận rằng im lặng là Prudence “đừng gieo hoảng loạn”; rằng 40% không thể kiểm chứng (Verifiability) vì là xác suất luật sư; rằng đối thủ cùng rà soát cũng không note nên Có thể so sánh (Comparability); và rằng số 20X6 đã ghi đúng nên Không sai sót (Free from error). Chi tiết nhiễu: Cedar có một sản phẩm phụ chiếm 4% doanh thu vừa được gia hạn giấy phép 5 năm ngày 2 tháng 12; ban quản trị đưa tin này lên trang 2 báo cáo quản trị như “bằng chứng franchise ổn định.” Email hội đồng ngày 18 tháng 12: “40% chưa phải probable. Đừng viết going concern. Market cap sẽ bay.”",
		"model": "Đặc tính quyết định: Relevance (và completeness của depiction về entity). 40% khả năng chấm dứt mô hình kinh doanh capable of making a difference dù chưa ghi impairment. Giả định going concern không được im lặng khi có nghi ngờ đáng kể. “Không panic thị trường” là thao túng neutrality, không phải prudence. Verifiability của xác suất luật sư không xóa relevance. Sản phẩm phụ 4% là nhiễu. Free from error của số đã ghi không thay thế disclosure."
	},
	{
		"id": 16,
		"title": "Tiền thuê bên liên quan được mô tả là arm’s length",
		"company": "Summit Foods",
		"difficulty": "Khó",
		"primary": "Trình bày trung thực bản chất bên liên quan",
		"primaryKey": "faithful representation",
		"cf": "CF.2.12 / CF.2.11",
		"distractors": [
			"Có thể so sánh (Comparability)",
			"Kịp thời (Timeliness)",
			"Chỉ dễ hiểu (Understandability)",
			"Ràng buộc chi phí (Cost constraint)"
		],
		"keywords": [
			"related",
			"arm’s",
			"nature",
			"phân phối",
			"faithful",
			"10 lần",
			"bên liên quan"
		],
		"scenario": "Summit Foods trả 12 triệu CU một năm để thuê kho trung tâm từ một công ty thuộc sở hữu gia đình chủ tịch. Hai thẩm định độc lập do ủy ban kiểm toán thu thập đưa tiền thuê thị trường của một cơ sở tương đương ở mức 1,2 triệu CU. Summit ghi nhận toàn bộ 12 triệu CU như tiền thuê hoạt động. Thuyết minh bên liên quan gồm một câu: “Tập đoàn thuê kho bãi từ một bên liên quan theo các điều khoản ngang giá thị trường (arm’s-length terms).” Thuyết minh không xác định bên liên quan là ai, không nêu số tiền, và không so sánh các điều khoản với thị trường. Công ty gia đình báo cáo 12 triệu CU như thu nhập cho thuê thông thường. Ban quản trị cho rằng câu đó đủ vì IAS 24 là một chuẩn mực thuyết minh và giao dịch đã được ghi nhận. Giám đốc tài chính thêm rằng nêu tên gia đình chủ tịch sẽ làm báo cáo “dài và khó đọc” — Dễ hiểu (Understandability); rằng đối thủ cũng chỉ viết một câu IAS 24 nên Có thể so sánh (Comparability); rằng đi thẩm định thêm hai thành phố sẽ lùi ngày duyệt — Kịp thời (Timeliness) và Ràng buộc chi phí (Cost constraint). Chi tiết nhiễu: Summit còn mua bao bì 0,9 triệu CU từ một nhà cung cấp không liên quan theo giá thị trường, thuyết minh rất chi tiết về hợp đồng cung ứng dài hạn như “minh bạch chuỗi cung”; ban quản trị đặt hai thuyết minh cạnh nhau. Email chủ tịch ngày 5 tháng 12 gửi công ty gia đình: “Giữ 12 triệu. Đó là cổ tức dưới hình thức thuê.”",
		"model": "Đặc tính quyết định: Faithful representation kết hợp completeness và materiality theo nature. Gọi arm’s length khi bằng chứng cho thấy gấp 10 lần là mô tả sai. Phần CU10,8m có bản chất phân phối cho bên liên quan. Nature (related party) làm thông tin material dù có thể nhỏ so với tổng chi phí. Understandability, comparability với peer một câu, cost/timeliness của thẩm định thêm là nhiễu. Hợp đồng bao bì không liên quan không cân bằng mô tả sai."
	},
	{
		"id": 17,
		"title": "Một khoản giảm giá bị đảo để vượt ngưỡng thưởng",
		"company": "Polar Outdoor",
		"difficulty": "Khó",
		"primary": "Trung lập và trọng yếu định tính",
		"primaryKey": "neutrality",
		"cf": "CF.2.15 / CF.2.11",
		"distractors": [
			"Có thể so sánh (Comparability)",
			"Kịp thời (Timeliness)",
			"Chỉ đầy đủ (Completeness)",
			"Dễ hiểu (Understandability)"
		],
		"keywords": [
			"bonus",
			"neutral",
			"đảo",
			"material",
			"NRV",
			"target",
			"trung lập",
			"thưởng"
		],
		"scenario": "Kế hoạch thưởng ban điều hành của Polar Outdoor chi trả nếu lợi nhuận hoạt động vượt 50 triệu CU. Ngày 20 tháng 12 năm 20X6, một rà soát giá trị thuần có thể thực hiện (net realisable value) cuối năm đối với tồn kho theo mùa, được chống lưng bởi dữ liệu đơn hàng sau đó và các kế hoạch hạ giá, cho thấy một khoản giảm 3,2 triệu CU và lợi nhuận còn lại 48,1 triệu CU. Ngày 28 tháng 12 ban quản trị đánh giá lại nhu cầu mùa thời trang và đảo 2,0 triệu CU của khoản giảm đó, nâng lợi nhuận lên 50,1 triệu CU. Email nội bộ lưu hành cùng ngày viết: “Ta chỉ cần thêm 1,9 triệu CU. Hàng luôn có thể được hạ giá vào tháng 1.” Doanh số cùng lô hàng trong tháng 1 năm 20X7 thực hiện các khoản khớp với đánh giá ban đầu ngày 20 tháng 12. Không có đề cập nào về việc đảo, kế hoạch thưởng hay bằng chứng tháng 1 xuất hiện trong báo cáo tài chính. Trưởng phòng kế toán đề xuất ít nhất một thuyết minh về thay đổi ước tính — Đầy đủ (Completeness) — nhưng giám đốc tài chính từ chối vì “user sẽ rối” (Dễ hiểu). Ủy ban lương muốn giữ số 50,1 để “sánh bonus với peer cùng ngành vừa công bố” — Có thể so sánh (Comparability). Phát hành bị hẹn 28 tháng 2; viết thêm note NRV được cho là sẽ lùi sang tháng 3 — Kịp thời (Timeliness). Chi tiết nhiễu: Polar đảo đúng một khoản giảm giá vải vụn 0,1 triệu CU ngày 15 tháng 12 vì một đơn hàng bất ngờ có bằng chứng hợp đồng; ban quản trị gọi đó là “cùng chính sách NRV” với lần đảo 2,0 triệu CU.",
		"model": "Đặc tính quyết định: Neutrality; materiality theo ngữ cảnh bonus. NRV ban đầu có bằng chứng; đảo ngược không có bằng chứng mới, chỉ có target thưởng. CU2m làm thay đổi kết quả thưởng nên qualitative material. Quy trình ước tính bị áp dụng sai nên cũng không free from error. Completeness của note, understandability, comparability bonus với peer, timeliness là nhiễu. Đảo vải vụn 0,1 triệu CU có bằng chứng — khác bản chất."
	},
	{
		"id": 18,
		"title": "Hai tàu giống hệt, hai cách xử lý ngược nhau",
		"company": "BlueKeel Shipping",
		"difficulty": "Khó",
		"primary": "Có thể so sánh cộng bản chất hơn hình thức",
		"primaryKey": "comparability",
		"cf": "CF.2.12 / CF.2.27",
		"distractors": [
			"Kịp thời (Timeliness)",
			"Trọng yếu (Materiality)",
			"Ràng buộc chi phí (Cost constraint)",
			"Chỉ dễ hiểu (Understandability)"
		],
		"keywords": [
			"like things",
			"substance",
			"lease",
			"comparab",
			"nhãn",
			"so sánh",
			"bản chất"
		],
		"scenario": "BlueKeel Shipping nhận bàn giao hai tàu container giống hệt trong cùng tuần, từ cùng bên cho thuê, trên các hợp đồng có cùng thời hạn, cùng bảo đảm giá trị còn lại (residual-value guarantee) và cùng nhịp thanh toán. Hợp đồng tàu A mang tiêu đề “Lease” (Thuê) và được ghi nhận trên Bảng cân đối kế toán. Hợp đồng tàu B mang tiêu đề “Capacity purchase agreement” (Thỏa thuận mua công suất), không bao giờ dùng chữ lease, và không chuyển quyền sở hữu pháp lý; ban quản trị đã để tàu B ngoài Bảng cân đối kế toán và hạch toán các khoản thanh toán vào chi phí khi đến hạn. Hai thỏa thuận cho BlueKeel quyền chỉ đạo việc sử dụng từng tàu trong cùng thời gian và buộc BlueKeel chịu thực chất cùng rủi ro giá trị còn lại. Ban quản trị nói với kiểm toán rằng cả hai cách xử lý đều được các chứng từ cho phép và rằng người sử dụng có thể tự dựng lại khả năng so sánh từ bốn mươi trang thuyết minh. Giám đốc tài chính thêm rằng đưa tàu B lên bảng sẽ làm đòn bẩy tăng 9 điểm phần trăm, vượt covenant — và 9 điểm “chỉ là trình bày, không trọng yếu với dòng tiền.” Viết lại bốn mươi trang thành một chính sách thống nhất được cho là sẽ lùi phát hành (Timeliness) và tốn 0,5 triệu CU luật sư (Cost constraint). Dễ hiểu (Understandability) được viện để giữ nhãn pháp lý khác nhau “vì hợp đồng khác chữ.” Chi tiết nhiễu: BlueKeel còn thuê một sà lan nhỏ 0,8 triệu CU đúng chuẩn IFRS 16, ghi nhận trên bảng; ban quản trị chỉ vào đó như “chúng tôi ghi nhận lease khi hợp đồng gọi là lease.”",
		"model": "Đặc tính quyết định: Comparability gắn với Faithful representation của cùng một hiện tượng. Hai tàu đồng nhất = like things must look alike. Nhãn pháp lý không đổi substance. Thuyết minh bù một phần (CF.2.38) không thay nhận diện nhất quán. Enhancing không cứu unfaithful depiction của Ship B. Materiality “chỉ trình bày,” timeliness, cost, understandability của nhãn là nhiễu. Sà lan nhỏ ghi đúng vì substance là lease — đúng là đối trọng, không phải tiền lệ cho việc nhìn chữ trên bìa."
	},
	{
		"id": 19,
		"title": "Một chính sách luôn lấy số xấu nhất",
		"company": "Stonebridge Construction",
		"difficulty": "Rất khó",
		"primary": "Thận trọng không phải bất đối xứng hay bi quan tối đa",
		"primaryKey": "neutrality",
		"cf": "CF.2.16–2.17",
		"distractors": [
			"Thích hợp (Relevance)",
			"Đầy đủ (Completeness)",
			"Có thể so sánh (Comparability)",
			"Kịp thời (Timeliness)"
		],
		"keywords": [
			"prudence",
			"không bất đối xứng",
			"neutral",
			"virtually certain",
			"mút biên",
			"thận trọng"
		],
		"scenario": "Ủy ban kiểm toán của Stonebridge Construction đã ban hành một “chính sách thận trọng” bằng văn bản năm 20X6. Đối với mọi tài sản bất định, công ty phải ghi nhận số thấp nhất trong khoảng hợp lý có thể xảy ra; đối với mọi nợ bất định phải ghi nhận số cao nhất; tài sản tiềm tàng không bao giờ được ghi nhận, kể cả khi dòng vào được đánh giá là gần như chắc chắn (virtually certain). Áp dụng chính sách, một vụ kiện có kết quả có khả năng xảy ra nhiều nhất là 6 triệu CU và khoảng hợp lý có thể xảy ra từ 4 triệu CU đến 9 triệu CU đã được ghi 9 triệu CU. Một yêu cầu bồi thường theo hợp đồng mà luật sư mô tả là gần như chắc chắn thu được 5 triệu CU thì bị bỏ hoàn toàn. Công văn kèm theo của ủy ban nêu rằng chính sách hiện thực hóa khái niệm prudence của Framework và bảo vệ chủ nợ, và rằng bất đối xứng là một đức tính của thông tin tài chính hữu ích. Giám đốc tài chính biện hộ rằng số 9 triệu CU “thích hợp với chủ nợ” (Relevance), rằng thuyết minh cả khoảng 4–9 sẽ làm Đầy đủ (Completeness) phình, rằng hai nhà thầu cùng ngành cũng “luôn lấy mút xấu” nên Có thể so sánh (Comparability), và rằng tranh cãi từng khoản sẽ lùi ngày duyệt (Timeliness). Chi tiết nhiễu: Stonebridge ghi nhận đúng một khoản phải thu xây dựng 14 triệu CU không bất định, có nghiệm thu; ủy ban nói “thấy chưa, chúng tôi không bi quan với mọi tài sản.” Email chủ tịch ủy ban: “Asymmetry protects lenders. That is what prudence means.”",
		"model": "Đặc tính quyết định: hiểu đúng Prudence trong Neutrality — CF.2.16–2.17. Prudence không hàm ý bất đối xứng. Chọn systematically mút biên = bias. Bỏ qua inflow virtually certain là understatement of assets. Mục tiêu BCTC đa mục đích không phải bảo vệ chủ nợ bằng số lệch. Ghi lawsuit khoảng CU6m; ghi nhận compensation CU5m nếu virtually certain. Relevance “cho chủ nợ,” completeness của khoảng, comparability với peer bi quan, timeliness là nhiễu. Khoản phải thu 14 triệu CU không bất định không chứng minh chính sách là trung lập."
	},
	{
		"id": 20,
		"title": "Một gian lận nhỏ về số lượng với một câu chuyện lớn",
		"company": "Meadow Dairy",
		"difficulty": "Khó",
		"primary": "Trọng yếu theo bản chất, không theo quy mô",
		"primaryKey": "materiality",
		"cf": "CF.2.11",
		"distractors": [
			"Ràng buộc chi phí (Cost constraint)",
			"Kịp thời (Timeliness)",
			"Có thể so sánh (Comparability)",
			"Dễ hiểu (Understandability)"
		],
		"keywords": [
			"nature",
			"material",
			"fraud",
			"omitting",
			"obscur",
			"regulator",
			"trọng yếu",
			"gian lận"
		],
		"scenario": "Kiểm toán nội bộ tại Meadow Dairy phát hiện một quản lý vùng đã chiếm đoạt 180.000 CU tiền công ty trong hai năm. Số tiền bằng 0,04% doanh thu tập đoàn và 0,7% lợi nhuận và đã được hoàn trả đầy đủ. Thủ đoạn được thực hiện bằng cách giả mạo giấy chứng nhận chất lượng sữa cung cấp theo một hợp đồng dinh dưỡng trường công. Một cơ quan an toàn thực phẩm đã mở hồ sơ; luật sư chưa ước tính được tiền phạt. Ban quản trị đã lược bỏ mọi đề cập đến vụ việc khỏi báo cáo tài chính năm 20X6 và khỏi báo cáo quản trị, lập luận rằng số lượng không trọng yếu về mặt định lượng, đã được sửa, và rằng một khoản phạt là không chắc xảy ra và sẽ nhỏ. Không có dự phòng, không có thuyết minh nợ tiềm tàng và không có mô tả cuộc điều tra của cơ quan quản lý. Giám đốc tài chính viết rằng viết note sẽ làm báo cáo “khó đọc với cổ đông lẻ” (Understandability); rằng hai công ty sữa ngang hàng cũng không thuyết minh các vụ thất thoát dưới 0,1% doanh thu (Comparability); rằng chờ luật sư ra số phạt sẽ lùi phát hành sang tháng 4 (Timeliness); và rằng điều tra nội bộ mở rộng tốn 0,3 triệu CU — Ràng buộc chi phí (Cost constraint) “không tương xứng với 180.000 CU.” Chi tiết nhiễu: Meadow có một khoản hao hụt sữa tự nhiên 220.000 CU do vỡ chuỗi lạnh, đã ghi vào giá vốn; ban quản trị gộp 180.000 CU gian lận vào cùng dòng “hao hụt vận hành” trên thuyết minh tồn kho.",
		"model": "Đặc tính quyết định: Materiality — nature or magnitude or both — CF.2.11. Gian lận, hàng giả cho trường học, điều tra cơ quan quản lý: bản chất có thể ảnh hưởng quyết định dù số nhỏ. Omitting và obscuring nằm trong định nghĩa. Hoàn trả không xóa hiện tượng đã xảy ra. Không áp dụng ngưỡng 5% máy móc. Understandability, comparability với peer im lặng, timeliness, cost constraint là nhiễu. Hao hụt chuỗi lạnh 220.000 CU khác bản chất — gộp vào cùng dòng là obscuring."
	},
	{
		"id": 21,
		"title": "Một mô hình DCF không ai khác chạy lại được",
		"company": "Atlas Renewables",
		"difficulty": "Trung bình–Khó",
		"primary": "Có thể kiểm chứng của mô hình không tài liệu",
		"primaryKey": "verifiability",
		"cf": "CF.2.30–2.32",
		"distractors": [
			"Kịp thời (Timeliness)",
			"Chỉ thích hợp (Relevance)",
			"Thận trọng (Prudence)",
			"Có thể so sánh (Comparability)"
		],
		"keywords": [
			"verif",
			"macro",
			"giả định",
			"indirect",
			"replicate",
			"kiểm chứng"
		],
		"scenario": "Atlas Renewables đo lường một hợp đồng mua điện dài hạn theo giá trị hợp lý bằng một mô hình chiết khấu dòng tiền. Mô hình nằm trên laptop của một chuyên viên duy nhất, chứa các macro không được tài liệu hóa, và gồm một “điều chỉnh kinh nghiệm” (experience adjustment) không được tài liệu hóa cộng 12% vào sản lượng phát dự báo. Thuyết minh công bố giá trị hợp lý ra được và lãi suất chiết khấu, không gì khác. Khi người soát xét chất lượng hợp đồng yêu cầu hai thành viên khác của phòng tài chính tái lập số cuối năm từ cùng các đầu vào hợp đồng, cả hai đều thất bại. Phản hồi của ban quản trị là verifiability không cần vì giá trị hợp lý là một ước tính và ước tính không bao giờ chính xác, và rằng công bố các macro sẽ tiết lộ các giả định nhạy cảm thương mại. Giám đốc tài chính viết thêm rằng  số FV “thích hợp nhất” cho user định giá PPA (Relevance); rằng giữ số cao hơn một chút là Prudence “đừng understate tài sản hợp đồng”; rằng hai công ty năng lượng ngang hàng cũng không công bố macro (Comparability); và rằng tài liệu hóa mô hình sẽ lùi phát hành ba tuần (Timeliness). Chi tiết nhiễu: Atlas đo một trang trại điện gió khác theo giá giao dịch gần nhất trên thị trường thứ cấp, thuyết minh đầy đủ Level 2; ban quản trị chỉ vào đó như “chính sách FV có thể kiểm chứng.” Email chuyên viên ngày 14 tháng 12: “Đừng đưa file cho EQCR. Plus 12% là để covenant DSCR đứng.”",
		"model": "Đặc tính quyết định: Verifiability — CF.2.30–2.32. Ước tính vẫn cần verifiable. Indirect verification = kiểm tra input + tính lại. Macro không tài liệu + experience adjustments không mô tả → thất bại. Với thông tin hướng tương lai phải công bố giả định và phương pháp (CF.2.32). Relevance của FV, prudence “đừng understate,” comparability với peer im lặng, timeliness là nhiễu. Trang trại Level 2 không cứu PPA không tái lập được. Cộng 12% vì covenant là bias, không phải estimate trung lập."
	},
	{
		"id": 22,
		"title": "Sao chép đối thủ để được so sánh",
		"company": "Nimbus Software",
		"difficulty": "Rất khó",
		"primary": "Có thể so sánh không phải đồng nhất hay copy mô tả sai",
		"primaryKey": "comparability",
		"cf": "CF.2.27–2.28",
		"distractors": [
			"Kịp thời (Timeliness)",
			"Trọng yếu (Materiality)",
			"Dễ hiểu (Understandability)",
			"Ràng buộc chi phí (Cost constraint)"
		],
		"keywords": [
			"uniformity",
			"principal",
			"substance",
			"không copy",
			"like things",
			"so sánh"
		],
		"scenario": "Nimbus Software bán các thuê bao một nền tảng mà công ty tự phát triển, lưu trữ và kiểm soát. Công ty tự định giá, là bên ký hợp đồng với khách hàng và chịu trách nhiệm về tín dụng dịch vụ (service credits). Ba đối thủ niêm yết lớn hơn ghi nhận doanh thu trên cơ sở hoa hồng ròng (net commission) và do đó trình bày biên lợi nhuận % cao hơn trên một doanh thu nhỏ hơn. Giám đốc tài chính của Nimbus đã đề xuất chuyển Nimbus sang cùng cơ sở ròng để tăng khả năng so sánh với nhóm ngang hàng và để giúp nhà đầu tư định giá chúng ta theo cùng bội số. Phân tích pháp lý các hợp đồng của chính Nimbus vẫn kết luận rằng Nimbus là bên chính (principal). Không ai cho rằng bản chất kinh tế cơ bản đã thay đổi. Tờ trình nói ghi gross “làm user rối vì biên % thấp hơn peer” (Understandability); rằng chênh lệch gross/net 220 triệu CU “chỉ là trình bày, dưới 1% vốn hóa” nên Trọng yếu (Materiality) không đặt ra; rằng viết lại hệ thống billing tốn 1,4 triệu CU và ba tháng (Cost constraint, Timeliness). Chi tiết nhiễu: Nimbus có một mảng nhỏ marketplace chiếm 6% doanh thu, nơi công ty thật sự là agent; mảng đó đã ghi net đúng. Ban quản trị muốn “đồng bộ” toàn bộ sang net “cho một chính sách.” Email CFO ngày 9 tháng 11: “Peer multiple trên net revenue. Nếu ta ở gross, ta trông đắt. Chuyển.”",
		"model": "Đặc tính quyết định: Comparability ≠ uniformity — CF.2.27–2.28. Nimbus là principal; ghi net sẽ làm unlike things look alike nếu peers thật sự là agent, hoặc nhân rộng unfaithful nếu peers cũng là principal. Enhancing không được dùng để chọn mô tả không trung thực. Giữ gross + thuyết minh để user tự so sánh. Understandability, materiality “chỉ trình bày,” cost/timeliness là nhiễu. Mảng marketplace 6% (agent) đúng là net — không lan sang nền tảng tự host."
	},
	{
		"id": 23,
		"title": "Báo cáo tài chính hai trang của một tập đoàn niêm yết",
		"company": "Helix Telecom",
		"difficulty": "Trung bình–Khó",
		"primary": "Dễ hiểu bị lạm dụng để chống đầy đủ",
		"primaryKey": "understandability",
		"cf": "CF.2.34–2.35",
		"distractors": [
			"Chỉ kịp thời (Timeliness)",
			"Có thể kiểm chứng (Verifiability)",
			"Thận trọng (Prudence)",
			"Không sai sót (Free from error)"
		],
		"keywords": [
			"concise",
			"obscur",
			"complete",
			"notes",
			"understand",
			"dễ hiểu"
		],
		"scenario": "Helix Telecom niêm yết và hoạt động tại mười chín quốc gia. Năm 20X6 công ty đã công bố “báo cáo tài chính súc tích” (concise financial statements) gồm hai trang: một báo cáo lãi lỗ gộp rất mạnh và một Bảng cân đối kế toán bảy dòng. Hầu hết các thuyết minh IFRS bắt buộc đã được chuyển vào một phòng dữ liệu có mật khẩu, được mô tả là sẵn cho các nhà đầu tư nghiêm túc khi yêu cầu. Thông tin bộ phận, phân tích đáo hạn, chi tiết bên liên quan và các bất định đo lường vì vậy vắng mặt trong hồ sơ nộp cơ quan quản lý. Ban quản trị viện dẫn Khung khái niệm: phân loại và trình bày thông tin rõ ràng, súc tích làm nó dễ hiểu; người sử dụng chết đuối trong thuyết minh. Tập đoàn không phải một đơn vị nhỏ và không được miễn trình bày IFRS đầy đủ. Giám đốc tài chính thêm rằng hai trang phát hành được sớm hơn ba tuần (Timeliness); rằng số trên mặt đã được kiểm toán nên Không sai sót (Free from error) và Có thể kiểm chứng (Verifiability) ổn; rằng lược note là Prudence “đừng làm user tự tin thái quá vào chi tiết chưa chắc.” Chi tiết nhiễu: Helix công bố một báo cáo bền vững 90 trang cùng ngày, đầy biểu đồ; ban quản trị nói “ai cần chi tiết thì đọc ESG.” Email chủ tịch ngày 20 tháng 1: “Data room chỉ mở cho long-only. Đừng để short-seller đọc duration gap.”",
		"model": "Đặc tính quyết định: Understandability không cho phép cắt thông tin cần thiết — CF.2.34–2.35. Concise là cách trình bày, không phải xóa hiện tượng. Data room làm obscuring (CF.2.11). Cost constraint do IASB cân khi viết chuẩn mực, listed group không tự miễn notes. Aggregation quá mức làm unlike items look alike. Timeliness, free from error của số mặt, verifiability, prudence “đừng tự tin thái quá” là nhiễu. Báo cáo ESG 90 trang không thay note IFRS. Email hạn chế short-seller là thao túng, không phải understandability."
	},
	{
		"id": 24,
		"title": "Một nhà máy bị phá hủy sau ngày báo cáo",
		"company": "Ironclad Manufacturing",
		"difficulty": "Khó",
		"primary": "Thích hợp của sự kiện sau ngày khóa sổ không điều chỉnh",
		"primaryKey": "relevance",
		"cf": "CF.2.6–2.8",
		"distractors": [
			"Có thể so sánh như đặc tính nền tảng",
			"Không sai sót (Free from error)",
			"Trung lập (Neutrality)",
			"Ràng buộc chi phí (Cost constraint)"
		],
		"keywords": [
			"subsequent",
			"non-adjusting",
			"thuyết minh",
			"IAS 10",
			"predictive",
			"cháy",
			"thích hợp"
		],
		"scenario": "Ngày báo cáo của Ironclad Manufacturing là 31 tháng 12 năm 20X6 và báo cáo tài chính được phê duyệt ngày 28 tháng 2 năm 20X7. Ngày 5 tháng 1 năm 20X7 một vụ cháy đã phá hủy nhà máy duy nhất của công ty. Giá trị ghi sổ của nhà máy tại ngày 31 tháng 12 là 70 triệu CU, bằng 31% tổng tài sản. Phạm vi bảo hiểm đang bị tranh chấp và khả năng thu hồi không chắc chắn. Sản xuất đã dừng và công suất thay thế không thuê được trước quý 3 năm 20X7. Ban quản trị không điều chỉnh các số năm 20X6 cũng không thuyết minh vụ cháy. Tờ trình hội đồng nêu rằng vụ cháy xảy ra sau ngày báo cáo, đây là sự kiện năm 20X7, và ghi nhận hay thậm chí nhấn mạnh nó trong báo cáo năm 20X6 sẽ trộn các kỳ và phá hủy khả năng so sánh. Giám đốc tài chính gọi Có thể so sánh (Comparability) là đặc tính nền tảng bị đe dọa; rằng số 31/12 “không sai” nên Không sai sót (Free from error); rằng thuyết minh cháy sẽ “dọa user bán tháo” nên im lặng mới Trung lập (Neutrality); và rằng định giá tổn thất bảo hiểm tốn 0,7 triệu CU — Ràng buộc chi phí (Cost constraint). Chi tiết nhiễu: ngày 12 tháng 12 năm 20X6 một kho phụ bị dột, thiệt hại 0,2 triệu CU, đã ghi nhận đúng trong 20X6; ban quản trị nói “mọi tổn thất tài sản đều thuộc kỳ xảy ra — cháy tháng 1 cũng vậy, không note.” Email CEO ngày 8 tháng 1: “Đừng ghi note. Guidance 20X7 chưa sửa. Để Q1 hấp thụ.”",
		"model": "Đặc tính quyết định: Relevance (predictive value). Non-adjusting subsequent event (IAS 10): không sửa số 20X6 nhưng phải thuyết minh nếu material. Im lặng đến 28/2 là obscuring. Comparability không bị phá bởi một note; ngược lại note ngăn user suy ra sai rằng năng lực sản xuất còn nguyên. Free from error của số 31/12, “neutrality” kiểu đừng dọa user, cost constraint là nhiễu. Kho phụ dột 0,2 triệu CU là adjusting event trong kỳ — khác cháy sau khóa sổ."
	},
	{
		"id": 25,
		"title": "Quá tốn kém để đếm 40% tài sản",
		"company": "Granite Materials",
		"difficulty": "Khó",
		"primary": "Ràng buộc chi phí bị từng đơn vị áp dụng sai",
		"primaryKey": "cost constraint",
		"cf": "CF.2.39–2.43",
		"distractors": [
			"Kịp thời (Timeliness)",
			"Dễ hiểu (Understandability)",
			"Thận trọng (Prudence)",
			"Có thể so sánh (Comparability)"
		],
		"keywords": [
			"cost constraint",
			"IASB",
			"không miễn trừ",
			"kiểm kê",
			"11%",
			"chi phí"
		],
		"scenario": "Granite Materials giữ các đống đá nghiền tại bốn mươi điểm. Hàng tồn kho đại diện 40% tổng tài sản. Năm 20X6 ban quản trị đã hủy kiểm kê cuối năm tại ba mươi mốt điểm và cuốn số lượng về trước từ lần đếm năm 20X4, chỉ điều chỉnh theo sản lượng và xuất kho đã ghi nhận. Tờ trình hội đồng viện dẫn ràng buộc chi phí của Khung khái niệm: đếm hết mọi đống sẽ tốn 1,2 triệu CU khảo sát; người sử dụng sẽ không trả thêm cho cổ phiếu của chúng ta chỉ vì chúng ta đếm đá. Một mẫu đếm hoàn tất tại chín điểm còn lại cho thấy số lượng thấp hơn sổ cuốn 11%. Không điều chỉnh nào được thực hiện cho các điểm chưa đếm và không mô tả hạn chế nào xuất hiện trong thuyết minh. Giám đốc tài chính thêm rằng đếm hết sẽ lùi phát hành sang tháng 4 (Timeliness); rằng thuyết minh phương pháp cuốn “làm user rối” (Understandability); rằng giữ sổ cuốn cao hơn là ngược với Prudence nên “chúng tôi đã thận trọng bằng cách không đếm”; và rằng hai mỏ ngang hàng cũng cuốn số hai năm một lần (Comparability). Chi tiết nhiễu: Granite đếm đúng 100% phụ tùng nhà xưởng trị giá 1,4 triệu CU (2% tài sản) và thuyết minh rất chi tiết; ban quản trị nói “chính sách kiểm kê của chúng tôi nghiêm.” Email COO ngày 1 tháng 12: “11% lệch ở mẫu. Đừng ngoại suy. Covenant tồn kho/tài sản sẽ vỡ.”",
		"model": "Đặc tính quyết định: Cost constraint bị áp dụng sai — CF.2.39–2.43. Board cân cost/benefit khi xây chuẩn mực, không phải từng entity tự loại yêu cầu. Mẫu đã sai 11% → số không còn faithful / free from error. Phải kiểm kê hoặc phương pháp thay thế đáng tin, và thuyết minh limitation. Timeliness, understandability, “prudence bằng cách không đếm,” comparability với peer cuốn số là nhiễu. Phụ tùng 2% đếm đúng không cứu 40% đá. Email covenant là động cơ."
	},
	{
		"id": 26,
		"title": "Một giá bên liên quan đã cũ so với một DCF rất rộng",
		"company": "Quartz Biologics",
		"difficulty": "Rất khó",
		"primary": "Đánh đổi CF.2.22 giữa thích hợp và trình bày trung thực",
		"primaryKey": "trade-off",
		"cf": "CF.2.21–2.22",
		"distractors": [
			"Có thể so sánh (Comparability)",
			"Kịp thời (Timeliness)",
			"Thận trọng (Prudence)",
			"Chỉ trọng yếu (Materiality)"
		],
		"keywords": [
			"trade-off",
			"2.22",
			"range",
			"uncertainty",
			"relevant",
			"faithful",
			"đánh đổi"
		],
		"scenario": "Quartz Biologics nắm 12% một công ty liệu pháp gene chưa niêm yết. Tại ngày 31 tháng 12 năm 20X6 tồn tại hai ứng viên đo lường. Thứ nhất là giá trong giao dịch gần nhất, mười tám tháng trước, 22 triệu CU; giao dịch đó diễn ra giữa các nhà sáng lập liên quan và không có giao dịch ngang giá nào sau đó. Thứ hai là một định giá chiết khấu dòng tiền hiện tại do Quartz lập, cho ra khoảng 19 triệu CU đến 140 triệu CU tùy kịch bản phê duyệt của FDA; điểm ban quản trị ưa thích trong khoảng đó là 95 triệu CU. Giám đốc tài chính lập luận rằng Framework đòi hỏi thông tin thích hợp nhất và giá mười tám tháng đã cũ, nên 95 triệu CU phải được ghi sổ. Đối tác kiểm toán lập luận rằng 95 triệu CU không thể là một trình bày đủ trung thực và rằng Quartz nên giữ 22 triệu CU hoặc không đo lại. Ủy ban kiểm toán chia ba: một người muốn 19 triệu CU vì Prudence; một người muốn 22 triệu CU để Có thể so sánh (Comparability) với lần công bố trước; một người nói chênh 73 triệu CU “chỉ là FV, dưới 3% tổng tài sản” nên Trọng yếu (Materiality) không bắt buộc đổi. Chạy thêm kịch bản FDA được cho là sẽ lùi duyệt (Timeliness). Chi tiết nhiễu: Quartz còn một cổ phiếu niêm yết 4 triệu CU đo theo giá đóng cửa 31/12; CFO nói “cùng chính sách FV — luôn lấy số mới nhất, không phải số cũ.” Email CEO ngày 20 tháng 12: “Covenant equity 80 triệu CU. 22 triệu là chết. 95 triệu sống. Chọn 95.”",
		"model": "Đặc tính quyết định: trade-off Relevance vs Faithful representation — CF.2.21–2.22. Most relevant có lẽ là ước tính hiện tại, không phải giá 18 tháng bên liên quan. Nhưng CU95m trong range CU19–140m, chọn điểm vì management/covenant, uncertainty cực cao. Useful nhất thường là ước tính kèm mô tả uncertainty / công bố range, không phải một điểm im lặng cũng không neo mãi CU22m như current value. Prudence mút dưới, comparability với số cũ, materiality 3%, timeliness là nhiễu. Cổ phiếu niêm yết Level 1 không phải cùng hiện tượng."
	},
	{
		"id": 27,
		"title": "EBITDA điều chỉnh trên mặt báo cáo, lãi IFRS trong thuyết minh",
		"company": "Pulse Fitness",
		"difficulty": "Khó",
		"primary": "Trung lập trong trình bày kết quả hoạt động",
		"primaryKey": "neutrality",
		"cf": "CF.2.15",
		"distractors": [
			"Kịp thời (Timeliness)",
			"Có thể kiểm chứng (Verifiability)",
			"Ràng buộc chi phí (Cost constraint)",
			"Thận trọng (Prudence)"
		],
		"keywords": [
			"EBITDA",
			"emphasise",
			"neutral",
			"IFRS 18",
			"de-emphas",
			"trung lập"
		],
		"scenario": "Pulse Fitness trình bày “Lợi nhuận hoạt động quản trị (EBITDA điều chỉnh)” in đậm như dòng cuối của báo cáo lãi lỗ. Lợi nhuận IFRS trong năm là 12 triệu CU. EBITDA điều chỉnh là 41 triệu CU sau khi cộng lại các khoản thanh toán trên cơ sở cổ phiếu, một chương trình tái cấu trúc, một khoản được mô tả là “thuê chuẩn hóa” (normalised rent) và “khấu hao phi tiền mặt.” Một đối chiếu xuất hiện ở Thuyết minh 28. Mọi biểu đồ ở nửa đầu báo cáo thường niên, và trang đầu thông cáo kết quả, chỉ dùng EBITDA điều chỉnh. Lý do của ban quản trị là người sử dụng thấy EBITDA thích hợp hơn lợi nhuận IFRS và relevance đứng trước. Không có trình bày lợi nhuận IFRS nổi bật tương đương trên mặt các báo cáo chính. Giám đốc tài chính gọi việc cộng khấu hao là Prudence “loại nhiễu phi tiền mặt”; rằng 41 triệu CU tái lập được từ note 28 nên Có thể kiểm chứng (Verifiability); rằng in hai chỉ tiêu nổi bật sẽ làm booklet dày thêm và lùi in ấn (Cost constraint, Timeliness). Chi tiết nhiễu: Pulse công bố đúng EPS IFRS trên mặt báo cáo, cỡ chữ nhỏ hơn một bậc so với adjusted EBITDA; ban quản trị nói “IFRS không bị giấu.” Email IR ngày 6 tháng 2: “Keep IFRS profit in the note. Buy-side models start from 41.”",
		"model": "Đặc tính quyết định: Neutrality trong lựa chọn và trình bày — CF.2.15. Không nhấn/làm mờ để hướng phản ứng của user. Đưa adjusted EBITDA thành dòng cuối đậm, chôn IFRS profit là de-emphasising. Relevance không đứng trên FR (CF.2.20). MPM hữu ích nếu minh bạch, không át via, reconcile rõ. Verifiability của note 28, prudence “phi tiền mặt,” cost/timeliness in ấn là nhiễu. EPS IFRS cỡ nhỏ không phải equally prominent."
	},
	{
		"id": 28,
		"title": "Một dòng cho mọi nghĩa vụ có thể nhấn chìm công ty",
		"company": "HarborChem",
		"difficulty": "Khó",
		"primary": "Đầy đủ khi gộp các khoản dự phòng",
		"primaryKey": "completeness",
		"cf": "CF.2.14 / CF.2.11",
		"distractors": [
			"Kịp thời (Timeliness)",
			"Chỉ có thể so sánh (Comparability)",
			"Chỉ không sai sót (Free from error)",
			"Ràng buộc chi phí (Cost constraint)"
		],
		"keywords": [
			"aggregat",
			"complete",
			"obscur",
			"range",
			"investigation",
			"unlike",
			"đầy đủ"
		],
		"scenario": "HarborChem trình bày một dòng duy nhất “Dự phòng 88 triệu CU.” Sổ cái bên dưới gồm phục hồi môi trường 18 triệu CU, bảo hành 7 triệu CU, hợp đồng onerous 9 triệu CU, tái cấu trúc 5 triệu CU, và một cuộc điều tra luật cạnh tranh mà luật sư nói có thể tạo ra khoản phạt từ không đến 400 triệu CU, trong đó ban quản trị đã ghi 12 triệu CU ở mút dưới khoảng của chính họ. Thêm 37 triệu CU được xếp “khác,” trong đó 30 triệu CU là một bảo lãnh không dán nhãn khi bán một công ty con. Không có tách khoản, không có khoảng, không độ nhạy và không mô tả cuộc điều tra hay bảo lãnh trong thuyết minh. Ban quản trị cho rằng tổng số đã trọng yếu nên đủ. Giám đốc tài chính viết rằng 88 triệu CU cộng đúng các dòng sổ cái nên Không sai sót (Free from error); rằng hai hóa chất ngang hàng cũng một dòng provisions (Comparability); rằng viết năm trang tách khoản sẽ lùi nộp (Timeliness) và tốn phí luật sư cạnh tranh (Cost constraint). Chi tiết nhiễu: HarborChem thuyết minh rất chi tiết một khoản phải trả thương mại 22 triệu CU theo tuổi nợ; ban quản trị nói “nợ thì chúng tôi luôn tách.” Email luật sư ngày 3 tháng 1: “Fine could be 400. Booking 12 is the number that keeps going concern off the table.”",
		"model": "Đặc tính quyết định: Completeness kết hợp materiality-as-obscuring. Điều tra CU0–400m ghi CU12m rồi trộn với bảo hành là unlike things look alike. Predictive value mất. Phải tách các hiện tượng khác bản chất và công bố range của investigation + indemnity. Ghi nhận tổng không thay completeness của mô tả. Free from error của phép cộng, comparability với peer một dòng, timeliness/cost là nhiễu. Tuổi nợ phải trả thương mại không bù cho việc gộp điều tra 0–400."
	},
	{
		"id": 29,
		"title": "Doanh thu bill-and-hold mà hàng không bao giờ rời kho",
		"company": "Vertex Equipment",
		"difficulty": "Khó",
		"primary": "Trình bày trung thực — chưa chuyển giao kiểm soát",
		"primaryKey": "faithful representation",
		"cf": "CF.2.12 / CF.2.20",
		"distractors": [
			"Kịp thời (Timeliness)",
			"Có thể so sánh (Comparability)",
			"Dễ hiểu (Understandability)",
			"Ràng buộc chi phí (Cost constraint)"
		],
		"keywords": [
			"control",
			"bill-and-hold",
			"không doanh thu",
			"substance",
			"return",
			"kiểm soát",
			"trung thực"
		],
		"scenario": "Ngày 29 tháng 12 năm 20X6 Vertex Equipment đã ghi nhận 35 triệu CU doanh thu theo một thỏa thuận bill-and-hold với một nhà phân phối. Hàng vẫn nằm trong kho của Vertex. Nhà phân phối có quyền đơn phương trả bất kỳ món nào chưa bán đến ngày 30 tháng 6 năm 20X7, chưa thanh toán, và chưa ký một thỏa thuận lưu kho riêng. Vertex vẫn bảo hiểm hàng và kiểm soát lối vào khoang chứa. Nếu không có giao dịch này Vertex sẽ trượt guidance lợi nhuận đã công bố 6%. Lập trường của ban quản trị là một hóa đơn pháp lý đã được phát hành nên việc bán tồn tại; người sử dụng muốn thấy sổ đặt hàng biến thành doanh thu năm nay; thông tin đó có giá trị xác nhận (confirmatory value) đối với guidance của chúng ta. Giám đốc tài chính thêm rằng hai nhà sản xuất máy ngang hàng cũng ghi bill-and-hold cuối năm (Comparability); rằng tách “đơn hàng chưa giao” ra thuyết minh sẽ làm user rối (Understandability); rằng chờ hàng xuất kho thật sẽ lùi ghi nhận sang tháng 1 và “làm mất tính kịp thời của confirmatory value” (Timeliness); và rằng dựng hợp đồng lưu kho riêng tốn phí pháp lý (Cost constraint). Chi tiết nhiễu: Vertex có một lô 2 triệu CU đã giao, đã thu tiền, kiểm soát đã chuyển ngày 27 tháng 12 — ghi nhận đúng; ban quản trị gọi đó là “cùng chính sách cut-off.” Email nhà phân phối ngày 28 tháng 12: “Invoice us if you need the number. We have no space and no obligation to take the goods.”",
		"model": "Đặc tính quyết định: Faithful representation of control/substance, không phải legal invoice. Hàng chưa chuyển giao kiểm soát: còn kho người bán, quyền trả hàng, chưa trả tiền. Hiện tượng là inventory + executory arrangement. Confirmatory value nhân tạo không cứu mô tả không faithful. Thông tin backlog ở thuyết minh, không trên dòng revenue. Comparability với peer bill-and-hold, understandability, timeliness của guidance, cost của hợp đồng kho là nhiễu. Lô 2 triệu CU giao thật ngày 27/12 khác bản chất."
	},
	{
		"id": 30,
		"title": "Ba khoản mục chưa xử lý trước ngày phát hành",
		"company": "MultiSignal Holdings",
		"difficulty": "Rất khó",
		"primary": "Thứ tự ưu tiên: nền tảng rồi nâng cao, rồi chi phí",
		"primaryKey": "hierarchy",
		"cf": "CF.2.21 / CF.2.37",
		"distractors": [
			"Luôn là trọng yếu",
			"Luôn là thận trọng",
			"Luôn là có thể so sánh",
			"Ràng buộc chi phí luôn thắng"
		],
		"keywords": [
			"hierarchy",
			"quyết định",
			"fundamental",
			"enhancing",
			"(i)",
			"(iv)",
			"neutrality",
			"thứ tự"
		],
		"scenario": "MultiSignal Holdings đang khóa sổ báo cáo năm 20X6. Bốn khoản chưa xử lý đến cùng một buổi chiều. Thứ nhất, một lỗi triển khai phần mềm đã đếm trùng tiền mặt 4 triệu CU trong hai tuần tháng 12; lỗi được phát hiện khi kiểm toán và đã được đảo trước khi phê duyệt phát hành. Thứ hai, hội đồng đã hứa công khai với người sử dụng một phân tích độ nhạy liên quan khí hậu trong báo cáo năm 20X6; mô hình chưa xong và ban quản trị muốn phát hành đúng hạn tháng 2 mà không có phân tích đó. Thứ ba, một đối thủ niêm yết lớn hơn cắt doanh thu theo một mốc lạ; giám đốc thương mại muốn MultiSignal theo cùng mốc để nhà đầu tư so sánh chúng ta, dù hợp đồng của MultiSignal chuyển giao kiểm soát ở một thời điểm khác. Thứ tư, một tài sản sinh học Cấp 3 chỉ đứng được như một khoảng rộng; ban quản trị muốn ghi mút trên của khoảng để còn trong một covenant đòn bẩy. Tổ kỹ thuật đã viết mọi đặc tính định tính cạnh mọi khoản và không thống nhất đặc tính nào thật sự quyết định từng vấn đề. Tờ trình đề xuất một “quy tắc bỏ túi”: luôn chọn Trọng yếu nếu số trên 1% tài sản; luôn chọn Prudence nếu có covenant; luôn chọn Comparability nếu có peer; và nếu hết thời gian thì Ràng buộc chi phí thắng. Chi tiết nhiễu: cùng buổi chiều còn một khoản thứ năm — hóa đơn văn phòng phẩm 12.000 CU bị ghi nhầm kỳ, đã sửa trong 10 phút — được tổ kỹ thuật gắn đủ bảy đặc tính “cho nhất quán quy trình.” Email CFO: “Pick comparability for revenue, prudence for bio assets, cost for climate. Ship on 28 February.”",
		"model": "Đặc tính quyết định của cả case: xếp tầng QC. (i) Free from error — đã sửa trước ban hành, depiction cuối faithful. (ii) Relevance + completeness của thông tin đã hứa, không phải timeliness. (iii) Faithful representation thắng comparability with rival (CF.2.37). (iv) Neutrality (chọn mút trên vì covenant) là quyết định, không chỉ measurement uncertainty. Đừng liệt kê hết QC; chỉ ra QC quyết định từng mục. Quy tắc bỏ túi “luôn materiality / luôn prudence / luôn comparability / cost luôn thắng” là sai hierarchy. Hóa đơn 12.000 CU là nhiễu."
	}
];
var BASE_COUNT = ISSUES.length;
var emptyFields = () => ({
	phenomenon: "",
	relevance: "",
	faithful: "",
	enhancing: "",
	decisive: ""
});
function stripId(bag, id) {
	const next = { ...bag };
	delete next[id];
	return next;
}
var useProgress = create()(persist((set) => ({
	hydrated: false,
	setHydrated: (v) => set({ hydrated: v }),
	mcq: {},
	essay: {},
	examPicks: {},
	examDone: false,
	extras: [],
	setMcq: (id, pick, correct) => set((s) => ({ mcq: {
		...s.mcq,
		[id]: {
			pick,
			correct
		}
	} })),
	resetMcq: (id) => set((s) => ({ mcq: stripId(s.mcq, id) })),
	setEssayFields: (id, fields) => set((s) => ({ essay: {
		...s.essay,
		[id]: {
			fields,
			grade: s.essay[id]?.grade ?? null
		}
	} })),
	setEssayGrade: (id, grade) => set((s) => ({ essay: {
		...s.essay,
		[id]: {
			fields: s.essay[id]?.fields ?? emptyFields(),
			grade
		}
	} })),
	setExamPick: (id, pick) => set((s) => ({ examPicks: {
		...s.examPicks,
		[id]: pick
	} })),
	finishExam: () => set({ examDone: true }),
	resetExam: () => set({
		examPicks: {},
		examDone: false
	}),
	addExtra: (issue) => set((s) => ({ extras: s.extras.some((x) => x.id === issue.id) ? s.extras.map((x) => x.id === issue.id ? issue : x) : [...s.extras, issue] })),
	removeExtra: (id) => set((s) => ({
		extras: s.extras.filter((x) => x.id !== id),
		mcq: stripId(s.mcq, id),
		essay: stripId(s.essay, id)
	})),
	clearExtras: () => set((s) => {
		const extraIds = new Set(s.extras.map((x) => x.id));
		const mcq = { ...s.mcq };
		const essay = { ...s.essay };
		for (const id of extraIds) {
			delete mcq[id];
			delete essay[id];
		}
		return {
			extras: [],
			mcq,
			essay
		};
	}),
	resetAll: () => set({
		mcq: {},
		essay: {},
		examPicks: {},
		examDone: false
	})
}), {
	name: "khung-cf-progress",
	skipHydration: true,
	partialize: (s) => ({
		mcq: s.mcq,
		essay: s.essay,
		examPicks: s.examPicks,
		examDone: s.examDone,
		extras: s.extras
	}),
	merge: (persisted, current) => {
		const p = persisted ?? {};
		const extras = Array.isArray(p.extras) ? p.extras.map((x) => ({
			...x,
			generated: true
		})) : [];
		return {
			...current,
			...p,
			extras,
			mcq: p.mcq ?? {},
			essay: p.essay ?? {},
			examPicks: p.examPicks ?? {},
			examDone: Boolean(p.examDone)
		};
	}
}));
function useExtras() {
	return useProgress((s) => s.extras);
}
function useAllIssues() {
	const extras = useExtras();
	return (0, import_react.useMemo)(() => [...ISSUES, ...extras], [extras]);
}
function useIssue(id) {
	const extras = useExtras();
	return ISSUES.find((i) => i.id === id) ?? extras.find((i) => i.id === id);
}
function nextExtraId(extras) {
	return extras.reduce((m, i) => Math.max(m, i.id), BASE_COUNT) + 1;
}
function AppShell({ children }) {
	(0, import_react.useEffect)(() => {
		Promise.resolve(useProgress.persist.rehydrate()).then(() => {
			useProgress.getState().setHydrated(true);
		});
	}, []);
	const mcq = useProgress((s) => s.mcq);
	const issues = useAllIssues();
	const mcqDone = Object.keys(mcq).length;
	const extraN = Math.max(0, issues.length - BASE_COUNT);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-line bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-semibold text-navy",
							children: "Đức Anh"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs text-muted sm:inline",
							children: "CF 2018 · IFRS 18"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-wrap items-center gap-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/mcq/$id",
								params: { id: "1" },
								className: navClass,
								activeProps: { className: navActive },
								children: "Trắc nghiệm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/exam",
								className: navClass,
								activeProps: { className: navActive },
								children: "Thi 30 câu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bank",
								className: navClass,
								activeProps: { className: navActive },
								children: "Ngân hàng"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-5xl px-4 py-6 pb-24",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-4 py-4 text-center text-xs text-subtle",
				children: [
					mcqDone,
					"/",
					issues.length,
					" trắc nghiệm",
					extraN ? ` · ${extraN} đề tự tạo` : "",
					" · CF 2018 · IFRS 18"
				]
			})
		]
	});
}
var navClass = "rounded-sm px-3 py-2 text-muted transition-colors hover:bg-bg-elevated hover:text-ink";
var navActive = "bg-navy text-navy-fg hover:bg-navy hover:text-navy-fg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function seededShuffle(items, seed) {
	const a = items.slice();
	let s = (seed * 9301 + 49297) % 233280;
	for (let i = a.length - 1; i > 0; i--) {
		s = (s * 9301 + 49297) % 233280;
		const j = Math.floor(s / 233280 * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4", {
	variants: {
		variant: {
			default: "bg-navy text-navy-fg hover:opacity-90",
			outline: "border border-line bg-surface text-ink hover:bg-bg-elevated",
			ghost: "text-ink hover:bg-bg-elevated",
			danger: "bg-warn text-navy-fg hover:opacity-90"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
export { nextExtraId as a, useIssue as c, cn as i, useProgress as l, Button as n, seededShuffle as o, ISSUES as r, useAllIssues as s, AppShell as t };
