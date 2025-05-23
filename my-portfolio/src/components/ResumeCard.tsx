import { ResumeCardInfo } from "../common/types";

function ResumeCard(info: ResumeCardInfo) {

  return (
    <div className="flex flex-col md:flex-row md:gap-12 hover:bg-slate-300 hover:bg-opacity-5 md:p-4 rounded-lg group/card hover:opacity-100 hover:z-40 px-8">
      <div className="text-muted text-xs uppercase leading-6 min-w-auto text-nowrap ">
       {info.startDate} &mdash; <br className="hidden md:inline"></br>{info.endDate}
      </div>
      <div>
        <div className="">
          <div className="text-2xl mb-2 group-hover/card:text-accent2">
            {info.title} - {info.company}
          </div>
          {info.subContractCompany ? (
            <div className="text-xl group-hover/card:underline decoration-accent">
              Consultant for {info.subContractCompany}
            </div>
          ) : (
            ""
          )}
        </div>
        <ul className="list-disc mt-4">
          {info.bullets.map((bullet) => (
            <li className="group-hover:text-base pl-2 mb-1">{bullet}</li>
          ))}
        </ul>
        <ul className="mt-2 flex flex-wrap">
          {info.technologies.map((tech) => (
            <li className=" m-1 bg-accent2/5 py-1 px-4 rounded-full">
              <span className="text-accent2 text-sm">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumeCard;
