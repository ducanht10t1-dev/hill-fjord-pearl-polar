/* Qualitative Characteristics Lab — 30 hard cases
   Based on Conceptual Framework 2018, Chapter 2
   Format mirrors FTU lecture slides.
*/
window.QC_CASES = [
  {
    id: 1,
    title: "Sale or secured borrowing?",
    company: "BuildTech Co.",
    primary: "Faithful representation — substance over form",
    secondary: ["Completeness", "Relevance"],
    tags: ["fundamental", "faithful", "trap"],
    difficulty: "Hard",
    scenario: `BuildTech Co. transfers machinery with a carrying amount of CU8 million to FinanceCo for CU10 million on 28 December 20X6.
The legal agreement describes the transaction as a “sale.” However:
• BuildTech continues to use the machinery;
• BuildTech is responsible for maintenance and insurance;
• BuildTech must repurchase the machinery after two years for CU11.45 million;
• FinanceCo cannot use or sell the machinery to another party;
• the difference between CU10 million and CU11.45 million reflects a market financing return.
Management records:
• disposal proceeds of CU10 million;
• a gain of CU2 million; and
• no financial liability.`,
    questions: [
      "Hình thức pháp lý của giao dịch là gì?",
      "Bản chất kinh tế (economic substance) là gì?",
      "FinanceCo đã có quyền kiểm soát máy móc chưa?",
      "Ghi nhận bán tài sản có phải là faithful representation không?",
      "Việc ghi nhận này ảnh hưởng thế nào đến đánh giá của người sử dụng BCTC?",
      "Cách xử lý kế toán nào phản ánh đúng bản chất kinh tế hơn?"
    ],
    answer: `Đặc tính trọng tâm: Faithful representation (substance over form) — CF.2.12.
Pháp lý gọi là “sale”, nhưng quyền và nghĩa vụ cho thấy đây là khoản vay có tài sản đảm bảo: BuildTech vẫn kiểm soát máy, chịu rủi ro, và có nghĩa vụ mua lại với lãi suất thị trường. FinanceCo không có quyền sử dụng/bán.
Ghi nhận bán + lãi CU2m + không ghi nợ phải trả là mô tả sai hiện tượng kinh tế.
Xử lý đúng hơn: không ghi nhận doanh thu/lãi thanh lý; ghi tiền nhận được là khoản vay; máy móc vẫn nằm trên Bảng cân đối; chênh lệch CU1.45m phân bổ lãi vay.
Bẫy: sinh viên dễ nhảy sang Relevance hoặc Completeness. Relevance vẫn còn (thông tin về máy và nợ là hữu ích) — vấn đề chính là mô tả không trung thực.`,
    distractors: ["Relevance", "Materiality", "Neutrality", "Comparability"]
  },
  {
    id: 2,
    title: "Optimistic receivables, pessimistic provisions",
    company: "SpeedTrade Co.",
    primary: "Neutrality (prudence applied inconsistently)",
    secondary: ["Faithful representation", "Free from error"],
    tags: ["fundamental", "neutrality", "prudence", "trap"],
    difficulty: "Hard",
    scenario: `SpeedTrade Co. has:
• trade receivables of CU20 million from a financially distressed customer; and
• a legal claim for CU20 million made against the company.
Management uses the following assumptions:
• only a 2% loss allowance for the receivable because management is “optimistic about customer recovery”;
• a CU10 million provision for the lawsuit because management wants “to be conservative.”
External evidence suggests that:
• expected credit losses on the receivable are between CU4 million and CU6 million;
• the probable legal payment is between CU2 million and CU3 million.`,
    questions: [
      "Ban quản trị có đang áp dụng prudence một cách nhất quán không?",
      "Prudence có nghĩa là luôn chọn ước tính bi quan nhất không?",
      "Các ước tính có trung lập (neutral) không?",
      "Động cơ nào có thể giải thích các ước tính này?",
      "Ban quản trị nên xử lý sự không chắc chắn như thế nào?"
    ],
    answer: `Đặc tính trọng tâm: Neutrality, được hỗ trợ bởi prudence — CF.2.15–2.17.
Prudence = thận trọng khi xét đoán trong điều kiện không chắc chắn: không thổi phồng tài sản/thu nhập, không giảm nhẹ nợ/chi phí — và NGƯỢC LẠI cũng không được.
Không phải chọn số bi quan nhất. Không phải bất đối xứng có hệ thống.
Ở đây ban quản trị lạc quan với phải thu (dưới dự phòng) và bi quan với kiện tụng (over-provision) — hai chiều ngược nhau. Đây là thiên lệch, không phải prudence.
Ước tính trung lập nên nằm trong khoảng bằng chứng bên ngoài: ECL ~ CU5m; provision ~ CU2.5m, kèm thuyết minh về khoảng và giả định.
Bẫy: gọi đây là “free from error” hoặc “materiality”. Sai số ước tính có thể xảy ra, nhưng vấn đề cốt lõi là bias có chủ đích.`,
    distractors: ["Free from error", "Materiality", "Completeness", "Prudence as pessimism"]
  },
  {
    id: 3,
    title: "The loss of a major customer",
    company: "Delta Delivery Co.",
    primary: "Relevance (predictive value) — recognition ≠ relevance",
    secondary: ["Completeness", "Timeliness"],
    tags: ["fundamental", "relevance", "trap"],
    difficulty: "Hard",
    scenario: `Delta Delivery Co. earned revenue of CU100 million and profit of CU8 million in 20X6. On 20 December 20X6, its largest customer informed Delta that it would not renew its delivery contract after 31 January 20X7. The customer generated 28% of Delta’s annual revenue.
The 20X6 transaction amounts have been recorded correctly. Management argues:
“The contract was still active at year-end, and the loss of revenue will occur next year. Therefore, the information does not belong in the 20X6 financial statements.”`,
    questions: [
      "Việc mất khách hàng lớn có liên quan (relevant) với người sử dụng BCTC 20X6 không?",
      "Relevance có phụ thuộc duy nhất vào việc một khoản có được ghi nhận hay không?",
      "Thông tin này có predictive value, confirmatory value, hay cả hai?",
      "Việc bỏ sót có ảnh hưởng đánh giá dòng tiền tương lai của nhà đầu tư không?",
      "Thông tin nên được truyền đạt ở đâu?"
    ],
    answer: `Đặc tính trọng tâm: Relevance — CF.2.6–2.11. Recognition không phải điều kiện của relevance.
Mất 28% doanh thu là sự kiện đã xảy ra trước ngày kết thúc kỳ kế toán (thông báo 20/12). Hợp đồng còn hiệu lực đến 31/1 không làm thông tin trở nên irrelevant.
Predictive value rất mạnh (dòng tiền 20X7 trở đi). Confirmatory value: xác nhận rủi ro tập trung khách hàng.
Không nhất thiết điều chỉnh số liệu đã ghi nhận đúng của 20X6, nhưng PHẢI thuyết minh (notes, risks, going-concern / concentration). Im lặng = obscuring material information.
Bẫy: nghĩ “chưa ghi nhận thì không liên quan”. CF tách bạch relevance và recognition (Ch.5).`,
    distractors: ["Faithful representation", "Timeliness only", "Free from error", "Comparability"]
  },
  {
    id: 4,
    title: "The one-cent earnings target",
    company: "CareHealth Services",
    primary: "Materiality — qualitative / contextual, not a % test",
    secondary: ["Neutrality", "Faithful representation"],
    tags: ["fundamental", "materiality", "trap"],
    difficulty: "Hard",
    scenario: `CareHealth Services has 100 million ordinary shares. Before the final accounting adjustment, its profit is CU23.4 million, producing earnings per share of CU0.234.
Management reverses a CU600,000 legal-expense accrual, increasing profit to CU24 million and EPS to CU0.240. Analysts had forecast EPS of CU0.24. There is no new evidence supporting the reversal.
The CU600,000 adjustment represents:
• only 0.3% of revenue; and
• 0.2% of total assets.
Management concludes that the amount is immaterial because both percentages are below 1%.`,
    questions: [
      "Khoản đảo ngược có immaterial chỉ vì nhỏ so với doanh thu và tài sản không?",
      "Việc chạm target EPS của analyst có ảnh hưởng đánh giá materiality không? Động cơ ban quản trị có quan trọng không?",
      "Điều chỉnh này có ảnh hưởng đánh giá hiệu quả của nhà đầu tư không?",
      "Việc đảo ngược không có bằng chứng có làm hỏng faithful representation không?",
      "Thông tin nên được truyền đạt thế nào?"
    ],
    answer: `Đặc tính trọng tâm: Materiality như khía cạnh entity-specific của Relevance — CF.2.11.
Không có ngưỡng % thống nhất. Materiality xét nature HOẶC magnitude, trong bối cảnh báo cáo của đơn vị đó.
CU600,000 nhỏ so với doanh thu, nhưng:
• đưa EPS đúng bằng forecast;
• không có bằng chứng mới;
• có khả năng thay đổi quyết định (meet-or-beat).
Động cơ không tự biến số liệu thành material, nhưng là tín hiệu rằng ban quản trị cho rằng người dùng sẽ phản ứng — tức chính họ đang thừa nhận tính material về bản chất.
Đảo ngược không căn cứ còn vi phạm free from error / neutrality.
Bẫy: “dưới 1% = immaterial” là sai hoàn toàn theo CF.`,
    distractors: ["Neutrality only", "Free from error only", "Cost constraint", "Comparability"]
  },
  {
    id: 5,
    title: "An estimate that later proves wrong",
    company: "FreshMart Co.",
    primary: "Free from error — outcome ≠ error",
    secondary: ["Faithful representation", "Completeness"],
    tags: ["fundamental", "free-from-error", "trap"],
    difficulty: "Hard",
    scenario: `FreshMart Co. sells products with warranties. Based on historical experience and current product information, it estimates warranty costs at CU3 million. Two years later, actual warranty payments reach CU4.2 million because an unexpected component defect emerges.
A shareholder argues:
“The CU3 million estimate was incorrect. Therefore, the original financial statements were not faithfully represented.”`,
    questions: [
      "Chênh lệch giữa ước tính và kết quả cuối có chứng minh ước tính ban đầu chứa sai sót không?",
      "Bằng chứng nào có sẵn tại thời điểm ước tính?",
      "Phương pháp ước tính có phù hợp không?",
      "Cái gì mới cấu thành error trong ước tính ban đầu?",
      "Thông tin mới nên được xử lý thế nào?"
    ],
    answer: `Đặc tính trọng tâm: Free from error — CF.2.18–2.19. Faithful representation ≠ accurate in all respects.
Ước tính hợp lý là một phần thiết yếu của BCTC. “Free from error” nghĩa là:
• mô tả hiện tượng không sai/sót;
• quy trình ước tính được chọn và áp dụng không sai;
• nêu rõ đây là ước tính và giới hạn của quy trình.
Không có nghĩa số phải trùng với kết quả tương lai.
Nếu tại thời điểm đó lịch sử + thông tin sản phẩm hỗ trợ CU3m, và quy trình phù hợp, thì KHÔNG phải error. Defect bất ngờ là thông tin mới → thay đổi ước tính (IAS 8 estimate), không phải sửa sai kỳ trước.
Error chỉ xảy ra nếu: dùng dữ liệu sai, bỏ qua thông tin đã có, công thức sai, hoặc cố tình bias.
Bẫy: đồng nhất “sai số so với thực tế” với “không trung thực”.`,
    distractors: ["Relevance", "Neutrality", "Comparability", "Timeliness"]
  },
  {
    id: 6,
    title: "The “complete” estimate with incomplete disclosure",
    company: "NorthPeak Mining",
    primary: "Completeness",
    secondary: ["Faithful representation", "Understandability", "Verifiability"],
    tags: ["fundamental", "completeness", "trap"],
    difficulty: "Medium-Hard",
    scenario: `A mining company recognises a CU60 million decommissioning provision. The amount is based on:
• closure in 15 years;
• estimated future cash flows of CU110 million;
• a 4.1% discount rate;
• current environmental restoration requirements.
Management presents only the following line:
• Decommissioning provision: CU60 million.
No further explanation is provided.`,
    questions: [
      "Riêng số CU60 million đã là một mô tả đầy đủ chưa?",
      "Người sử dụng cần thông tin gì để hiểu ước tính?",
      "Có phải mọi chi tiết tính toán của kỹ sư đều phải công bố không?",
      "Giả định nào là quan trọng nhất?",
      "Sự không chắc chắn của ước tính ảnh hưởng đến completeness thế nào?"
    ],
    answer: `Đặc tính trọng tâm: Completeness — CF.2.13–2.14.
Mô tả đầy đủ gồm: bản chất hiện tượng, số liệu, ý nghĩa của số liệu (historical cost / present value…), và với một số khoản còn cần giải thích chất lượng, yếu tố ảnh hưởng, quy trình xác định số.
Chỉ một dòng CU60m không cho user hiểu: thời điểm, dòng tiền gộp, lãi suất chiết khấu, thay đổi quy định môi trường, độ nhạy.
Không cần dump toàn bộ spreadsheet kỹ sư. Cần các giả định then chốt và độ nhạy (discount rate, timing, scope).
Bẫy: nhầm sang verifiability hoặc understandability. Hai đặc tính này bị ảnh hưởng, nhưng thiếu thông tin cần thiết trước hết là không complete → không thể faithful.`,
    distractors: ["Verifiability", "Understandability only", "Materiality", "Cost constraint"]
  },
  {
    id: 7,
    title: "New CEO’s “clean-up” provision",
    company: "Apex Retail Group",
    primary: "Neutrality — big-bath earnings management",
    secondary: ["Prudence misused", "Materiality"],
    tags: ["fundamental", "neutrality", "trap"],
    difficulty: "Hard",
    scenario: `Apex Retail appointed a new CEO on 1 November 20X6. In December, management recognised a “strategic restructuring provision” of CU45 million, reducing 20X6 profit from CU12 million to a loss of CU33 million.
Internal papers show:
• only CU8 million of costs meet the criteria for a present obligation at 31 December 20X6;
• CU22 million relates to possible store closures that the Board will vote on in March 20X7;
• CU15 million is described as a “buffer for surprises” so that 20X7 “starts fresh.”
The CEO tells analysts that 20X6 was “a transition year” and guidance for 20X7 will be “comfortably beatable.”`,
    questions: [
      "Việc lập dự phòng “để năm sau đẹp” có phải là prudence không?",
      "Phần nào của CU45m có thể được mô tả trung thực là nghĩa vụ hiện tại?",
      "Big bath ảnh hưởng neutrality và confirmatory value thế nào?",
      "Người sử dụng BCTC 20X6 và 20X7 bị đánh lừa ra sao?",
      "Cách trình bày nào vừa faithful vừa relevant?"
    ],
    answer: `Đặc tính trọng tâm: Neutrality. Prudence không cho phép overstate liabilities — CF.2.16–2.17.
Chỉ ~CU8m là nghĩa vụ hiện tại. Phần còn lại là kế hoạch tương lai + “buffer” — không phải liability. Ghi nhận làm lỗ năm nay để tạo lợi nhuận năm sau là thiên lệch có chủ đích (big bath).
Ảnh hưởng: 20X6 quá bi quan, 20X7 quá lạc quan → cả hai năm đều không faithful; confirmatory value của profit bị phá.
Bẫy: sinh viên gọi đây là “prudence / conservative”. CF nói rõ overstatement of liabilities không phải prudence.`,
    distractors: ["Prudence", "Completeness", "Timeliness", "Comparability"]
  },
  {
    id: 8,
    title: "Inventory formula changed for one year only",
    company: "Helio Electronics",
    primary: "Comparability (consistency is the means)",
    secondary: ["Faithful representation", "Relevance"],
    tags: ["enhancing", "comparability", "trap"],
    difficulty: "Hard",
    scenario: `Helio Electronics used FIFO for 12 years. In 20X6, input prices rose sharply. Management switched to weighted-average cost for 20X6 only, reducing COGS by CU18 million relative to FIFO. The notes state: “The change better reflects the physical flow of goods.”
Warehouse records still show that the oldest batches are issued first. In 20X7 management intends to return to FIFO “once prices stabilise.”
No restatement of comparatives is presented.`,
    questions: [
      "Consistency và comparability khác nhau thế nào?",
      "Thay đổi phương pháp có làm like things look alike không?",
      "Lý do “physical flow” có được bằng chứng hỗ trợ không?",
      "Việc không restatement comparatives ảnh hưởng ra sao?",
      "Đặc tính nền tảng nào cũng đang bị tổn hại?"
    ],
    answer: `Đặc tính trọng tâm: Comparability — CF.2.24–2.29. Consistency hỗ trợ comparability, không phải chính nó là QC.
Comparability = nhận ra giống/khác. Không phải uniformity. Cho phép phương pháp khác nhau cho cùng hiện tượng sẽ làm giảm comparability.
Ở đây thay đổi 1 năm, lý do không khớp bằng chứng (FIFO vẫn đúng physical flow), và có động cơ lợi nhuận. Comparatives không restated → 20X5 và 20X6 không so sánh được.
Cũng tổn hại faithful representation (chọn phương pháp để ra số đẹp) và relevance (user không thấy trend thật).
Bẫy: nghĩ “được phép chọn chính sách thì comparability không quan trọng”. CF.2.29: alternative methods diminish comparability.`,
    distractors: ["Understandability", "Cost constraint", "Materiality", "Timeliness"]
  },
  {
    id: 9,
    title: "Financial statements issued nine months late",
    company: "Harbor Ports Ltd",
    primary: "Timeliness",
    secondary: ["Relevance", "Cost constraint"],
    tags: ["enhancing", "timeliness"],
    difficulty: "Medium",
    scenario: `Harbor Ports Ltd’s year-end is 31 December 20X6. The complete IFRS financial statements are authorised only on 28 September 20X7. Management explains that a new ERP conversion and a dispute with the previous auditor caused the delay.
During the delay:
• the company privately refinanced a CU200 million facility in April 20X7;
• two competitors published 20X6 results in March and were acquired at a premium.
An investor who sold shares in May 20X7 says the late report made the information useless.`,
    questions: [
      "Thông tin 20X6 còn timely vào tháng 9/20X7 không?",
      "Timeliness có phải đặc tính nền tảng không? Nó có thể cứu thông tin irrelevant không?",
      "Một số thông tin có thể vẫn timely lâu sau ngày kết thúc kỳ không?",
      "Delay có làm giảm predictive/confirmatory value không?",
      "Cost của ERP có biện minh cho việc trì hoãn toàn bộ BCTC không?"
    ],
    answer: `Đặc tính trọng tâm: Timeliness — CF.2.33. Enhancing, không phải fundamental.
Thông tin càng cũ càng kém hữu ích cho quyết định, dù một số thông tin (xu hướng dài hạn) vẫn timely sau nhiều năm.
BCTC năm phát hành sau 9 tháng làm suy giảm mạnh khả năng ảnh hưởng quyết định trong giai đoạn then chốt (tái tài trợ, định giá). Relevance tiềm năng vẫn còn, nhưng bị enhancing characteristic làm yếu.
Timeliness không thể biến thông tin sai/không liên quan thành useful (CF.2.37).
Bẫy: xếp Timeliness ngang Relevance. Enhancing không thay thế fundamental.`,
    distractors: ["Relevance as primary", "Faithful representation", "Verifiability", "Completeness"]
  },
  {
    id: 10,
    title: "Too complex to disclose",
    company: "NovaBank",
    primary: "Understandability vs completeness — complexity is not a reason to omit",
    secondary: ["Completeness", "Faithful representation"],
    tags: ["enhancing", "understandability", "trap"],
    difficulty: "Hard",
    scenario: `NovaBank holds a portfolio of structured credit derivatives. The valuation model uses 14 unobservable inputs. The CFO instructs the reporting team to omit the portfolio from both the statement of financial position narrative and the notes because:
“Even sophisticated users will not understand the model. Including it would make the financial statements unreadable. Understandability requires us to keep the report simple.”
The portfolio’s carrying amount is CU1.1 billion (9% of assets). Only a single line “other financial assets” is shown.`,
    questions: [
      "Loại thông tin phức tạp ra khỏi BCTC có làm BCTC dễ hiểu hơn — và có được phép không?",
      "Understandability được định nghĩa thế nào trong CF?",
      "User được giả định có kiến thức gì?",
      "Việc gộp vào “other financial assets” còn đụng đặc tính nào?",
      "Làm thế nào để vừa understandable vừa complete?"
    ],
    answer: `Đặc tính trọng tâm: Understandability — CF.2.34–2.36, nhưng câu trả lời đúng là KHÔNG được loại thông tin phức tạp.
CF: một số hiện tượng vốn phức tạp; loại chúng ra làm báo cáo dễ đọc hơn nhưng incomplete và có thể misleading.
User được giả định có hiểu biết hợp lý về kinh doanh và phân tích cẩn thận; đôi khi cần chuyên gia.
Cách đúng: phân loại, mô tả, trình bày rõ ràng, súc tích — bảng đầu vào Level 3, độ nhạy, rủi ro — không phải xóa sổ.
Đồng thời vi phạm completeness và faithful representation.
Bẫy: lấy understandability làm lý do giấu thông tin. Đó là đảo ngược CF.2.35.`,
    distractors: ["Cost constraint", "Materiality", "Timeliness", "Comparability"]
  },
  {
    id: 11,
    title: "Level 3 fair value with no inputs",
    company: "Lumen Ventures",
    primary: "Verifiability + Completeness",
    secondary: ["Faithful representation", "Free from error"],
    tags: ["enhancing", "verifiability", "trap"],
    difficulty: "Hard",
    scenario: `Lumen Ventures measures an unlisted investee at FV of CU87 million. The amount comes from a proprietary model maintained by a consultant. The notes say only: “Fair value is based on a discounted cash-flow model.”
No unobservable inputs, no ranges, no sensitivity, no alternative scenarios are disclosed. Two independent valuation specialists hired by the audit committee produce values of CU41 million and CU120 million using different but reasonable assumptions.
Management refuses to disclose the range because “IFRS requires a single point estimate.”`,
    questions: [
      "Thông tin có verifiable không? Direct hay indirect?",
      "Một điểm ước tính có thể verifiable không nếu kèm xác suất/khoảng?",
      "Việc không công bố input phá đặc tính nào trước?",
      "Độ bất định đo lường cao có tự làm thông tin useless không (CF.2.22)?",
      "Cách mô tả nào vừa faithful vừa verifiable hơn?"
    ],
    answer: `Đặc tính trọng tâm kết hợp: Verifiability (CF.2.30–2.32) và Completeness.
Verifiability = các quan sát viên độc lập, am hiểu có thể đi đến đồng thuận (không cần hoàn toàn giống nhau) rằng mô tả là faithful. Có thể verify một khoảng + xác suất, không bắt buộc một điểm.
Indirect verification: kiểm tra input và tính lại output. Không có input → không verify được.
CF.2.22: ước tính rất bất định VẪN có thể useful nếu mô tả rõ ước tính và giải thích uncertainty. Im lặng mới làm hỏng faithful representation.
Bẫy: chọn duy nhất “free from error” vì hai chuyên gia ra số khác nhau. Khác biệt giả định ≠ error trong quy trình.`,
    distractors: ["Free from error only", "Relevance", "Comparability", "Timeliness"]
  },
  {
    id: 12,
    title: "Cash and overdrafts netted across banks",
    company: "Orion Logistics",
    primary: "Faithful representation — offsetting unlike things",
    secondary: ["Completeness", "Comparability"],
    tags: ["fundamental", "faithful", "trap"],
    difficulty: "Medium-Hard",
    scenario: `Orion Logistics presents “Cash and cash equivalents: CU2 million.” The notes (page 64) reveal:
• cash at Bank A: CU48 million;
• overdraft at Bank B (no right of set-off): CU46 million.
Management argues the net figure “better shows liquidity available to the group as a whole” and is “more understandable.” There is no legally enforceable right to offset and no intention to settle net.`,
    questions: [
      "Netting có làm like things look alike / unlike things look different không?",
      "Người dùng đánh giá thanh khoản sẽ bị ảnh hưởng thế nào?",
      "Understandability có biện minh cho việc gộp hai hiện tượng khác bản chất không?",
      "Đặc tính nền tảng bị phá là gì?",
      "IAS 32 / IAS 7 liên hệ thế nào với CF?"
    ],
    answer: `Đặc tính trọng tâm: Faithful representation (và Completeness của depiction).
Tiền mặt và thấu chi ở hai ngân hàng không có quyền bù trừ là hai hiện tượng khác nhau: tài sản và nợ phải trả. Gộp chúng thành “cash CU2m” mô tả sai vị thế tài chính và rủi ro thanh khoản (phải trả Bank B bất cứ lúc nào).
CF.2.27: comparability không tăng khi làm unlike things look alike.
Understandability không được dùng để đánh đổi faithful representation (CF.2.37).
Bẫy: gọi đây là “materiality” vì net nhỏ. Nature của offsetting sai mới là trọng tâm.`,
    distractors: ["Materiality", "Understandability as primary", "Timeliness", "Cost constraint"]
  },
  {
    id: 13,
    title: "Internally generated brand recognised at “strategic value”",
    company: "Aura Cosmetics",
    primary: "Trade-off Relevance vs Faithful representation (measurement uncertainty)",
    secondary: ["Free from error", "Verifiability"],
    tags: ["fundamental", "tradeoff", "trap"],
    difficulty: "Very hard",
    scenario: `Aura Cosmetics has built a well-known brand over 20 years. Management wants users to see “the real value of the business” and recognises an internally generated brand asset of CU400 million, with a corresponding gain in profit.
The amount is the midpoint of a marketing consultant’s range of CU150–CU900 million. There is no active market. IAS 38 would prohibit recognition, but the CFO says “the Conceptual Framework prefers relevant information, and brand value is the most relevant information about our resources.”
No sensitivity or process description is given.`,
    questions: [
      "Thông tin về thương hiệu tự tạo có relevancy không?",
      "Mức measurement uncertainty ở đây có cho phép một depiction sufficiently faithful không?",
      "CF.2.21–2.22 hướng dẫn trade-off thế nào?",
      "Framework có override chuẩn mực cụ thể (IAS 38) không?",
      "Nếu không ghi nhận asset, làm sao vẫn cung cấp thông tin relevant?"
    ],
    answer: `Đặc tính trọng tâm: áp dụng đồng thời Relevance và Faithful representation — CF.2.20–2.22.
Brand tự tạo chắc chắn relevant (predictive cho dòng tiền). Nhưng ước tính CU150–900m, không thị trường, không quy trình minh bạch → nghi ngờ liệu có sufficiently faithful representation.
CF: đôi khi ước tính rất bất định kèm thuyết minh vẫn là thông tin hữu ích nhất; đôi khi phải chọn mô tả khác ít relevant hơn nhưng ít bất định hơn; một số trường hợp không có ước tính nào useful.
Framework không cho phép ghi nhận trái chuẩn mực đang hiệu lực. Kênh đúng: thuyết minh, MD&A, không phải đưa CU400m vào P/L.
Bẫy: “relevance thắng tất cả”. CF.2.20: không cái nào đứng một mình.`,
    distractors: ["Relevance only", "Completeness only", "Comparability", "Prudence"]
  },
  {
    id: 14,
    title: "Interest paid jumps classification every year",
    company: "Riverbond Plc",
    primary: "Comparability — alternative classifications",
    secondary: ["Faithful representation", "Understandability"],
    tags: ["enhancing", "comparability", "ias7"],
    difficulty: "Medium-Hard",
    scenario: `Riverbond Plc reports under IAS 7. Interest paid was classified as:
• 20X4: operating
• 20X5: financing
• 20X6: operating again
Each year the notes say the policy “better reflects the nature of the entity’s financing.” Operating cash flow in 20X6 is CU90 million including a CU40 million add-back of interest; under last year’s policy it would have been CU50 million.
Analysts’ models treat OCF as a primary valuation input.`,
    questions: [
      "IAS 7 cho phép lựa chọn — vậy comparability có còn là vấn đề không?",
      "Thay đổi qua lại hàng năm là consistency hay inconsistency?",
      "Người dùng có thể tái phân loại nếu thuyết minh đủ không?",
      "Đặc tính nào bị tổn hại nhiều hơn: comparability hay faithful representation?",
      "Cách nào cải thiện cả hai?"
    ],
    answer: `Đặc tính trọng tâm: Comparability (và consistency như phương tiện) — CF.2.26–2.29.
Chuẩn mực cho phép lựa chọn không xóa bỏ yêu cầu comparability intra-entity qua các kỳ. Nhảy qua nhảy lại làm like cash flows trông khác nhau mà không có thay đổi kinh tế.
Thuyết minh giúp user tự điều chỉnh (bù đắp một phần — CF.2.38) nhưng không phục hồi hoàn toàn confirmatory value của time-series OCF.
Chọn một chính sách, áp dụng nhất quán, thuyết minh số liệu để user tái phân loại.
Bẫy: “vì IAS 7 cho chọn nên không sai QC”. Cho chọn ≠ miễn comparability.`,
    distractors: ["Timeliness", "Materiality", "Neutrality", "Cost constraint"]
  },
  {
    id: 15,
    title: "Going-concern doubts left out because “no amount to book”",
    company: "Cedar Pharma",
    primary: "Relevance + Completeness of the depiction of the entity",
    secondary: ["Faithful representation", "Timeliness"],
    tags: ["fundamental", "relevance", "trap"],
    difficulty: "Hard",
    scenario: `Cedar Pharma’s main product faces a regulator’s safety review. Two independent counsel assess a 40% probability that the licence will be withdrawn within 12 months, which would force an orderly wind-down.
Management prepares 20X6 financial statements on a going-concern basis with no emphasis and no note. The argument: “No present obligation has arisen, no asset is impaired on a going-concern basis, and therefore there is nothing relevant to report in these financial statements. Disclosure would panic the market.”`,
    questions: [
      "Relevance có đòi hỏi một số tiền được ghi nhận không?",
      "Im lặng có phải là một hình thức presentation bị manipulate không (neutrality)?",
      "Thông tin này có predictive value với nhà cung cấp tín dụng không?",
      "Cơ sở lập BCTC (going concern) liên hệ thế nào với faithful representation?",
      "Thuyết minh có thể vừa relevant vừa không tạo bias không?"
    ],
    answer: `Đặc tính trọng tâm: Relevance (và completeness của depiction về tình trạng của entity).
Một sự kiện có 40% khả năng chấm dứt mô hình kinh doanh là capable of making a difference — ngay cả khi chưa ghi nhận impairment hay provision.
CF Ch.3: going concern là giả định; nếu có nghi ngờ đáng kể, giả định và thuyết minh phải phản ánh điều đó, nếu không depiction về tài sản/nợ (sẽ thu hồi/thanh toán trong hoạt động bình thường) không còn faithful.
“Không panic thị trường” là lập luận neutrality đảo ngược: giấu thông tin để hướng phản ứng của user.
Bẫy: nhầm thành chỉ là vấn đề IAS 1 presentation, bỏ qua QC.`,
    distractors: ["Prudence", "Verifiability", "Comparability", "Free from error"]
  },
  {
    id: 16,
    title: "Related-party warehouse at ten times market rent",
    company: "Summit Foods",
    primary: "Faithful representation of transactions + Completeness",
    secondary: ["Neutrality", "Materiality by nature"],
    tags: ["fundamental", "faithful", "related-party"],
    difficulty: "Hard",
    scenario: `Summit Foods pays CU12 million annual rent to a warehouse company owned by the Chair’s family. Independent appraisals indicate market rent is CU1.2 million. Management records rent expense of CU12 million and discloses:
“The Group leases warehousing from a related party on arm’s-length terms.”
No amounts, no relationship, no comparison to market are given. The Chair’s family company reports the CU12 million as ordinary rental income.`,
    questions: [
      "Câu “arm’s-length terms” có phải mô tả faithful không?",
      "Bản chất kinh tế của phần vượt thị trường là gì?",
      "Materiality ở đây theo size hay theo nature?",
      "Thiếu số liệu và mối quan hệ đụng completeness thế nào?",
      "Người sử dụng đánh giá earnings quality sẽ bị ảnh hưởng ra sao?"
    ],
    answer: `Đặc tính trọng tâm: Faithful representation (substance) kết hợp Completeness và materiality theo bản chất.
Gọi giao dịch là arm’s length khi bằng chứng thị trường cho thấy 10 lần là mô tả sai. Phần CU10.8m có bản chất phân phối cho bên liên quan, không phải chi phí thuê thông thường.
Nature (related party, governance) làm thông tin material dù có thể nhỏ so với tổng chi phí.
Completeness đòi hỏi mô tả mối quan hệ, số tiền, điều khoản, và nếu cần, rằng điều khoản không phải thị trường.
Bẫy: chỉ nói “IAS 24 disclosure”. Câu hỏi QC là depiction có trung thực và đủ để hiểu hiện tượng không.`,
    distractors: ["Comparability", "Timeliness", "Understandability only", "Cost constraint"]
  },
  {
    id: 17,
    title: "Inventory write-down reversed to hit the bonus hurdle",
    company: "Polar Outdoor",
    primary: "Neutrality + qualitative materiality",
    secondary: ["Free from error", "Faithful representation"],
    tags: ["fundamental", "neutrality", "materiality", "trap"],
    difficulty: "Hard",
    scenario: `Polar Outdoor’s bonus plan pays if operating profit exceeds CU50 million. At 20 December, a year-end NRV review supports a CU3.2 million inventory write-down, bringing profit to CU48.1 million.
On 28 December management “reassesses” fashion-season demand and reverses CU2.0 million of the write-down. Internal emails say: “We only need CU1.9 million more. The goods can always be discounted in January.”
January sales of that stock realise amounts consistent with the original 20 December NRV.`,
    questions: [
      "Đảo ngược có dựa trên bằng chứng mới hay trên target?",
      "Một khoản 4% lợi nhuận có thể material vì lý do nào?",
      "Neutrality bị phá ở bước nào — ghi giảm ban đầu hay đảo ngược?",
      "Free from error và neutrality giao nhau thế nào ở đây?",
      "Người dùng có cần biết về bonus hurdle để đánh giá ước tính không?"
    ],
    answer: `Đặc tính trọng tâm: Neutrality; materiality theo ngữ cảnh (bonus / threshold).
Ước tính NRV ban đầu có bằng chứng. Đảo ngược không có bằng chứng mới, chỉ có mục tiêu thưởng → selection and presentation bị manipulate (CF.2.15).
CU2m có thể nhỏ so với tài sản nhưng làm thay đổi kết quả thưởng và tín hiệu lãi — qualitative materiality.
Quy trình ước tính bị áp dụng sai (bỏ qua bằng chứng đã có) nên cũng không free from error.
Bẫy: cho rằng chỉ là “estimate change”. IAS 8 không biến một đảo ngược không căn cứ thành estimate trung lập.`,
    distractors: ["Comparability", "Timeliness", "Completeness only", "Understandability"]
  },
  {
    id: 18,
    title: "Two identical ships, two opposite treatments",
    company: "BlueKeel Shipping",
    primary: "Comparability + substance over form",
    secondary: ["Faithful representation"],
    tags: ["enhancing", "comparability", "trap"],
    difficulty: "Hard",
    scenario: `BlueKeel operates two identical container ships under contracts signed the same week with the same lessor, same term, same residual-value guarantee.
Ship A is labelled “lease” and recognised on balance sheet.
Ship B is labelled “capacity purchase agreement” and kept off balance sheet because legal title never transfers and the contract avoids the word “lease.”
Management says both treatments are “allowed by the documents” and that users can compare the two ships by reading 40 pages of notes.`,
    questions: [
      "Hai hiện tượng kinh tế có giống nhau không?",
      "Comparability đòi hỏi like things look alike như thế nào?",
      "Gọi tên pháp lý khác nhau có tạo ra hai hiện tượng khác nhau không?",
      "40 trang thuyết minh có bù được việc nhận diện khác nhau trên mặt BCTC không?",
      "Đặc tính nền tảng nào phải được thỏa trước khi comparability phát huy?"
    ],
    answer: `Đặc tính trọng tâm: Comparability gắn với Faithful representation của cùng một economic phenomenon.
Hai tàu + hai hợp đồng đồng nhất = cùng hiện tượng. Khác nhãn pháp lý không đổi substance (CF.2.12, 4.59–4.62).
CF.2.27: comparability không tăng khi like things look different.
Thuyết minh bù một phần non-comparability (CF.2.38) nhưng không thay thế việc nhận diện/ghi nhận nhất quán.
Fundamental phải đứng trước: nếu Ship B không faithful thì enhancing không cứu được (CF.2.37).
Bẫy: nghĩ comparability chỉ là so với đối thủ, không phải so hai khoản trong cùng entity.`,
    distractors: ["Timeliness", "Materiality", "Cost constraint", "Understandability only"]
  },
  {
    id: 19,
    title: "Always pick the worst number in the range",
    company: "Stonebridge Construction",
    primary: "Prudence is not asymmetry / not maximum pessimism",
    secondary: ["Neutrality", "Free from error"],
    tags: ["fundamental", "prudence", "trap"],
    difficulty: "Very hard",
    scenario: `Stonebridge’s audit committee adopts a written “prudence policy”:
• for every uncertain asset, recognise the lowest amount in the reasonably possible range;
• for every uncertain liability, recognise the highest amount;
• never recognise contingent assets, even if inflow is virtually certain.
Applying the policy, a lawsuit with a most-likely outcome of CU6 million (range CU4–9 million) is recorded at CU9 million. A compensation claim that legal counsel rates as virtually certain at CU5 million is omitted entirely.
The committee says this “implements the Framework’s prudence concept and protects creditors.”`,
    questions: [
      "CF có yêu cầu bất đối xứng trong bằng chứng ghi nhận asset vs liability không?",
      "Chọn mút biên của range có phải exercise of caution không?",
      "Bỏ qua khoản thu virtually certain vi phạm điều gì?",
      "Bảo vệ chủ nợ có phải mục tiêu của general purpose financial reports không?",
      "Ước tính trung lập trong từng trường hợp nên là gì?"
    ],
    answer: `Đặc tính trọng tâm: hiểu đúng Prudence trong Neutrality — CF.2.16–2.17.
Prudence = thận trọng khi xét đoán: không overstate assets/income, không understate liabilities/expenses. Đồng thời không cho phép understate assets/income hay overstate liabilities/expenses.
CF.2.17: prudence KHÔNG hàm ý cần bất đối xứng (ví dụ đòi hỏi bằng chứng mạnh hơn cho asset hơn liability). Asymmetry không phải QC. Một số Standard có quy định bất đối xứng vì lý do khác, không phải vì QC.
Chọn systematically mút biên = bias, tạo ra thu nhập kỳ sau bị thổi. Bỏ qua inflow virtually certain là understatement of assets.
Mục tiêu BCTC đa mục đích không phải “bảo vệ chủ nợ” bằng số liệu lệch.
Bẫy: thuộc lòng “prudence = conservative” theo nghĩa kế toán cũ trước 2018.`,
    distractors: ["Relevance", "Completeness", "Comparability", "Timeliness"]
  },
  {
    id: 20,
    title: "A tiny fraud with a large story",
    company: "Meadow Dairy",
    primary: "Materiality by nature, not magnitude",
    secondary: ["Faithful representation", "Neutrality"],
    tags: ["fundamental", "materiality", "trap"],
    difficulty: "Hard",
    scenario: `Internal audit discovers that a regional manager diverted CU180,000 of company cash over two years (0.04% of revenue, 0.7% of profit). The amount has been repaid. Management omits any mention from the 20X6 financial statements and the governance report, arguing the amount is quantitatively immaterial and has been corrected.
The scheme involved falsifying quality certificates for milk supplied to schools. A regulator is opening a file. No provision is recorded because “a fine is not probable and would be small.”`,
    questions: [
      "Materiality có thể phát sinh từ nature dù magnitude nhỏ không?",
      "Omitting / obscuring khác misstating thế nào trong CF.2.11?",
      "Rủi ro pháp lý và uy tín có predictive value không?",
      "Việc đã hoàn trả có xóa relevance của thông tin không?",
      "Những thông tin nào cần có mặt, và ở đâu?"
    ],
    answer: `Đặc tính trọng tâm: Materiality — nature or magnitude or both — CF.2.11.
Gian lận, hàng giả cho trường học, điều tra cơ quan quản lý: bản chất có thể ảnh hưởng quyết định (quản trị, rủi ro pháp lý, ESG, going concern thương hiệu) dù số tiền nhỏ.
Omitting và obscuring cũng nằm trong định nghĩa materiality, không chỉ misstating.
Hoàn trả số tiền không xóa hiện tượng đã xảy ra hay rủi ro còn lại.
Bẫy: áp dụng ngưỡng 5% lợi nhuận một cách máy móc.`,
    distractors: ["Cost constraint", "Timeliness", "Comparability", "Understandability"]
  },
  {
    id: 21,
    title: "DCF that nobody can rerun",
    company: "Atlas Renewables",
    primary: "Verifiability",
    secondary: ["Completeness", "Faithful representation"],
    tags: ["enhancing", "verifiability"],
    difficulty: "Medium-Hard",
    scenario: `Atlas measures a power-purchase contract at FV using a DCF. The model lives on one analyst’s laptop, uses undocumented macros, and undocumented “experience adjustments” of +12% to volume. The note states the FV and the discount rate only.
When the engagement quality reviewer asks two other staff to replicate the value, both fail. Management says verifiability is unnecessary because “fair value is an estimate, and estimates are never exact.”`,
    questions: [
      "Ước tính có cần verifiable không?",
      "Indirect verification đòi hỏi điều gì?",
      "Forward-looking information verify được ngay không? CF gợi ý gì?",
      "Thiếu tài liệu quy trình còn đụng free from error không?",
      "Những gì cần công bố để user quyết định có dùng thông tin hay không?"
    ],
    answer: `Đặc tính trọng tâm: Verifiability — CF.2.30–2.32.
Ước tính vẫn cần verifiable: người quan sát độc lập có thể đồng thuận rằng depiction là faithful, kể cả khi họ không ra cùng một số.
Indirect verification = kiểm tra input + tính lại theo cùng phương pháp. Macro không tài liệu + “experience adjustments” không mô tả → thất bại.
Với thông tin hướng tương lai, có thể chưa verify được đến một kỳ sau; khi đó phải công bố giả định, phương pháp, yếu tố hỗ trợ để user tự quyết định có dùng hay không (CF.2.32).
Bẫy: “estimate nên không cần verify”. CF không nói vậy.`,
    distractors: ["Timeliness", "Relevance only", "Prudence", "Comparability"]
  },
  {
    id: 22,
    title: "Copying peers’ accounting to “be comparable”",
    company: "Nimbus Software",
    primary: "Comparability is not uniformity, and not copying a misrepresentation",
    secondary: ["Faithful representation", "Relevance"],
    tags: ["enhancing", "comparability", "trap"],
    difficulty: "Very hard",
    scenario: `Nimbus sells SaaS subscriptions. Its economic model is a principal that controls the platform. Three listed peers treat themselves as agents and recognise only net commission, producing higher margin % although lower revenue.
The CFO proposes switching to the net basis “to improve comparability with the peer group and help investors value us on the same multiple.” Legal form of Nimbus’s contracts still indicates it is the principal.`,
    questions: [
      "Comparability có đòi hỏi mọi công ty trong ngành ghi giống nhau không?",
      "Nếu peers đang mô tả sai substance, copy họ có tăng comparability không?",
      "CF.2.27 nói gì về unlike / like things?",
      "Valuation multiple đồng nhất có phải mục tiêu của BCTC không?",
      "Làm sao so sánh được với peers mà vẫn faithful?"
    ],
    answer: `Đặc tính trọng tâm: Comparability ≠ uniformity — CF.2.27–2.28.
Muốn so sánh, like things must look alike and different things must look different. Nimbus (principal) và peers (nếu thật sự là agent) là khác nhau; nếu peers cũng là principal nhưng ghi net thì họ đang unfaithful — copy họ chỉ nhân rộng mô tả sai.
Một faithful representation của hiện tượng relevant vốn đã tạo ra một mức comparability tự nhiên với faithful representation của hiện tượng tương tự ở entity khác (CF.2.28).
User có thể điều chỉnh số liệu để so sánh; entity không được bóp substance để khớp multiple.
Bẫy: “comparability với ngành thắng substance”. Enhancing không cứu được unfaithful information.`,
    distractors: ["Timeliness", "Materiality", "Understandability", "Cost constraint"]
  },
  {
    id: 23,
    title: "Two-page financial statements for a listed group",
    company: "Helix Telecom",
    primary: "Understandability abused against Completeness",
    secondary: ["Relevance", "Cost constraint"],
    tags: ["enhancing", "understandability", "trap"],
    difficulty: "Medium-Hard",
    scenario: `Helix Telecom, a listed group with operations in 19 countries, publishes “concise financial statements” of two pages: a highly aggregated statement of profit or loss and a statement of financial position with seven lines. Almost all IFRS note disclosures are moved to a password-protected data room “available on request to serious investors.”
Management cites CF: “Classifying and presenting information clearly and concisely makes it understandable. Users drown in notes.”`,
    questions: [
      "Súc tích có đồng nghĩa với cắt nội dung bắt buộc không?",
      "Đặt thông tin sau tường phí ảnh hưởng user nào?",
      "Cost constraint có cho phép giảm disclosure với entity niêm yết lớn không?",
      "Aggregation quá mức đụng QC nào?",
      "Ranh giới giữa concise và obscuring nằm ở đâu (CF.2.11)?"
    ],
    answer: `Đặc tính trọng tâm: Understandability không cho phép cắt thông tin cần thiết — CF.2.34–2.35.
Concise = cách trình bày, không phải xóa hiện tượng phức tạp. Che giấu sau data room làm giảm timeliness/access và có thể obscuring (nằm trong định nghĩa materiality).
Cost constraint được IASB cân khi viết chuẩn mực; một listed group không thể tự viện cost để bỏ gần như toàn bộ notes.
Aggregation quá mức làm unlike items look alike → tổn hại faithful representation và comparability.
Bẫy: trích nửa câu CF.2.34 để biện minh cho báo cáo rỗng.`,
    distractors: ["Timeliness only", "Verifiability", "Prudence", "Free from error"]
  },
  {
    id: 24,
    title: "Factory fire on 5 January, silence in 31 December report",
    company: "Ironclad Manufacturing",
    primary: "Relevance of subsequent information vs recognition cut-off",
    secondary: ["Completeness", "Timeliness", "Faithful representation"],
    tags: ["fundamental", "relevance", "trap"],
    difficulty: "Hard",
    scenario: `Ironclad’s year-end is 31 December 20X6. On 5 January 20X7 a fire destroys its only plant. Authorisation date of the financial statements is 28 February 20X7. The plant’s carrying amount was CU70 million (31% of assets). Insurance is disputed; coverage is uncertain.
Management records nothing and discloses nothing in the 20X6 statements, arguing:
“The fire occurred after the reporting date. It is a 20X7 event. Recording or even highlighting it in 20X6 would mix periods and destroy comparability.”`,
    questions: [
      "Sự kiện sau ngày kết thúc kỳ có thể relevant với user của BCTC 20X6 không?",
      "Relevance có đòi hỏi điều chỉnh số liệu năm trước không?",
      "Im lặng đến 28/2 có phải timely communication không?",
      "Comparability có bị phá nếu thuyết minh non-adjusting event không?",
      "Predictive value ở đây là gì?"
    ],
    answer: `Đặc tính trọng tâm: Relevance (predictive value) — thông tin không cần được ghi nhận mới relevant.
Đây là non-adjusting subsequent event (IAS 10): không sửa số 20X6, NHƯNG phải thuyết minh nếu material — vì user đang dùng BCTC 20X6 để dự báo khả năng hoạt động liên tục và dòng tiền.
Im lặng đến ngày duyệt 28/2 là obscuring. Comparability giữa các kỳ không bị phá bởi một note về sự kiện sau ngày khóa sổ; ngược lại, note giúp user không suy ra sai rằng năng lực sản xuất vẫn nguyên.
Bẫy: nhầm “không adjust” thành “không relevant / không công bố”.`,
    distractors: ["Comparability as primary", "Free from error", "Neutrality", "Cost constraint"]
  },
  {
    id: 25,
    title: "“Too costly to count” 40% of assets",
    company: "Granite Materials",
    primary: "Cost constraint misapplied by an individual entity",
    secondary: ["Completeness", "Verifiability", "Faithful representation"],
    tags: ["constraint", "cost", "trap"],
    difficulty: "Hard",
    scenario: `Granite Materials holds inventories of crushed stone at 40 sites. Inventory is 40% of total assets. For 20X6 management skips the physical count at 31 sites, rolls forward quantities from 20X4, and says:
“The Conceptual Framework recognises a cost constraint. Counting every pile would cost CU1.2 million in helicopter surveys. Users would not pay more for our shares just because we counted rocks.”
A sample count at 9 sites shows quantities 11% below the rolled-forward book.`,
    questions: [
      "Cost constraint được CF đặt ở cấp nào — IASB hay từng entity tự miễn trừ?",
      "Chi phí CU1.2m có được cân với lợi ích của thông tin về 40% tài sản không?",
      "Roll-forward đã sai 11% thì depiction còn free from error / complete không?",
      "User có chịu cost theo cách nào (CF.2.40)?",
      "Giải pháp nào cân bằng cost và usefulness?"
    ],
    answer: `Đặc tính trọng tâm: Cost constraint — CF.2.39–2.43 — bị áp dụng sai.
CF nói Board cân cost/benefit khi xây chuẩn mực, trên bình diện hệ thống, không phải từng entity tự loại yêu cầu because “users won’t pay more for our shares.”
Entity vẫn phải xét materiality và tìm cách thu thập thông tin hiệu quả (mẫu thống kê, drone, cycle counts), không phải bỏ cả hiện tượng chiếm 40% tài sản.
Mẫu đã cho thấy sai 11% → số ghi nhận không còn faithful / free from error.
User chịu cost dưới dạng lợi nhuận thấp hơn VÀ cost tự đi ước lượng thông tin thiếu (CF.2.40).
Bẫy: viện CF.2.39 như “get out of jail free”.`,
    distractors: ["Timeliness", "Understandability", "Prudence", "Comparability"]
  },
  {
    id: 26,
    title: "Stale market price versus a live but wild DCF",
    company: "Quartz Biologics",
    primary: "CF.2.22 trade-off: most relevant vs sufficiently faithful",
    secondary: ["Verifiability", "Relevance"],
    tags: ["fundamental", "tradeoff", "very-hard"],
    difficulty: "Very hard",
    scenario: `Quartz holds a 12% stake in an unlisted gene-therapy company. Two candidate measurements exist at 31 December 20X6:
A. The last transaction price, 18 months ago, CU22 million, between related founders. No subsequent transactions.
B. A current DCF prepared by Quartz, CU19–CU140 million depending on FDA-approval scenarios (management’s preferred point: CU95 million).
CFO: “CF says pick the most relevant information. The 18-month price is irrelevant. We must book CU95 million.”
The audit partner: “CU95 million is not a faithful representation. Book CU22 million or do not remeasure.”`,
    questions: [
      "Đâu là hiện tượng kinh tế cần mô tả?",
      "Thông tin nào most relevant? Thông tin nào sufficiently faithful?",
      "CF.2.21–2.22 mô tả quy trình 3 bước và trade-off ra sao?",
      "Có bắt buộc phải chọn một điểm ghi nhận không, hay thuyết minh range mới là useful nhất?",
      "Enhancing characteristics (verifiability) nghiêng về phương án nào?"
    ],
    answer: `Đặc tính trọng tâm: trade-off giữa Relevance và Faithful representation — CF.2.21–2.22. Đây là case “hóc” đúng nghĩa.
Bước 1: hiện tượng = giá trị hiện tại của khoản đầu tư không niêm yết.
Bước 2: thông tin most relevant có lẽ là ước tính hiện tại phản ánh xác suất FDA, không phải giá 18 tháng của giao dịch bên liên quan.
Bước 3: ước tính đó có sufficiently faithful không? Range CU19–140m, điểm CU95m do management chọn, input không quan sát được → measurement uncertainty cực cao.
CF: có thể useful nhất là chính ước tính bất định KÈM mô tả và giải thích uncertainty; hoặc một ước tính khác hơi kém relevant hơn nhưng ít bất định hơn; một số trường hợp không ước tính nào useful.
Verifiability nghiêng về công bố range + giả định, không phải một điểm CU95m im lặng, cũng không phải neo mãi CU22m như thể đó là current value.
Bẫy: phe “relevance thắng” hoặc phe “historical price luôn faithful hơn”. CF yêu cầu xét cả hai.`,
    distractors: ["Comparability", "Timeliness", "Prudence", "Materiality only"]
  },
  {
    id: 27,
    title: "Adjusted EBITDA on page 1, IFRS profit in a footnote",
    company: "Pulse Fitness",
    primary: "Neutrality in presentation / faithful depiction of performance",
    secondary: ["Understandability", "Comparability"],
    tags: ["fundamental", "neutrality", "ifrs18"],
    difficulty: "Hard",
    scenario: `Pulse Fitness’s primary financial statements present “Management operating profit (adjusted EBITDA)” in bold on the face of the statement of profit or loss as the final line. IFRS profit is CU12 million; adjusted EBITDA is CU41 million after adding back share-based payments, restructuring, “normalised rent,” and “non-cash depreciation.”
A reconciliation exists in Note 28. The front half of the annual report uses only adjusted EBITDA in every chart. Management: “Users find EBITDA more relevant. Relevance comes first.”`,
    questions: [
      "Relevance có cho phép thay thế hoặc át via IFRS performance không?",
      "Việc nhấn mạnh / làm mờ (emphasise / de-emphasise) liên hệ thế nào với neutrality (CF.2.15)?",
      "IFRS 18 / presentation objectives gắn với QC ra sao?",
      "Adding back “normalised rent” và depreciation có còn mô tả hiện tượng kinh tế không?",
      "Làm thế nào vừa cung cấp MPM vừa trung lập?"
    ],
    answer: `Đặc tính trọng tâm: Neutrality trong lựa chọn và trình bày — CF.2.15. Cũng là faithful representation of financial performance.
Trung lập = không nghiêng, không nhấn, không làm mờ để tăng xác suất user nhận thông tin theo hướng có lợi/bất lợi.
Đưa adjusted EBITDA thành dòng cuối đậm, chôn IFRS profit ở Note 28 là de-emphasising thông tin bắt buộc.
Một số điều chỉnh (SBP, rent “normalised”, depreciation) có thể làm unlike expenses biến mất — depiction không complete.
Relevance không đứng trên faithful representation (CF.2.20). MPM có thể hữu ích nếu minh bạch, không át via, và reconciles rõ.
Bẫy: “user thích EBITDA thì đó là relevance”. Capability of making a difference ≠ licence to manipulate presentation.`,
    distractors: ["Timeliness", "Verifiability", "Cost constraint", "Prudence"]
  },
  {
    id: 28,
    title: "One line for every obligation that could sink the company",
    company: "HarborChem",
    primary: "Completeness + Understandability of aggregation",
    secondary: ["Materiality", "Relevance"],
    tags: ["fundamental", "completeness", "trap"],
    difficulty: "Hard",
    scenario: `HarborChem presents a single line “Provisions CU88 million.” It comprises:
• environmental remediation CU18 million;
• warranties CU7 million;
• onerous contracts CU9 million;
• a competition-law investigation that counsel says could result in a fine of CU0 to CU400 million; management’s booked amount is CU12 million (lower end);
• restructuring CU5 million;
• “other” CU37 million, of which CU30 million is an unlabelled indemnity to a sold subsidiary.
No breakdown, no ranges, no contingencies above the booked amounts.`,
    questions: [
      "Một dòng tổng có phải complete depiction của từng hiện tượng không?",
      "Khoản điều tra cạnh tranh nên được mô tả thế nào dưới CF.2.14 và 2.22?",
      "Aggregation ở mức này có làm obscure thông tin material không?",
      "User có predictive value từ số CU88m không?",
      "Những giả định nào bắt buộc phải tách?"
    ],
    answer: `Đặc tính trọng tâm: Completeness (CF.2.14) kết hợp materiality-as-obscuring (CF.2.11).
Complete depiction của một nhóm khoản mục cần bản chất, số, ý nghĩa của số, và với một số khoản: chất lượng, yếu tố ảnh hưởng, quy trình.
Điều tra CU0–400m bị ghi CU12m rồi trộn với bảo hành là làm unlike things look alike. Predictive value gần như mất: user không biết có rủi ro tồn tại doanh nghiệp.
Không cần mọi chi tiết kỹ sư, nhưng phải tách các hiện tượng khác bản chất và công bố range/uncertainty của investigation + indemnity.
Bẫy: “tổng đã material và đã ghi nhận thì xong.” Ghi nhận không thay completeness của mô tả.`,
    distractors: ["Timeliness", "Comparability only", "Free from error only", "Cost constraint"]
  },
  {
    id: 29,
    title: "Bill-and-hold revenue the warehouse never left",
    company: "Vertex Equipment",
    primary: "Faithful representation — control has not passed",
    secondary: ["Relevance (misleading predictive value)", "Neutrality"],
    tags: ["fundamental", "faithful", "revenue"],
    difficulty: "Hard",
    scenario: `On 29 December 20X6 Vertex recognises CU35 million revenue on a “bill-and-hold” sale to a distributor. The goods remain in Vertex’s warehouse. The distributor has a unilateral right to return unsold goods until 30 June 20X7, has not paid, and does not have a separate storage agreement. Vertex retains insurance and physical control.
Management: “The legal invoice has been issued, so the sale exists. Users want to see the order book converted into revenue this year. That information has confirmatory value versus our guidance.”
Without this deal, Vertex would have missed guidance by 6%.`,
    questions: [
      "Hiện tượng kinh tế đã xảy ra là bán hàng hay vẫn đang nắm giữ hàng tồn kho + một đơn hàng?",
      "Confirmatory value có được tạo ra từ một mô tả không faithful không?",
      "Control đã chuyển chưa?",
      "Áp lực guidance ảnh hưởng neutrality thế nào?",
      "Nếu không ghi nhận doanh thu, thông tin nào vẫn relevant và nên đứng ở đâu?"
    ],
    answer: `Đặc tính trọng tâm: Faithful representation of the economic phenomenon (control / substance), không phải legal invoice.
Hàng chưa chuyển giao kiểm soát: còn kho người bán, quyền trả hàng rộng, chưa trả tiền, bảo hiểm còn ở Vertex. Hiện tượng là inventory + executory arrangement, không phải revenue earned.
CF.2.20: faithful representation của hiện tượng irrelevant thì vô dụng; relevance của một mô tả không trung thực cũng vậy. “Confirmatory value vs guidance” được tạo nhân tạo.
Thông tin relevant đúng: backlog, điều khoản bill-and-hold, rủi ro trả hàng — ở thuyết minh, không phải trên dòng revenue.
Bẫy: lấy confirmatory value (relevance) để biện minh cho ghi nhận sai.`,
    distractors: ["Timeliness", "Comparability", "Understandability", "Cost constraint"]
  },
  {
    id: 30,
    title: "Which characteristic actually decides the issue?",
    company: "MultiSignal Holdings",
    primary: "Applying the hierarchy: fundamental first, then enhancing, then cost",
    secondary: ["All QCs — diagnostic trap"],
    tags: ["trap", "hierarchy", "very-hard"],
    difficulty: "Very hard",
    scenario: `MultiSignal is preparing year-end reports. Four unresolved items land on the same day:
(i) A CU4 million software implementation error that double-counted cash for two weeks in December; the error was found and reversed before authorisation.
(ii) A plan to issue 20X6 statements in February (on time) but without the climate-related sensitivity the Board promised users last year, because the model is unfinished.
(iii) A proposal to adopt the same unusual revenue cut-off as a larger listed rival “so investors can compare us.”
(iv) A Level 3 biological-asset valuation whose only verifiable output is a wide range; management wants the top of the range to support a covenant.
The technical team lists every qualitative characteristic next to every item and cannot agree which characteristic is decisive for each.`,
    questions: [
      "Với từng tình huống (i)–(iv), đặc tính NÀO là quyết định, đặc tính nào chỉ là hệ quả?",
      "Thứ tự áp dụng CF.2.21 và CF.2.37 là gì?",
      "Enhancing characteristic có thể cứu thông tin không faithful không?",
      "Khi nhiều QC cùng bị chạm, cách trả lời trong bài thi / thảo luận nên cấu trúc thế nào?",
      "Covenant pressure biến ước tính thành vấn đề neutrality chứ không còn chỉ là measurement uncertainty — đúng hay sai?"
    ],
    answer: `Đặc tính trọng tâm của cả case: biết xếp tầng QC — đây là case “nhiều đặc tính, cái nào liên quan nhất”.
(i) Free from error / process. Đã phát hiện và sửa trước khi ban hành → depiction cuối cùng có thể faithful. Không phải materiality drama nếu số đã đúng. Completeness của quy trình kiểm soát là câu chuyện governance, không phải QC của số đã sửa.
(ii) Relevance + completeness của thông tin đã hứa (predictive), không phải timeliness (báo cáo vẫn đúng hạn). Cost/unfinished model có thể giải thích TẠM thời, nhưng phải nói rõ limitation chứ không im.
(iii) Faithful representation (cut-off phải theo substance của MultiSignal) thắng “comparability with rival”. Enhancing không được dùng để chọn một mô tả không trung thực (CF.2.37).
(iv) Neutrality (chọn mút trên vì covenant) là quyết định; measurement uncertainty / verifiability là bối cảnh. Nếu chọn midpoint + công bố range thì là CF.2.22. Chọn top vì covenant là bias.
Cấu trúc trả lời nên: (1) hiện tượng kinh tế là gì, (2) thông tin nào relevant, (3) depiction đó có complete–neutral–free from error không, (4) enhancing nào giúp/ tổn hại, (5) cost có thực sự ràng buộc hệ thống không.
Bẫy lớn nhất của chương này: liệt kê hết mọi QC mà không chỉ ra QC quyết định.`,
    distractors: ["Always materiality", "Always prudence", "Always comparability", "Cost constraint always wins"]
  }
];
