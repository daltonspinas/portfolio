export interface ResumeCardInfo {
    // TODO: handle using actual Date objects
    startDate: string,
    endDate: string,
    title: string,
    company: string,
    subContractCompany?: string,
    bullets: string[],
    technologies: string[]
}