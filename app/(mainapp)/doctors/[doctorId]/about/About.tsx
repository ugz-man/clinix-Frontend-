export default function About({ doctor }) {
  return (
    <div className="flex flex-col gap-7 border-2 p-3 shadow lg:p-7">
      <div>
        <h2 className="text-2xl font-bold lg:text-4xl">
          About Dr. {doctor.name.split(" ")[0]}
        </h2>
        <p className="mt-4 lg:mt-8">{doctor.about}</p>
      </div>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-10">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Education</h3>
          {doctor.education.map(
            (eduField: {
              degree: string;
              field: string;
              institution: string;
              graduationYear: number;
              _id: string;
            }) => (
              <p key={eduField._id}>
                Graduated in the year {eduField.graduationYear} with{" "}
                {eduField.degree} degree in the field of {eduField.field} from
                the institution of {eduField.institution}.
              </p>
            ),
          )}
        </div>

        <div>
          <h3 className="font-bold">Language</h3>
          <div className="flex gap-2">
            {doctor.languages.map((language: string) => (
              <span
                key={language}
                className="mt-4 inline-block rounded-xl bg-blue-gray-50 px-2 py-1"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Certifications</h3>
          <ul className="list-disc px-4">
            {doctor.certifications.map(
              (certification: {
                name: string;
                organization: string;
                issueYear: number;
                _id: string;
              }) => (
                <li key={certification._id}>
                  <p>
                    Cartified in {certification.name} from{" "}
                    {certification.organization} organization, in the year{" "}
                    {certification.issueYear}.
                  </p>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Awards</h3>
          <ul className="list-disc px-4">
            {doctor.awards.map(
              (award: {
                name: string;
                organization: string;
                year: number;
                _id: string;
              }) => (
                <li key={award._id}>
                  {award.name}, {award.year}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-bold">Publications</h3>
        <ul className="list-disc px-4">
          {doctor.publications.map(
            (publication: {
              title: string;
              journal: string;
              year: number;
              link: string;
              _id: string;
            }) => (
              <li key={publication._id}>
                <p>
                  {publication.journal} {`'${publication.title}'`},{" "}
                  {publication.year}.
                </p>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
