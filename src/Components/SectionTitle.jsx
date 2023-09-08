

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className="w-4/12 mx-auto my-8 text-center text-white">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h3 className="text-3xl border-y-4 py-4 uppercase border-slate-400">{heading}</h3>
    </div>
  );
};

export default SectionTitle;