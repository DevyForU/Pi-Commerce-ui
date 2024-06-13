interface BrandCardProps {
    name: string;
    icon: string;
}
const BrandCard: React.FC<BrandCardProps> = ({ name, icon }) => {
    return (
        <div className="flex flex-col bg-white border border-gray-500 w-36 pt-3 pb-3 items-center rounded-xl hover:scale-105">
            <img className="mt-auto mb-auto" width={50} src={icon} alt="Icon" />
            <p className="">{name}</p>
        </div>
    )
}

export default BrandCard