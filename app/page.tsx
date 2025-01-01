import Image from "next/image";

import ButtonLink from "./_components/ButtonLink";
import HomePageNavbar from "./_components/HomePageNavbar";
import {
  FaXTwitter,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "./_components/icons";

type servicesType = { title: string; body: string };

const services: servicesType[] = [
  {
    title: "Emergency Care",
    body: "24/7 emergency medical services for critical conditions",
  },
  {
    title: "Outpatient Services",
    body: "Comprehensive care for non-emergency medical needs",
  },
  {
    title: "Specialized Treatments",
    body: "Advanced care in cardiology, oncology and more",
  },
  {
    title: "Diagnostic Imaging",
    body: "State of the art imaging services includng MRI and CT scans",
  },
  {
    title: "Maternity Care",
    body: "Comprehensive care for the expectant mothers and newborns",
  },
  {
    title: "Rehabilitation",
    body: "Physical, occupational and speech therapy services",
  },
];

type doctorsType = {
  image: string;
  name: string;
  specialization: string;
  comment: string;
};

const doctors: doctorsType[] = [
  {
    image: "https://i.pravatar.cc/100?=jfjfg",
    name: "Jane Smith",
    specialization: "Cardiologist",
    comment:
      "Specializing in advanced cardiac care with over 15 years of experience",
  },
  {
    image: "https://i.pravatar.cc/100?=jfjfge",
    name: "John Doe",
    specialization: "Neurologist",
    comment:
      "Expert in neurological disorders with a focus on innovative treatment",
  },
  {
    image: "https://i.pravatar.cc/100?=jfjfger",
    name: "Emily Chen",
    specialization: "Pediatrician",
    comment:
      "Dedicated to providing compassionate care for children of all ages",
  },
];

type newsType = { title: string; date: string; body: string };

const news: newsType[] = [
  {
    title: "New Cancer Treatment Center Opening",
    date: "June 15, 2024",
    body: "Clinix hospital is proud to announce the opening of our state of the art cancer treatment center",
  },
  {
    title: "Community Health Fair Next Month",
    date: "June 20, 2024",
    body: "Join us for anual community health fair, featuring free health screening and educational workshops",
  },
  {
    title: "Clinix Hospital Recognized for Patient Safety",
    date: "July 10, 2024",
    body: "We're honoured to receive the 2024 Patient Safety Excellence Award for our communitment to providing safe, high-quality care",
  },
];

export default function Home() {
  return (
    <>
      <header>
        <HomePageNavbar />
      </header>

      <main className="bg-neutral-10 px-4 py-6 text-center lg:py-20">
        <h1 className="text-xl font-bold lg:text-5xl">
          Welcome to Clinix Hospital
        </h1>
        <p className="text-xs text-neutral-60 lg:text-base">
          Providing Compasionate care and cutting-edge medical services to our
          community
        </p>
        <div className="mx-auto flex w-2/4 justify-center gap-x-4 py-4 lg:py-10">
          {/* <Button type="primary" size="md" className="flex-grow">
            Book Appointment
          </Button> */}
          <ButtonLink type="primary" size="md" href="" className="flex-grow">
            Book Appointment
          </ButtonLink>
          <ButtonLink type="secondary" size="md" href="" className="flex-grow">
            Emergnecy Services
          </ButtonLink>
          {/* <Button type="secondary" size="md" className="flex-grow">
            Emergnecy Services
          </Button> */}
        </div>
      </main>

      <section id="services" className="px-4 py-10 lg:px-8 lg:py-20">
        <p className="text-center text-3xl font-semibold lg:text-5xl">
          Our Services
        </p>

        <div className="grid gap-4 py-5 lg:grid-cols-3 lg:py-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-y-12 rounded border-2 border-neutral-60 px-2 py-4"
            >
              <p className="text-xl font-bold">{service.title}</p>
              <p>{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="doctors" className="bg-neutral-10 px-4 py-10 lg:px-8 lg:py-20">
        <p className="text-center text-3xl font-semibold lg:text-5xl">
          Featured Doctors
        </p>

        <div className="grid gap-4 py-10 lg:grid-cols-3 lg:py-14">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="flex flex-col items-center justify-center gap-10 rounded-lg bg-white px-4 py-4 text-center lg:py-8"
            >
              <div>
                <div className="relative h-40 w-40">
                  <Image
                    src={doctor.image}
                    alt="doctor image"
                    fill
                    quality={50}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="mt-2 text-xl font-bold">Dr. {doctor.name}</p>
                <p className="">{doctor.specialization}</p>
              </div>
              <p>{doctor.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-4 py-10 lg:px-8 lg:py-20">
        <p className="text-center text-3xl font-semibold lg:text-5xl">
          Latest News
        </p>

        <div className="grid gap-4 py-10 lg:grid-cols-3 lg:py-14">
          {news.map((news) => (
            <div
              key={news.title}
              className="flex flex-col gap-10 rounded border-2 px-2 py-4"
            >
              <div className="flex flex-col">
                <p className="text-lg font-bold lg:text-xl">{news.title}</p>
                <p className="text-neutral-60">{news.date}</p>
              </div>
              <p>{news.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-neutral-10 py-10 text-center">
        <p className="text-lg font-bold">Clinix Hospital</p>
        <p className="text-neutral-60">
          Providing quality healthcare since 1950
        </p>
        <div className="flex items-center justify-center gap-4 pt-5">
          <HiOutlinePhone />
          <HiOutlineEnvelope />
          <HiOutlineMapPin />
          <br />
          <HiOutlinePhone />
          <FaXTwitter />
          <HiOutlineMapPin />
        </div>
      </footer>
    </>
  );
}
