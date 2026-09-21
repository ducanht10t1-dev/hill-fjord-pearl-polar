import { stripQcFromStem, thickenStem } from "@/lib/stem";
import {
  fourDistractors,
  pickRandomQc,
  type QcDef,
} from "@/data/qc";
import { resolveExplain } from "@/data/explain";
import type { Issue } from "@/data/issues";

const COMPANIES = [
  "An Bình Logistics",
  "Đồng Tâm Materials",
  "Sài Gòn FreshMart",
  "Mekong Pharma",
  "Red River Energy",
  "Hạ Long Ports",
  "Tây Nguyên Coffee",
  "Lotus Telecom",
  "Nam Á Bank",
  "Kim Long Construction",
  "Vịnh Bắc Bộ Shipping",
  "Ánh Dương Solar",
  "Phố Cổ Retail",
  "Sông Hồng Steel",
  "Cửu Long Agro",
  "Bạch Đằng Shipyard",
  "Núi Bà Mining",
  "Thăng Long Software",
  "Biển Đông Seafood",
  "Lâm Viên Hotels",
];

const COUNTERPARTIES = [
  "FinanceOne",
  "CapitalBridge",
  "Hải Âu Fund",
  "Delta Credit",
  "Pacific Lease",
  "Nội Bài Holdings",
];

function mulberry(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, arr: readonly T[]): T {
  return arr[Math.floor(rng() * arr.length)]!;
}

function amt(rng: () => number, min: number, max: number) {
  return Math.round(min + rng() * (max - min));
}

function year(rng: () => number) {
  return pick(rng, [4, 5, 6, 7]);
}

function trap(
  rng: () => number,
  motiveA: string,
  motiveB: string,
  herring: string,
  email: string,
) {
  const d = amt(rng, 3, 27);
  return stripQcFromStem(
    `Tờ trình của giám đốc tài chính gửi ủy ban kiểm toán cho rằng cách xử lý hiện tại phù hợp với nhu cầu của người sử dụng vì ${motiveA}. Tờ trình cũng nêu rằng ${motiveB} là một lý do để giữ nguyên cách ghi nhận hoặc trình bày. Chi tiết gây nhiễu: ${herring} Ban quản trị viện dẫn chi tiết này như một “tiền lệ” hoặc “bằng chứng cho chính sách nhất quán”. Email nội bộ ngày ${String(d).padStart(2, "0")}/12 viết: “${email}”`,
  );
}

type Built = {
  title: string;
  company: string;
  difficulty: string;
  primary: string;
  keywords: string[];
  scenario: string;
  model: string;
};

function buildFor(qc: QcDef, rng: () => number): Built {
  const company = pick(rng, COMPANIES);
  const other = pick(rng, COUNTERPARTIES);
  const y = year(rng);
  const y1 = `20X${y}`;
  const y2 = `20X${Math.min(9, y + 1)}`;
  const y0 = `20X${Math.max(0, y - 1)}`;
  const alt = rng() > 0.5;

  switch (qc.key) {
    case "relevance": {
      if (alt) {
        const share = amt(rng, 18, 34);
        const patent = pick(rng, ["hoạt chất độc quyền", "bản quyền phần mềm lõi", "nhãn hiệu xuất khẩu"]);
        return {
          title: `${company}: ${patent} hết hạn ngay sau khóa sổ`,
          company,
          difficulty: "Khó",
          primary: "Thích hợp — không bắt buộc ghi nhận (Relevance)",
          keywords: ["thích hợp", "relevant", "predictive", "thuyết minh", "hết hạn", "không ghi nhận"],
          scenario: `${company} khóa sổ ${y1} ngày 31 tháng 12. ${patent.charAt(0).toUpperCase() + patent.slice(1)} tạo ra ${share}% doanh thu và biên lãi gộp cao hơn hẳn phần còn lại sẽ hết hạn pháp lý ngày 28 tháng 2 năm ${y2}. Gia hạn đã bị từ chối bằng văn bản (written notice) ngày 12 tháng 12 năm ${y1}; sản phẩm thay thế chỉ ra mắt quý 4 năm ${y2}. Các số liệu ${y1} đã được ghi nhận đúng và giấy phép vẫn còn hiệu lực pháp lý tại ngày báo cáo. Ban quản trị không thuyết minh sự kiện, lập luận rằng hết hạn xảy ra năm sau nên không thuộc báo cáo tài chính ${y1} và chưa có tài sản nào phải ghi giảm vì giấy phép vẫn còn hiệu lực tại 31 tháng 12.${trap(rng, "Trình bày trung thực (Faithful representation) vì “số đã ghi không sai”", "Kịp thời (Timeliness) vì báo cáo vẫn phát hành đúng hạn tháng 3", `ngày 8 tháng 1 năm ${y2} một khách hàng nhỏ đặt thêm lô 0,3 triệu CU liên quan sản phẩm đó;`, "Đừng note. Recognition chưa xảy ra thì relevance chưa có.")}`,
          model: `Đặc tính quyết định: Thích hợp (Relevance) — ${qc.cf}. Văn bản từ chối gia hạn đã có trước ngày khóa sổ nên thông tin có predictive value với dòng tiền ${y2}. Recognition không phải điều kiện của relevance. Không sửa số ${y1} đã đúng, nhưng phải thuyết minh rủi ro tập trung và mất độc quyền. Im lặng = obscuring.`,
        };
      }
      const zone = pick(rng, ["quy hoạch cảng", "hành lang thoát lũ", "khu công nghiệp thu hồi"]);
      const book = amt(rng, 40, 90);
      return {
        title: `${company}: nhà máy nằm trong ${zone}`,
        company,
        difficulty: "Khó",
        primary: "Thích hợp — không bắt buộc ghi nhận (Relevance)",
        keywords: ["thích hợp", "relevant", "predictive", "thuyết minh", "quy hoạch", "nhà máy"],
        scenario: `Nhà máy chính của ${company} có giá trị ghi sổ (carrying amount) ${book} triệu CU, bằng khoảng 28% tổng tài sản. Ngày 8 tháng 12 năm ${y1} UBND tỉnh công bố phương án ${zone} bao phủ toàn bộ khu đất; bồi thường dự kiến chỉ bằng một phần giá trị ghi sổ và di dời không xong trước cuối ${y2}. Tại 31 tháng 12 giấy chứng nhận quyền sử dụng đất vẫn còn hiệu lực, nên ban quản trị không ghi giảm giá trị và không thuyết minh. Tờ trình nói đây là sự kiện chính sách năm sau, đưa vào báo cáo ${y1} sẽ làm người sử dụng nhầm kỳ.${trap(rng, "Có thể so sánh (Comparability) vì thuyết minh sẽ “trộn kỳ”", "Không sai sót (Free from error) vì số 31/12 khớp sổ đất", `một nhà kho phụ trị giá 1,2 triệu CU nằm ngoài vùng quy hoạch, không bị ảnh hưởng;`, "Im lặng. Guidance capex chưa đổi.")}`,
        model: `Đặc tính quyết định: Thích hợp (Relevance) — ${qc.cf}. Quyết định quy hoạch đã công bố trước khóa sổ, có khả năng tạo khác biệt cho đánh giá dòng tiền và rủi ro. Không bắt buộc điều chỉnh số nếu chưa có impairment trigger rõ, nhưng phải thuyết minh. Im lặng làm user tưởng năng lực sản xuất còn nguyên.`,
      };
    }
    case "materiality": {
      const bribe = amt(rng, 80, 240);
      const role = pick(rng, ["giám đốc vùng", "trưởng phòng mua hàng", "phó tổng phụ trách xuất khẩu"]);
      return {
        title: `${company}: hối lộ nhỏ của ${role}`,
        company,
        difficulty: "Khó",
        primary: "Trọng yếu — định tính và theo ngữ cảnh (Materiality)",
        keywords: ["trọng yếu", "material", "bản chất", "hối lộ", "nature", "cơ quan quản lý"],
        scenario: `Kiểm toán nội bộ ${company} phát hiện ${role} chi ${bribe} nghìn CU cho cán bộ hải quan để “làm nhanh tờ khai” trong năm ${y1}. Số tiền bằng 0,03% doanh thu và 0,4% lợi nhuận, đã được hoàn trả từ lương người đó. Cơ quan điều tra hình sự đã thụ lý; luật sư chưa ước tính tiền phạt hay ảnh hưởng giấy phép xuất khẩu. Ban quản trị bỏ toàn bộ vụ việc khỏi báo cáo tài chính và báo cáo quản trị vì “dưới ngưỡng 1% nên không trọng yếu, đã thu hồi đủ, phạt chưa chắc xảy ra.”${trap(rng, "Dễ hiểu (Understandability) vì note sẽ làm cổ đông lẻ rối", "Có thể so sánh (Comparability) vì peer không thuyết minh thất thoát dưới 0,1% doanh thu", `công ty có khoản hao hụt vận hành 210 nghìn CU do vỡ chuỗi lạnh, đã ghi vào giá vốn; ban quản trị gộp số hối lộ vào cùng dòng “hao hụt”;`, "Ngưỡng 1%. Đừng viết fraud.")}`,
        model: `Đặc tính quyết định: Trọng yếu theo bản chất — ${qc.cf}. Hối lộ, điều tra hình sự, rủi ro giấy phép: nature có thể ảnh hưởng quyết định dù magnitude nhỏ. Omitting nằm trong định nghĩa materiality. Hoàn trả không xóa hiện tượng đã xảy ra. Ngưỡng 1% máy móc là sai.`,
      };
    }
    case "faithful representation": {
      const rec = amt(rng, 15, 40);
      const haircut = amt(rng, 4, 9);
      return {
        title: `${company}: bán nợ phải thu hay vay có truy đòi?`,
        company,
        difficulty: "Khó",
        primary: "Trình bày trung thực — bản chất hơn hình thức",
        keywords: ["trung thực", "faithful", "bản chất", "truy đòi", "factoring", "không bán"],
        scenario: `Ngày 27 tháng 12 năm ${y1} ${company} “bán” danh mục phải thu ${rec} triệu CU cho ${other}, nhận tiền mặt bằng mệnh giá trừ ${haircut}%. Hợp đồng mang tiêu đề “Hợp đồng mua bán khoản phải thu” (Deed of Assignment) và chuyển quyền đòi nợ pháp lý (legal title). ${company} cam kết mua lại mọi khoản quá hạn trên 60 ngày, vẫn chịu rủi ro tín dụng và vẫn thu hộ. ${other} không được bán tiếp danh mục. Ban quản trị ghi doanh thu tài chính / lãi chuyển nhượng, xóa phải thu và không ghi nợ phải trả tài chính, vì hình thức pháp lý là bán hoàn tất trước ngày kết thúc năm.${trap(rng, "Thích hợp (Relevance) vì dòng tiền có confirmatory value với thanh khoản", "Có thể so sánh (Comparability) vì ba đối thủ cũng hạch toán factoring như bán", `một lô phải thu khác 1,1 triệu CU được bán không truy đòi, kiểm soát thật sự đã chuyển ngày 15 tháng 12;`, "Legal title đã chuyển. Ghi bán.")}`,
        model: `Đặc tính quyết định: Trình bày trung thực (substance over form) — ${qc.cf}. Quyền và rủi ro cho thấy đây là khoản vay có đảm bảo bằng phải thu, không phải bán. Xử lý đúng: giữ phải thu, ghi nợ tài chính số tiền nhận, phân bổ phí ${haircut}%. Nhãn “mua bán” không đổi hiện tượng.`,
      };
    }
    case "completeness": {
      const dbo = amt(rng, 70, 140);
      const rate = (3.8 + rng() * 2).toFixed(1);
      return {
        title: `${company}: quỹ hưu trí chỉ một dòng số`,
        company,
        difficulty: "Trung bình–Khó",
        primary: "Đầy đủ (Completeness)",
        keywords: ["đầy đủ", "complete", "hưu trí", "giả định", "độ nhạy", "thuyết minh"],
        scenario: `${company} ghi nghĩa vụ phúc lợi xác định ${dbo} triệu CU tại 31 tháng 12 năm ${y1}, tính bằng giá trị hiện tại (present value), chiết khấu ${rate}%, tuổi thọ và tăng lương do một tư vấn actuarial. Đây là khoản nợ dài hạn lớn thứ hai. Trên Bảng cân đối kế toán và thuyết minh chỉ một dòng “Nghĩa vụ hưu trí ${dbo} triệu CU.” Không nêu kỳ vọng tăng lương, bảng độ nhạy lãi suất, kỳ hạn bình quân, hay việc tư vấn đã cảnh báo nếu tuổi thọ tăng 1 năm thì nghĩa vụ tăng khoảng 11%. Ban quản trị cho rằng đã ghi nhận đủ số nên khoản mục hoàn chỉnh.${trap(rng, "Dễ hiểu (Understandability) vì bảng độ nhạy làm user chết đuối", "Có thể kiểm chứng (Verifiability) vì hai actuarial ra cùng một điểm", `thuyết minh 2 chỉ viết “dự phòng được ghi khi có nghĩa vụ hiện tại”;`, "Đã book đủ số. Note là cost constraint.")}`,
        model: `Đặc tính quyết định: Đầy đủ (Completeness) — ${qc.cf}. Ghi nhận số không thay mô tả: bản chất hiện giá, giả định then chốt, độ nhạy. User không tái lập được hiện tượng từ một dòng. Verifiability bị kéo theo, nhưng thiếu thông tin cần thiết trước hết là không complete.`,
      };
    }
    case "neutrality": {
      const mine = amt(rng, 25, 55);
      const bonus = amt(rng, 48, 70);
      return {
        title: `${company}: hoãn giảm giá mỏ tới sau năm thưởng`,
        company,
        difficulty: "Khó",
        primary: "Trung lập — thiên lệch có chủ đích (Neutrality)",
        keywords: ["trung lập", "neutral", "hoãn", "giảm giá", "thưởng", "bias"],
        scenario: `Kế hoạch thưởng ${company} chi trả nếu EBITDA năm ${y1} vượt ${bonus} triệu CU. Một mỏ/cửa hàng có giá trị ghi sổ ${mine} triệu CU: kiểm định độc lập tháng 11 cho thấy trữ lượng / lưu lượng khách thấp hơn kế hoạch, impairment khoảng ${Math.round(mine * 0.4)} triệu CU là ước tính trung lập. Email CFO ngày 18 tháng 12: “Để sang ${y2}; năm nay đừng phá bonus.” Ban quản trị không ghi giảm, thuyết minh “đang theo dõi,” và mô tả ước tính là không trọng yếu. Tháng 1 năm ${y2} cùng bộ số liệu được dùng để ghi giảm ngay sau khi trả thưởng.${trap(rng, "Thận trọng (Prudence) vì “đừng overstate impairment khi chưa chắc”", "Trọng yếu (Materiality) vì khoản giảm dưới 1% tổng tài sản", `một máy photocopy 40 nghìn CU đã được ghi giảm đúng trong tháng 11; ban quản trị gọi đó là “cùng chính sách impairment”;`, "Giữ EBITDA. Nhả năm sau.")}`,
        model: `Đặc tính quyết định: Trung lập (Neutrality) — ${qc.cf}. Có bằng chứng impairment trước khóa sổ; hoãn vì thưởng là thiên lệch có chủ đích, không phải thận trọng. Cũng không free from error vì quy trình ước tính bị bỏ qua. Khoản ${Math.round(mine * 0.4)} triệu CU qualitative material với bonus.`,
      };
    }
    case "free from error": {
      const life = amt(rng, 12, 20);
      const cost = amt(rng, 30, 80);
      return {
        title: `${company}: thời gian hữu ích nhà xưởng sau này rút ngắn`,
        company,
        difficulty: "Khó",
        primary: "Không sai sót — kết quả khác không phải error",
        keywords: ["không sai sót", "free from error", "ước tính", "IAS 8", "hữu ích", "thay đổi ước tính"],
        scenario: `Khi đưa nhà xưởng ${cost} triệu CU vào sử dụng năm ${y0}, ${company} ước tính thời gian hữu ích ${life} năm dựa trên thông lệ ngành, bảo trì và kế hoạch sản phẩm lúc đó. Thuyết minh nêu đây là ước tính và giải thích phương pháp. Năm ${y1} công nghệ mới làm dây chuyền thế hệ cũ lạc hậu sớm; ban kỹ thuật đề xuất còn lại 4 năm. Một cổ đông đòi điều chỉnh hồi tố báo cáo tài chính các năm trước như sai sót vì “số khấu hao từ đầu đã sai.” Ban quản trị đang phân vân giữa restatement và thay đổi ước tính triển vọng (change in estimate).${trap(rng, "Thích hợp (Relevance) vì user các năm trước đã quyết định trên số “sai”", "Có thể so sánh (Comparability) vì để ${y1} hấp thụ sẽ làm các năm méo", `cùng năm ${y0} công ty ước tỷ lệ phế phẩm 2,0% rồi thực tế 1,97%; cổ đông gộp hai ước tính để nói “mô hình có hệ thống sai”;`, "Restate. Faithful representation đòi hỏi số đúng tuyệt đối.")}`,
        model: `Đặc tính quyết định: Không sai sót (Free from error) — ${qc.cf}. Faithful representation không nghĩa chính xác tuyệt đối. Ước tính lúc ghi nhận dùng bằng chứng và quy trình phù hợp thì không phải error khi thực tế sau này khác (IAS 8 — thay đổi ước tính). Error chỉ khi dùng dữ liệu sai, bỏ qua thông tin đã có, hoặc thiên lệch.`,
      };
    }
    case "comparability": {
      const lift = amt(rng, 10, 24);
      return {
        title: `${company}: chuyển PPE sang đánh giá lại đúng một năm`,
        company,
        difficulty: "Khó",
        primary: "Có thể so sánh — nhất quán là phương tiện",
        keywords: ["so sánh", "comparab", "nhất quán", "đánh giá lại", "PPE", "covenant"],
        scenario: `${company} đo lường nhà xưởng theo mô hình giá gốc suốt tám năm. Năm ${y1} ban quản trị chuyển sang mô hình đánh giá lại, tăng tài sản và vốn ${lift} triệu CU, vừa đủ để thỏa covenant đòn bẩy. Thuyết minh nói thay đổi “phản ánh tốt hơn giá trị hiện tại.” Biên bản nội bộ đã ghi sẽ trở lại giá gốc năm ${y2} “khi covenant đỡ căng.” Số so sánh ${y0} không được trình bày lại theo cùng cơ sở. Ban quản trị cho rằng IAS 16 cho phép chọn mô hình mỗi kỳ.${trap(rng, "Dễ hiểu (Understandability) vì một cột số gọn hơn hai cơ sở", "Ràng buộc chi phí (Cost constraint) vì restatement tốn 0,5 triệu CU", `cùng năm công ty đổi tỷ lệ phế phẩm 2,0% lên 2,1% (ảnh hưởng 0,2 triệu CU) và gộp hai thay đổi dưới tiêu đề “cập nhật ước tính”;`, "Một năm revaluation. IAS 16 cho chọn.")}`,
        model: `Đặc tính quyết định: Có thể so sánh (Comparability) — ${qc.cf}. Consistency là phương tiện. Đổi một năm, có động cơ covenant, không restatement comparatives, đã tính sẵn sẽ đổi lại — làm like things trông khác theo thời gian. Enhancing không cho phép nhảy mô hình để đạt số. Faithful representation cũng bị kéo.`,
      };
    }
    case "verifiability": {
      const bio = amt(rng, 35, 95);
      const low = Math.round(bio * 0.4);
      const high = Math.round(bio * 1.5);
      const asset = pick(rng, ["ao tôm", "rừng cao su", "đàn bò sữa", "vườn sầu riêng"]);
      return {
        title: `${company}: ${asset} đo bằng file không tài liệu`,
        company,
        difficulty: "Khó",
        primary: "Có thể kiểm chứng của ước tính không tài liệu",
        keywords: ["kiểm chứng", "verif", "giả định", "file", "khoảng", "sinh học"],
        scenario: `${company} đo ${asset} tại giá trị hợp lý ${bio} triệu CU, chiếm khoảng 22% tài sản. Số liệu từ file Excel trên máy một kỹ sư, gồm macro không chú thích và hệ số “kinh nghiệm” (experience adjustment) cộng 15% sản lượng. Thuyết minh chỉ nêu số và lãi suất chiết khấu. Hai người khác trong phòng tài chính không tái lập được số cuối năm từ cùng dữ liệu thu hoạch. Tư vấn độc lập ra khoảng ${low}–${high} triệu CU. Ban quản trị từ chối công bố file và khoảng vì “ước tính không bao giờ chính xác” và giả định là bí mật thương mại.${trap(rng, "Chỉ thích hợp (Relevance) vì ${bio} triệu CU là số dùng cho fundraising tháng 11", "Kịp thời (Timeliness) vì viết bảng độ nhạy sẽ lùi ngày duyệt", `một khoản nắm giữ niêm yết 3 triệu CU đo theo giá đóng cửa, thuyết minh đầy đủ Cấp 1;`, "Ước tính không cần verifiable. Đừng public macro.")}`,
        model: `Đặc tính quyết định: Có thể kiểm chứng (Verifiability) — ${qc.cf}. Ước tính vẫn cần verifiable: kiểm tra đầu vào và tính lại (indirect). Macro không tài liệu + hệ số không mô tả → thất bại. Công bố giả định, phương pháp và khoảng (CF.2.32), không phải một điểm im lặng.`,
      };
    }
    case "timeliness": {
      const deal = amt(rng, 80, 180);
      return {
        title: `${company}: giữ BCTC để khớp đợt phát hành`,
        company,
        difficulty: "Trung bình",
        primary: "Kịp thời (Timeliness)",
        keywords: ["kịp thời", "timely", "trễ", "phát hành", "enhancing", "delay"],
        scenario: `Ngày khóa sổ ${company} là 31 tháng 12 năm ${y1}. Bộ báo cáo tài chính IFRS đã hoàn tất từ cuối tháng 2 năm ${y2} nhưng hội đồng chỉ duyệt phát hành (authorised for issue) ngày 15 tháng 8 năm ${y2}, cố ý chờ sau đợt phát hành riêng lẻ ${deal} triệu CU tháng 6. Email chủ tịch: “Đừng cho nhà đầu tư thấy số cũ trước khi đóng deal.” Hai nhà đầu tư mua cổ phần tháng 6 sau đó viết rằng nếu có báo cáo ${y1} họ đã định giá khác. Đối thủ cùng ngành công bố tháng 3.${trap(rng, "Đầy đủ (Completeness) vì “chúng tôi giữ đến khi thuyết minh hoàn hảo”", "Trình bày trung thực (Faithful representation) vì không phát hành số dở", `một sai sót cộng tiền mặt 0,15 triệu CU tháng 2 đã sửa trước khi khóa nội bộ ngày 28 tháng 2;`, "Delay để chất lượng. Thực ra chờ deal.")}`,
        model: `Đặc tính quyết định: Kịp thời (Timeliness) — ${qc.cf}. Enhancing, không phải nền tảng. Giữ thông tin đã sẵn sàng để phục vụ một giao dịch làm mất khả năng ảnh hưởng quyết định của đúng những user cần nó. Relevance tiềm năng bị làm yếu. Timeliness không cứu được thông tin sai (CF.2.37), nhưng ở đây số đã xong — vấn đề là lúc đến tay.`,
      };
    }
    case "understandability": {
      const crypto = amt(rng, 120, 400);
      const pct = amt(rng, 6, 13);
      return {
        title: `${company}: nắm giữ crypto bị giấu sau một dòng`,
        company,
        difficulty: "Khó",
        primary: "Dễ hiểu không cho phép lược bỏ thông tin",
        keywords: ["dễ hiểu", "understand", "crypto", "không được loại", "complete", "phức tạp"],
        scenario: `${company} nắm ${crypto} triệu CU tài sản mã hóa và vị thế staking, bằng ${pct}% tổng tài sản, đo lường qua mô hình nội bộ với nhiều đầu vào không quan sát được (unobservable inputs). Giám đốc tài chính chỉ đạo chỉ còn một dòng “tài sản tài chính khác,” không mô tả loại token, khóa staking, rủi ro khóa sổ hay độ nhạy. Bản ghi nhớ: người sử dụng sẽ không hiểu, đưa vào làm báo cáo rối, understandability đòi hỏi báo cáo phải đơn giản. Không còn bảng độ nhạy hay mô tả rủi ro trong bộ được duyệt.${trap(rng, "Ràng buộc chi phí (Cost constraint) vì mười trang Level 3 tốn 1,8 triệu CU tư vấn", "Có thể so sánh (Comparability) vì hai peer cũng gộp crypto vào “other”", `danh mục trái phiếu chính phủ 2,1 tỷ CU được thuyết minh rất chi tiết;`, "User không đọc được fourteen inputs. Đừng cho họ đọc.")}`,
        model: `Đặc tính quyết định: Dễ hiểu (Understandability) — CF.2.35 cấm loại thông tin phức tạp nhưng cần thiết. Loại ra làm incomplete và có thể gây hiểu nhầm. User được giả định có hiểu biết hợp lý. Cách đúng: phân loại, mô tả súc tích, độ nhạy — không xóa sổ. Completeness cũng bị phá.`,
      };
    }
    case "cost constraint": {
      const cgus = amt(rng, 12, 28);
      const miss = amt(rng, 9, 18);
      const cost = (0.6 + rng()).toFixed(1);
      return {
        title: `${company}: bỏ kiểm tra giảm giá ${cgus} CGU vì tốn kém`,
        company,
        difficulty: "Khó",
        primary: "Ràng buộc chi phí bị từng đơn vị áp dụng sai",
        keywords: ["chi phí", "cost constraint", "IASB", "giảm giá", "CGU", "không miễn trừ"],
        scenario: `${company} có ${cgus} đơn vị tạo tiền. Năm ${y1} ban quản trị hủy kiểm tra giảm giá IAS 36, lấy số ${y0} cuốn theo, viện dẫn ràng buộc chi phí của Khung khái niệm: thuê chuyên gia sẽ tốn ${cost} triệu CU, người sử dụng sẽ không trả thêm cho cổ phiếu chỉ vì ta đếm CGU. Một CGU mẫu do kiểm toán chọn cho thấy giá trị thu hồi thấp hơn ghi sổ ${miss}%. Không điều chỉnh các CGU còn lại, không thuyết minh hạn chế. Tờ trình: “Framework cho phép cân cost/benefit ở cấp đơn vị.”${trap(rng, "Kịp thời (Timeliness) vì đếm hết sẽ lùi phát hành sang tháng 4", "Thận trọng (Prudence) vì “không đếm thì không overstate impairment”", `phụ tùng nhà xưởng 1,3 triệu CU (2% tài sản) được kiểm kê 100% và thuyết minh rất chi tiết;`, "Mẫu lệch kệ. Covenant sẽ vỡ nếu ngoại suy.")}`,
        model: `Đặc tính quyết định: Ràng buộc chi phí bị áp dụng sai — ${qc.cf}. IASB cân cost/benefit khi viết chuẩn mực; từng entity không tự miễn IAS 36. Mẫu đã lệch ${miss}% → số không còn faithful / free from error. Phải kiểm tra hoặc phương pháp thay thế đáng tin, và thuyết minh limitation.`,
      };
    }
    case "trade-off": {
      const mid = amt(rng, 50, 140);
      const low = Math.round(mid * 0.2);
      const high = Math.round(mid * 2.4);
      return {
        title: `${company}: nền tảng tự viết ghi nhận ở điểm giữa khoảng rộng`,
        company,
        difficulty: "Rất khó",
        primary: "Đánh đổi thích hợp và trình bày trung thực",
        keywords: ["đánh đổi", "trade-off", "uncertainty", "nền tảng", "không ghi nhận", "2.22"],
        scenario: `${company} tự phát triển nền tảng điều hành hơn bảy năm. Năm ${y1} giám đốc tài chính muốn người sử dụng thấy “tài sản thật” và ghi nhận tài sản vô hình nội bộ ${mid} triệu CU, đối ứng lãi. ${mid} là điểm giữa khoảng ${low}–${high} triệu CU của tư vấn, phụ thuộc giữ chân khách và tỷ lệ gia hạn. Không có thị trường hoạt động. IAS 38 hạn chế ghi nhận chi phí nội bộ giai đoạn nghiên cứu. Giám đốc tài chính nói Khung khái niệm ưu tiên thông tin thích hợp nhất nên override chuẩn mực. Không mô tả khoảng hay quy trình.${trap(rng, "Chỉ thích hợp (Relevance) — user muốn thấy platform", "Thận trọng (Prudence) theo một thành viên hội đồng muốn không ghi gì cả", `một nhãn hàng mua lại năm ${y0} giá gốc 12 triệu CU đang khấu hao đúng IAS 38; ban quản trị muốn “đồng bộ” bằng cách đánh giá lại nhãn đó lên ${Math.round(mid * 0.2)} triệu CU;`, "Framework thắng IAS 38. Book midpoint.")}`,
        model: `Đặc tính quyết định: Relevance và Faithful representation áp dụng đồng thời — ${qc.cf}. Thông tin về nền tảng thích hợp nhưng measurement uncertainty quá cao nên không sufficiently faithful. Framework không override IAS 38. Kênh đúng: thuyết minh giả định và khoảng, không đưa ${mid} triệu CU vào lãi lỗ.`,
      };
    }
    case "hierarchy": {
      const err = amt(rng, 2, 7);
      const top = amt(rng, 9, 20);
      return {
        title: `${company}: ba khoản chưa xử lý, liệt kê mọi đặc tính`,
        company,
        difficulty: "Rất khó",
        primary: "Thứ tự ưu tiên: nền tảng rồi nâng cao",
        keywords: ["thứ tự", "hierarchy", "nền tảng", "nâng cao", "quyết định", "trung lập"],
        scenario: `${company} khóa sổ ${y1} với ba khoản cùng chiều. (i) Lỗi công thức khấu hao đếm trùng ${err} triệu CU trong tháng 12; đã phát hiện khi kiểm toán và đảo trước khi duyệt phát hành. (ii) Hội đồng đã hứa công khai phân tích căng thẳng nước/năng lượng trong báo cáo ${y1}; mô hình chưa xong, ban quản trị muốn phát hành đúng hạn mà không có phân tích. (iii) Đối thủ niêm yết cắt doanh thu theo mốc lạ; giám đốc thương mại muốn theo cùng mốc để “so sánh được,” dù hợp đồng ${company} chuyển giao kiểm soát khác thời điểm. Tổ kỹ thuật viết mọi đặc tính định tính cạnh mọi khoản và không chốt đặc tính nào quyết định. Có thêm ý kiến muốn ghi mút trên khoảng tài sản sinh học ${top} triệu CU để giữ covenant. Tờ trình đề xuất quy tắc bỏ túi: luôn chọn trọng yếu nếu trên 1% tài sản, luôn prudence nếu có covenant, luôn comparability nếu có peer, hết giờ thì ràng buộc chi phí thắng.${trap(rng, "Luôn là trọng yếu", "Ràng buộc chi phí luôn thắng", `cùng buổi còn hóa đơn văn phòng phẩm 11 nghìn CU ghi nhầm kỳ, đã sửa trong 10 phút, được gắn đủ bảy đặc tính “cho nhất quán quy trình”;`, "Pick comparability for revenue, prudence for bio, cost for climate. Ship.")}`,
        model: `Đặc tính quyết định: xếp tầng QC — ${qc.cf}. (i) Không sai sót — đã sửa trước ban hành. (ii) Relevance + completeness của thông tin đã hứa, không phải timeliness. (iii) Trình bày trung thực thắng comparability với đối thủ (CF.2.37). Mút trên vì covenant: trung lập. Đừng liệt kê hết QC; chỉ ra QC quyết định từng mục.`,
      };
    }
    default:
      return {
        title: `${company}: bản chất khác hình thức pháp lý`,
        company,
        difficulty: "Khó",
        primary: qc.label,
        keywords: ["trung thực", "faithful", "bản chất", "hình thức"],
        scenario: `${company} đang lập báo cáo tài chính năm ${y1}. Ban quản trị muốn ghi nhận một giao dịch theo đúng tiêu đề hợp đồng với ${other}, dù quyền và nghĩa vụ kinh tế khác hẳn hình thức pháp lý. Không có thuyết minh về quyền kiểm soát còn lại sau ngày khóa sổ.${trap(rng, "Thích hợp (Relevance) vì dòng tiền có confirmatory value", "Có thể so sánh (Comparability) vì peer hạch toán theo nhãn hợp đồng", `một giao dịch nhỏ 0,4 triệu CU cùng đối tác đã chuyển giao kiểm soát thật sự ngày 10 tháng 12;`, "Legal form. Book the heading.")}`,
        model: `Đặc tính quyết định: ${qc.label} — ${qc.cf}. ${qc.hint}`,
      };
  }
}

export function generateLocalIssue(opts: {
  id: number;
  seed: number;
  excludeKey?: string;
  qc?: QcDef;
}): Issue {
  const rng = mulberry(opts.seed);
  const qc = opts.qc ?? pickRandomQc(opts.excludeKey);
  const built = buildFor(qc, rng);
  const primary = built.primary;
  const yMatch = built.scenario.match(/20X[0-9]/);
  const y1 = yMatch?.[0] ?? "20X6";
  const other = pick(rng, COUNTERPARTIES);
  const scenario = thickenStem(rng, built.scenario, built.company, y1, other);
  const issue: Issue = {
    id: opts.id,
    title: stripQcFromStem(built.title),
    company: built.company,
    difficulty: built.difficulty,
    primary,
    primaryKey: qc.key,
    cf: qc.cf,
    distractors: fourDistractors(primary, rng, qc.key),
    keywords: built.keywords,
    scenario,
    model: built.model,
    generated: true,
  };
  issue.explain = resolveExplain(issue);
  return issue;
}

