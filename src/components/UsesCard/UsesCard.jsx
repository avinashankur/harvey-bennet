const UsesCard = ({ title, desc }) => {
  return (
    <div className="mb-16">
      <h1 className="font-bold">{title}</h1>
      <p className="clr_secondary leading-6 mt-3 text-sm" >{desc}</p>
    </div>
  );
};

export default UsesCard;
