#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from docx import Document
from docx.shared import Pt, Cm, RGBColor, Twips
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

CASES = [
(1, "Sale or secured borrowing?", "BuildTech Co.",
"""BuildTech Co. is preparing its 20X6 financial statements. On 28 December 20X6 it transferred a production line with a carrying amount of CU8 million to FinanceCo and received CU10 million in cash. The contract is headed “Deed of Sale” and states that legal title passes immediately. BuildTech nevertheless continues to operate the machinery in its own factory, remains responsible for maintenance and insurance, and has a contractual obligation to repurchase the same assets on 28 December 20X8 for CU11.45 million. FinanceCo has no right to use, relocate or sell the machinery to a third party during the two-year interval. The CU1.45 million difference equals a market rate of interest on a two-year secured loan. Management has recorded disposal proceeds of CU10 million, a gain of CU2 million and no financial liability, on the grounds that the legal form of the arrangement is a sale completed before year-end."""),

(2, "Optimistic receivables, pessimistic provisions", "SpeedTrade Co.",
"""SpeedTrade Co. is finalising its 20X6 financial statements. It holds a trade receivable of CU20 million due from a customer that entered formal restructuring in November 20X6. In the same period a competitor issued a legal claim against SpeedTrade for alleged breach of an exclusive-distribution clause; counsel estimates that if SpeedTrade loses it will pay between CU2 million and CU3 million, with a most likely outcome of CU2.4 million. Management has recognised an expected-credit-loss allowance of only 2 per cent of the receivable because, in the CFO’s words, the board is “optimistic about customer recovery.” At the same time it has booked a CU10 million provision for the lawsuit because it wishes “to be conservative and to protect next year’s result.” Independent credit analysis commissioned by the audit committee indicates expected losses on the receivable of between CU4 million and CU6 million. No range or alternative estimate is disclosed for either item."""),

(3, "The loss of a major customer", "Delta Delivery Co.",
"""Delta Delivery Co. earned revenue of CU100 million and profit of CU8 million in the year ended 31 December 20X6. On 20 December 20X6 its largest customer, which generated 28 per cent of annual revenue and a similar share of operating cash inflows, gave written notice that the delivery contract would not be renewed after 31 January 20X7. Replacement work of comparable scale cannot be mobilised before the third quarter of 20X7. The 20X6 invoices themselves have been recorded correctly and the contract remained legally in force at the reporting date. Management has included no note, no risk disclosure and no discussion of customer concentration. Its paper to the audit committee states that “the contract was still active at year-end, the loss of revenue will occur next year, and therefore the information does not belong in the 20X6 financial statements.”"""),

(4, "The one-cent earnings target", "CareHealth Services",
"""CareHealth Services has 100 million ordinary shares in issue and is closely followed by three sell-side analysts, all of whom published a 20X6 EPS forecast of CU0.24. Before the last accounting adjustment, profit for the year was CU23.4 million, producing EPS of CU0.234. On 30 December, without any new legal advice or court development, management reversed a CU600,000 accrual for legal expenses that had been supported by an external counsel letter dated 15 December. Profit increased to CU24.0 million and EPS to CU0.240. The CU600,000 amount represents 0.3 per cent of revenue and 0.2 per cent of total assets. Management’s closing paper concludes that the reversal is immaterial because both ratios are below the company’s informal 1 per cent threshold, and that no separate disclosure is required."""),

(5, "An estimate that later proves wrong", "FreshMart Co.",
"""FreshMart Co. sells consumer appliances with a two-year warranty. In preparing the 20X4 financial statements the company estimated warranty costs at CU3.0 million, using five years of claims history, current failure rates and the product mix then in the market. The estimate was described in the notes as an estimate and the method was explained. During 20X6 an unexpected defect in a component supplied by a new vendor caused actual cash payments on the 20X4 cohort to reach CU4.2 million. A shareholder has written to the board arguing that “the CU3 million figure was incorrect and the original financial statements therefore did not faithfully represent the company’s obligations.” Management is considering whether the 20X4 statements should be restated as an error or whether 20X6 should simply absorb a change in estimate."""),

(6, "A complete number with incomplete depiction", "NorthPeak Mining",
"""NorthPeak Mining recognises a decommissioning provision of CU60 million at 31 December 20X6. The figure is the present value of estimated rehabilitation cash flows of CU110 million expected in fifteen years, discounted at 4.1 per cent, and assumes that current environmental statutes will remain unchanged. The site is NorthPeak’s only producing mine and the provision is material to both liabilities and gearing covenants. On the face of the statement of financial position and in the notes the company presents a single line: “Decommissioning provision CU60 million.” There is no description of timing, undiscounted cash flows, the discount rate, sensitivity to a change in the rate or in closure date, or the possibility that forthcoming regulation would increase the scope of work. Management considers the line item complete because “the amount has been recognised in full.”"""),

(7, "A new CEO’s clean-up year", "Apex Retail Group",
"""Apex Retail Group appointed a new chief executive on 1 November 20X6. In December the company recognised a “strategic restructuring provision” of CU45 million, converting a draft profit of CU12 million into a reported loss of CU33 million. Working papers split the CU45 million as follows: CU8 million of redundancy costs for which communication to those affected had occurred before 31 December and a present obligation therefore existed; CU22 million relating to store closures on which the board will vote only in March 20X7; and CU15 million labelled internally as a “buffer for surprises so that 20X7 starts fresh.” In the January results call the CEO described 20X6 as “a transition year” and said that 20X7 guidance had been set at a level the company could “comfortably beat.” No analysis of the three components is provided in the financial statements."""),

(8, "A one-year change in the inventory formula", "Helio Electronics",
"""Helio Electronics has measured inventories at FIFO cost for twelve consecutive years. Input prices rose sharply in 20X6. Management changed to weighted-average cost for 20X6 only, reducing cost of sales by CU18 million compared with FIFO and lifting profit just above the threshold in a bank covenant. The notes state that the change “better reflects the physical flow of goods.” Warehouse scan data continue to show that the oldest batches are issued first. The finance director has already minuted an intention to revert to FIFO in 20X7 “once prices stabilise.” Comparative figures for 20X5 have not been restated and no pro forma FIFO result for 20X6 is given. Management argues that an entity is free to select an acceptable cost formula each year."""),

(9, "Statements authorised nine months late", "Harbor Ports Ltd",
"""Harbor Ports Ltd’s reporting date is 31 December 20X6. Complete IFRS financial statements were authorised for issue only on 28 September 20X7. Management attributes the delay to conversion of a new ERP system and to a prolonged dispute with the predecessor auditor. In April 20X7, while the 20X6 report was still unpublished, Harbor privately refinanced a CU200 million facility; lenders later told the board they would have priced the facility differently had they seen the overdue statements. Two listed competitors released 20X6 results in March 20X7 and were subsequently acquired at a premium. An institutional holder that sold its entire position in May 20X7 has written that the information, when it finally appeared, was no longer capable of influencing the decision already taken."""),

(10, "Too complex to disclose", "NovaBank",
"""NovaBank holds a portfolio of structured credit derivatives with a carrying amount of CU1.1 billion, equal to 9 per cent of total assets. Fair value is produced by an internal model that uses fourteen unobservable inputs. The chief financial officer has instructed the reporting team to omit any narrative description of the portfolio from the statement of financial position and from the notes, leaving only a single line “other financial assets.” The instruction memo states that “even sophisticated users will not understand the model, including it would make the financial statements unreadable, and understandability requires us to keep the report simple.” No sensitivity table, no input ranges and no description of the risks remain in the authorised set."""),

(11, "A Level 3 fair value without inputs", "Lumen Ventures",
"""Lumen Ventures measures its 22 per cent holding in an unlisted investee at fair value of CU87 million at 31 December 20X6. The amount comes from a proprietary discounted-cash-flow model maintained by an external consultant. The notes contain one sentence: “Fair value is based on a discounted cash-flow model.” No unobservable inputs, no discrete scenarios, no range and no sensitivity to revenue growth or discount rate are disclosed. Two valuation specialists engaged by the audit committee, using different but reasonable assumptions, arrived at CU41 million and CU120 million respectively. Management has refused to disclose that range on the grounds that “IFRS requires a single point estimate to be recognised and presenting a range would confuse users.”"""),

(12, "Cash presented net of an unrelated overdraft", "Orion Logistics",
"""Orion Logistics presents a single line “Cash and cash equivalents CU2 million” as the first item of current assets. Note 17, on page 64 of the annual report, reveals that the group holds CU48 million of demand deposits at Bank A and a CU46 million overdraft at Bank B. The two facilities are in different jurisdictions, the overdraft is repayable on demand, and the group has neither a legally enforceable right of set-off nor an intention to settle net. Management’s paper to the audit committee argues that the net figure of CU2 million “better shows the liquidity available to the group as a whole” and is “more understandable than two large gross amounts that largely cancel.” Covenant tests and the statement of cash flows are also prepared from the net number."""),

(13, "An internally generated brand recognised at strategic value", "Aura Cosmetics",
"""Aura Cosmetics has built a consumer brand over twenty years of advertising and product development. In 20X6 management wishes users “to see the real value of the business” and has recognised an internally generated brand asset of CU400 million, with a matching gain in profit for the year. The CU400 million is the midpoint of a marketing consultant’s range of CU150 million to CU900 million. There is no active market for the brand and no recent orderly transaction. IAS 38 would prohibit recognition of internally generated brands. The chief financial officer has told the auditors that “the Conceptual Framework prefers the most relevant information, brand value is the most relevant information about our resources, and a Framework-based treatment should override a restrictive standard.” Neither the range nor the estimation process is described in the notes."""),

(14, "Interest paid reclassified every year", "Riverbond Plc",
"""Riverbond Plc presents a statement of cash flows under IAS 7. Interest paid of approximately CU40 million a year was classified as an operating outflow in 20X4, as a financing outflow in 20X5, and again as an operating outflow in 20X6. Each year’s notes assert that the classification “better reflects the nature of the entity’s financing.” Reported operating cash flow for 20X6 is CU90 million after adding back the CU40 million of interest; under the 20X5 policy the same year’s operating cash flow would have been CU50 million. Sell-side models treat operating cash flow as the starting point for valuation. Comparatives have not been restated for the latest change. Management notes that IAS 7 permits a choice and therefore considers consistency a matter of preference rather than of useful information."""),

(15, "Going-concern doubts omitted because nothing is booked", "Cedar Pharma",
"""Cedar Pharma’s principal product, representing 70 per cent of revenue, is under a regulator’s safety review. Two independent counsel have advised the board that there is a 40 per cent probability the marketing licence will be withdrawn within twelve months of 31 December 20X6, in which case the company would enter an orderly wind-down. Inventories and specialised plant would realise substantially less than their going-concern carrying amounts. Management has prepared the 20X6 financial statements on a going-concern basis with no emphasis of matter, no note on the review and no description of the alternative outcome. The board paper states that “no present obligation has arisen, no asset is impaired if going concern is assumed, and therefore there is nothing relevant to report in these financial statements. Disclosure would panic the market and destroy enterprise value.”"""),

(16, "Related-party rent described as arm’s length", "Summit Foods",
"""Summit Foods pays CU12 million a year to lease its central warehouse from a company owned by the chair’s family. Two independent appraisals obtained by the audit committee put market rent for an equivalent facility at CU1.2 million. Summit records the full CU12 million as operating rent. The related-party note consists of one sentence: “The Group leases warehousing from a related party on arm’s-length terms.” The note does not identify the related party, does not state the amount, and does not compare the terms with the market. The family company reports the CU12 million as ordinary rental income. Management considers the sentence sufficient because “IAS 24 is a disclosure standard and the transaction has been recognised.”"""),

(17, "A write-down reversed to clear the bonus hurdle", "Polar Outdoor",
"""Polar Outdoor’s executive bonus plan pays if operating profit exceeds CU50 million. On 20 December 20X6 a year-end net-realisable-value review of seasonal inventory, supported by subsequent-order data and markdown plans, indicated a write-down of CU3.2 million and a resulting profit of CU48.1 million. On 28 December management “reassessed fashion-season demand” and reversed CU2.0 million of that write-down, lifting profit to CU50.1 million. Internal email circulating the same day reads: “We only need CU1.9 million more. The goods can always be discounted in January.” Sales of the same stock in January 20X7 realised amounts consistent with the original 20 December assessment. No mention of the reversal, the bonus plan or the January evidence appears in the financial statements."""),

(18, "Two identical ships, two opposite treatments", "BlueKeel Shipping",
"""BlueKeel Shipping took delivery of two identical container vessels in the same week, from the same lessor, on contracts with the same term, the same residual-value guarantee and the same pattern of payments. Ship A’s contract is headed “Lease” and is recognised on the statement of financial position. Ship B’s contract is headed “Capacity purchase agreement,” never uses the word lease, and does not transfer legal title; management has left Ship B off the statement of financial position and expensed the payments as they fall due. The two arrangements give BlueKeel the right to direct use of each vessel for the same period and require BlueKeel to absorb substantially the same residual-value risk. Management told the auditors that both treatments are “allowed by the documents” and that users can reconstruct comparability from forty pages of notes."""),

(19, "A policy of always taking the worst number", "Stonebridge Construction",
"""Stonebridge Construction’s audit committee adopted a written “prudence policy” in 20X6. For every uncertain asset the company must recognise the lowest amount in the reasonably possible range; for every uncertain liability it must recognise the highest amount; contingent assets are never recognised, even when inflow is assessed as virtually certain. Applying the policy, a lawsuit whose most likely outcome is CU6 million and whose reasonably possible range is CU4 million to CU9 million has been recorded at CU9 million. A contractual compensation claim that counsel describes as virtually certain of collection at CU5 million has been omitted entirely. The committee’s covering note states that the policy “implements the Framework’s concept of prudence and protects creditors,” and that asymmetry is a virtue of useful financial information."""),

(20, "A quantitatively small fraud with a large story", "Meadow Dairy",
"""Internal audit at Meadow Dairy found that a regional manager diverted CU180,000 of company cash over two years. The amount is 0.04 per cent of group revenue and 0.7 per cent of profit and has since been repaid in full. The scheme was effected by falsifying quality certificates for milk supplied under a public-school nutrition contract. A food-safety regulator has opened a file; counsel cannot yet estimate a fine. Management has omitted any reference to the matter from the 20X6 financial statements and from the governance report, arguing that the amount is quantitatively immaterial, has been corrected, and that a fine is “not probable and would be small.” No provision, no contingent-liability note and no description of the regulatory inquiry are included."""),

(21, "A DCF that nobody else can rerun", "Atlas Renewables",
"""Atlas Renewables measures a long-term power-purchase contract at fair value using a discounted-cash-flow model. The model resides on a single analyst’s laptop, contains undocumented macros, and includes an undocumented “experience adjustment” of plus 12 per cent to forecast generation volume. The notes disclose the resulting fair value and the discount rate and nothing else. When the engagement quality reviewer asked two other members of the finance team to replicate the year-end number from the same contractual inputs, both failed. Management’s response is that verifiability is unnecessary because “fair value is an estimate and estimates are never exact,” and that publishing the macros would reveal commercially sensitive assumptions."""),

(22, "Copying peers in order to be comparable", "Nimbus Software",
"""Nimbus Software sells subscriptions to a platform that it develops, hosts and controls. It sets the price, is the contracting party with the customer and is responsible for service credits. Three larger listed peers, whose contracts in substance also appear to make them principals, report revenue on a net commission basis and therefore display higher percentage margins on a smaller top line. Nimbus’s chief financial officer has proposed switching Nimbus to the same net basis “to improve comparability with the peer group and to help investors value us on the same multiple.” Legal analysis of Nimbus’s own contracts continues to conclude that Nimbus is the principal. No change in the underlying economics is alleged."""),

(23, "Two-page financial statements of a listed group", "Helix Telecom",
"""Helix Telecom is listed and operates in nineteen countries. For 20X6 it published “concise financial statements” of two pages: a highly aggregated statement of profit or loss and a statement of financial position containing seven lines. Almost all note disclosures required by IFRS have been moved to a password-protected data room described as “available on request to serious investors.” Segment information, maturity analyses, related-party detail and measurement uncertainties are therefore absent from the document filed with the regulator. Management cites the Conceptual Framework: “Classifying and presenting information clearly and concisely makes it understandable. Users drown in notes.” The group is not a small entity and has not obtained any exemption from full IFRS presentation."""),

(24, "A factory destroyed after the reporting date", "Ironclad Manufacturing",
"""Ironclad Manufacturing’s reporting date is 31 December 20X6 and the financial statements were authorised on 28 February 20X7. On 5 January 20X7 a fire destroyed the company’s only plant. The carrying amount of the plant at 31 December was CU70 million, equal to 31 per cent of total assets. Insurance coverage is disputed and recovery is uncertain. Production has stopped and alternative capacity cannot be contracted before the third quarter of 20X7. Management has neither adjusted the 20X6 amounts nor disclosed the fire. The paper to the board states that “the fire occurred after the reporting date, it is a 20X7 event, and recording or even highlighting it in the 20X6 statements would mix periods and destroy comparability.”"""),

(25, "Too costly to count 40 per cent of assets", "Granite Materials",
"""Granite Materials holds stockpiles of crushed stone at forty sites. Inventories represent 40 per cent of total assets. For 20X6 management cancelled the year-end physical count at thirty-one sites and rolled quantities forward from the 20X4 count, adjusted only for recorded production and despatch. The board paper invokes the Conceptual Framework’s cost constraint: “Counting every pile would cost CU1.2 million in surveys. Users would not pay more for our shares merely because we counted rocks.” A sample count completed at the remaining nine sites found quantities 11 per cent below the rolled-forward book. No adjustment was made for the uncounted sites and no description of the limitation appears in the notes."""),

(26, "A stale related-party price versus a very wide DCF", "Quartz Biologics",
"""Quartz Biologics holds a 12 per cent interest in an unlisted gene-therapy company. At 31 December 20X6 two candidate measurements exist. The first is the price in the last transaction, eighteen months earlier, of CU22 million; that transaction was between related founders and no subsequent arm’s-length trade has occurred. The second is a current discounted-cash-flow valuation prepared by Quartz, which produces a range of CU19 million to CU140 million depending on FDA-approval scenarios; management’s preferred point within that range is CU95 million. The chief financial officer argues that the Framework requires the most relevant information and that the eighteen-month price is stale, so CU95 million must be booked. The engagement partner argues that CU95 million cannot be a sufficiently faithful representation and that Quartz should either retain CU22 million or not remeasure at all."""),

(27, "Adjusted EBITDA on the face, IFRS profit in a note", "Pulse Fitness",
"""Pulse Fitness presents “Management operating profit (adjusted EBITDA)” in bold type as the final line of the statement of profit or loss. IFRS profit for the year is CU12 million. Adjusted EBITDA is CU41 million after adding back share-based payments, a restructuring programme, an amount described as “normalised rent” and “non-cash depreciation.” A reconciliation appears in Note 28. Every chart in the front half of the annual report, and the first page of the results announcement, uses only adjusted EBITDA. Management’s rationale is that “users find EBITDA more relevant than IFRS profit and relevance comes first.” No equally prominent presentation of IFRS profit is given on the face of the primary statements."""),

(28, "One line for every obligation that could sink the company", "HarborChem",
"""HarborChem presents a single line “Provisions CU88 million.” The underlying ledger comprises environmental remediation of CU18 million, warranties of CU7 million, onerous contracts of CU9 million, restructuring of CU5 million, and a competition-law investigation that counsel says could produce a fine anywhere between nil and CU400 million, of which management has booked CU12 million at the lower end of its own range. A further CU37 million is classified as “other,” of which CU30 million is an unlabelled indemnity given when a subsidiary was sold. No breakdown, no ranges, no sensitivity and no description of the investigation or the indemnity appear in the notes. Management considers the total material and therefore sufficient."""),

(29, "Bill-and-hold revenue that never left the warehouse", "Vertex Equipment",
"""On 29 December 20X6 Vertex Equipment recognised CU35 million of revenue on a bill-and-hold arrangement with a distributor. The goods remain in Vertex’s warehouse. The distributor has a unilateral right to return any unsold items until 30 June 20X7, has not paid, and has not entered a separate storage agreement. Vertex continues to insure the goods and to control access to the bay in which they are stored. Without this transaction Vertex would have missed published earnings guidance by 6 per cent. Management’s position is that “a legal invoice has been issued, so the sale exists; users want to see the order book converted into revenue this year; that information has confirmatory value against our guidance.”"""),

(30, "Four items and a list of every characteristic", "MultiSignal Holdings",
"""MultiSignal Holdings is closing its 20X6 report. Four unresolved items arrived on the same afternoon. First, a software implementation error double-counted cash by CU4 million for two weeks in December; the error was found during the audit and reversed before authorisation. Second, the board had publicly promised users a climate-related sensitivity analysis in the 20X6 statements; the model is unfinished and management proposes to issue the statements on time in February without that analysis. Third, a larger listed rival applies an unusual revenue cut-off; the commercial director wants MultiSignal to adopt the same cut-off “so investors can compare us,” although MultiSignal’s contracts transfer control at a different point. Fourth, a Level 3 biological asset can be supported only as a wide range; management wants the top of the range recognised in order to remain inside a gearing covenant. The technical team has written every qualitative characteristic next to every item and cannot agree which characteristic actually decides each issue."""),
]

def set_run_font(run, size=11, bold=False, italic=False, color=None):
    run.font.name = "Times New Roman"
    run._element.rPr.rFonts.set(qn("w:eastAsia"), "Times New Roman")
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    if color:
        run.font.color.rgb = RGBColor.from_string(color)

def add_page_number(paragraph):
    run = paragraph.add_run()
    fld1 = OxmlElement("w:fldChar"); fld1.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText"); instr.set(qn("xml:space"), "preserve"); instr.text = " PAGE "
    fld2 = OxmlElement("w:fldChar"); fld2.set(qn("w:fldCharType"), "end")
    run._r.append(fld1); run._r.append(instr); run._r.append(fld2)

doc = Document()
for s in doc.sections:
    s.top_margin = Cm(1.7)
    s.bottom_margin = Cm(1.7)
    s.left_margin = Cm(2.0)
    s.right_margin = Cm(2.0)

hp = doc.sections[0].header.paragraphs[0]
r = hp.add_run("ML86  ·  Qualitative characteristics of useful financial information  ·  Conceptual Framework 2018")
set_run_font(r, size=9, color="555555")

fp = doc.sections[0].footer.paragraphs[0]
fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = fp.add_run("TEST BANK — 30 issues  ·  Page ")
set_run_font(r, size=9, color="555555")
add_page_number(fp)

p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run("ML86 — TEST BANK")
set_run_font(r, size=16, bold=True)

p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run("Đặc tính của thông tin tài chính hữu ích")
set_run_font(r, size=13, bold=True)

p = doc.add_paragraph()
r = p.add_run("Required")
set_run_font(r, size=12, bold=True)

req = (
    "For each issue:\n"
    "Identify the qualitative characteristic(s) of useful financial information most directly affected.\n"
    "Evaluate management’s proposed reporting treatment.\n"
    "Recommend how the information should be reported or presented.\n"
    "Support your answers using the Conceptual Framework.\n"
    "Do not merely identify the qualitative characteristics. Apply them to the facts of the case."
)
p = doc.add_paragraph(req)
p.paragraph_format.space_after = Pt(12)
for run in p.runs:
    set_run_font(run, size=11)

for num, title, company, body in CASES:
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(10)
    p.paragraph_format.space_after = Pt(2)
    r = p.add_run(f"Issue {num}  —  {title}")
    set_run_font(r, size=12, bold=True)

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(6)
    r = p.add_run(f"{company} is preparing its 20X6 financial statements. Management is considering the following reporting issue."
                  if num not in (5, 9) else company + ".")
    # cleaner: just company line
    p.clear()
    r = p.add_run(company)
    set_run_font(r, size=11, italic=True)

    p = doc.add_paragraph(body)
    p.paragraph_format.space_after = Pt(8)
    p.paragraph_format.line_spacing = 1.15
    for run in p.runs:
        set_run_font(run, size=11)

out = "/home/workdir/artifacts/De-30-case-dac-tinh-thong-tin-tai-chinh.docx"
doc.save(out)
print("Wrote", out, "issues", len(CASES))
