function ResumeCard() {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 hover:bg-slate-300 hover:bg-opacity-5 md:p-4 md:rounded-lg">
      <div className=" md:flex-[1_0_5rem] text-muted text-xs uppercase leading-6 ">
        Sept 2019 &mdash; <br className="hidden md:inline"></br>Oct 2023
      </div>
      <div>
        <div>Title</div>
        <div className="">
          Description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Rhoncus dolor purus non enim praesent elementum facilisis. Lacus sed
          viverra tellus in hac. Vulputate enim nulla aliquet porttitor.
        </div>
        <div>Technologies used</div>
      </div>
    </div>
  );
}

export default ResumeCard;
