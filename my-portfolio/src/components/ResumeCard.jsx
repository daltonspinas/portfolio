function ResumeCard() {
  const techs = ["Angular", 'Typescript', 'Javascript', "C#", "SQL Server", "React", ".NET"];

  return (
    <div className="flex flex-col md:flex-row md:gap-4 hover:bg-slate-300 hover:bg-opacity-5 md:p-4 md:rounded-lg group hover:opacity-100 hover:z-40">
      <div className=" md:flex-[1_0_5rem] text-muted text-xs uppercase leading-6 ">
        Sept 2019 &mdash; <br className="hidden md:inline"></br>Oct 2023
      </div>
      <div>
        <div className="group-hover:text-accent2">Position - Company</div>
        <div className="group-hover:text-base">
          Description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Rhoncus dolor purus non enim praesent elementum facilisis. Lacus sed
          viverra tellus in hac. Vulputate enim nulla aliquet porttitor.
        </div>
        <ul className="mt-2 flex flex-wrap">
          {techs.map((x) => (
            <li className=" m-1 bg-accent2/5 py-1 px-4 rounded-full">
              <span className="text-accent2 text-sm">{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumeCard;
