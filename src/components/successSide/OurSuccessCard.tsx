
interface Success {
    img: string;
    name: string;
    exam: string;
}

const OurSuccessCard = ({ img, name, exam }: Success) => {
    return (
        <div className="flex items-center justify-center gap-[20px] px-[10px] py-[20px] border rounded-[16px] md:px-[20px] md:min-w-[480px] min-w-[350px] md:gap-[48px] shadow-md hover:shadow-lg transition-shadow">
            <figure className="size-[120px] overflow-hidden shrink-0 md:size-[200px]">
                <img className="size-full object-contain" src={img} alt="" />
            </figure>
            <div className="space-y-[26px]">
                <div className="space-y-[6px]">
                    <p className="text-[16px]">{name}</p>
                    <p>{exam}</p>
                </div>
            </div>
        </div>
    )
}

export default OurSuccessCard;