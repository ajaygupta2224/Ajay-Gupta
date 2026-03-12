import React from 'react';

export const PrintableResume = ({ data }: { data: any }) => {
  return (
    <div className="hidden print:block print:bg-white print:text-black print:p-8 max-w-4xl mx-auto font-sans text-sm">
      {/* Header */}
      <div className="text-center mb-6 border-b-2 border-slate-800 pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-1">{data.basics.name}</h1>
        <div className="text-base text-slate-700 mb-2">{data.basics.location} | {data.basics.email} | {data.basics.phone} | <a href={`https://${data.basics.links.LinkedIn}`}>{data.basics.links.LinkedIn}</a></div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1">Summary</h2>
        <p className="text-justify leading-relaxed">{data.basics.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1">Work Experience</h2>
        {data.experience.map((job: any, index: number) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-base">{job.company} | {job.role}</h3>
              <span className="font-medium text-slate-600">{job.dates}</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1">
              {job.bullets.map((bullet: string, i: number) => (
                <li key={i} className="leading-snug">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1">Projects</h2>
          {data.projects.map((project: any, index: number) => (
            <div key={index} className="mb-3">
              <h3 className="font-bold text-base mb-1">{project.title} [{project.stack.join(', ')}]</h3>
              <ul className="list-disc list-outside ml-5 space-y-1">
                {project.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="leading-snug">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1">Technical Skills</h2>
        <ul className="space-y-1">
          {data.skills.map((skillGroup: any, index: number) => (
            <li key={index}>
              <span className="font-bold">{skillGroup.category}</span> - {skillGroup.items.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1">Education</h2>
        {data.education.map((edu: any, index: number) => (
          <div key={index} className="flex justify-between items-baseline mb-1">
            <div>
              <span className="font-bold">{edu.institution}</span>
              <br />
              <span>{edu.degree}</span>
            </div>
            <span className="font-medium text-slate-600">{edu.dates}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
