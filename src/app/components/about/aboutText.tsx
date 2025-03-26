const AboutText = ({ title, paragraphs }: { title: string; paragraphs: string[] }) => {
    return (
        <div className="stg-col-6" data-appear="fade-right" data-unload="fade-left">
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            {paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "bringer-large-text" : ""}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default AboutText;
