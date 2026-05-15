export const FeedCard = ({ feed }) => {
    const { firstName, lastName, about, photoUrl, Skills, age} = feed;
    return (
        <div className="shadowcard bg-base-500 w-96 shadow-lg">
            <figure>
                <img
                src={photoUrl ? photoUrl : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                alt="Shoes" />
            </figure>
            <div className="shadowcard-body gap-4 flex flex-col p-4">
                <h2 className="shadowcard-title">{`${firstName} ${lastName}`}</h2>
                <p>{about ?? ''}</p>
                <p>{`Skills: ${Skills?.join(', ') ?? ''}`}</p>
                <p>{`Age: ${age ?? ''}`}</p>
                <div className="shadowcard-actions flex justify-center gap-4">
                <button className="shadowbtn shadowbtn-primary">Ignore</button>
                <button className="shadowbtn shadowbtn-primary">Interested</button>
                </div>
            </div>
        </div>
    );
};
