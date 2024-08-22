import './FaqSection.css'

export const FaqSection = () => {
    const placeHolderFaqs = [
        {
            question: "Accordion Item #1",
            answer: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the first item's accordion body."
        },
        {
            question: "Accordion Item #2",
            answer: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the first item's accordion body."
        },
        {
            question: "Accordion Item #3",
            answer: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the first item's accordion body."
        },
        {
            question: "Accordion Item # 4",
            answer: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the first item's accordion body."
        },
        {
            question: "Accordion Item #5",
            answer: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the first item's accordion body."
        },
        {
            question: "Accordion Item #6",
            answer: "Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the first item's accordion body."
        }
    ]
    return (
        // used bootsrap class for faq
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="faq-header" style={{ fontFamily: "YourCustomFont" }}>Frequently Asked Questions</div>
            {placeHolderFaqs.map((faq, index) => (
                index === 0 ? <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ fontFamily: "YourCustomFont-medium" }}>
                            {faq.question}
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">{faq.answer}</div>
                    </div>
                </div> : <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ fontFamily: "YourCustomFont-medium" }}>
                            {faq.question}
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
