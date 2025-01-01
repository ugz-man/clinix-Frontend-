import InputText from "@/app/_components/InputText";
import UploadButton from "./UploadButton";
import UploadPhoto from "./UploadPhoto";
import { getMe } from "@/app/_lib/data";
import { updateMe } from "@/app/_lib/actions";

export default async function Page() {
  // get the user info
  const user = await getMe();

  // get the DOB and format it to yyy-mm-dd
  const date = new Date(user.data.DOB);
  const formattedDate = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  return (
    <div className="flex flex-col gap-12 rounded border p-5">
      <div>
        <h3 className="text-2xl font-bold lg:text-3xl">Personal Information</h3>
        <p className="text-neutral-60">Update your personal details here</p>
      </div>

      <form className="flex flex-col gap-7" action={updateMe}>
        <UploadPhoto userPhoto={user.data.profilePicture} />

        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-2">
          <div>
            <p>First Name</p>
            <InputText
              id="firstName"
              type="text"
              name="firstName"
              defaultValue={user?.data?.firstName}
              className="w-full"
            />
          </div>

          <div>
            <p>Last Name</p>
            <InputText
              id="lastName"
              type="text"
              name="lastName"
              defaultValue={user?.data?.lastName}
              className="w-full"
            />
          </div>

          <div>
            <p>Email</p>
            <InputText
              id="email"
              type="email"
              name="email"
              defaultValue={user?.data?.email}
              className="w-full"
            />
          </div>

          <div>
            <p>Phone</p>
            <InputText
              id="phone"
              type="tel"
              name="phone"
              defaultValue={user?.data?.phone}
              className="w-full"
            />
          </div>

          <div>
            <p>Date of Birth</p>
            <InputText
              id="DOB"
              type="date"
              name="DOB"
              defaultValue={formattedDate}
              className="w-full"
            />
          </div>

          <div>
            <p>Gender</p>
            <select
              className="w-full rounded-lg bg-neutral-10 px-2 py-2 focus:outline-none focus:ring focus:ring-primary-300"
              defaultValue={user?.data?.gender}
              name="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <p>Address</p>
            <InputText
              id="address"
              type="text"
              name="address"
              defaultValue={user?.data?.address}
              className="w-full"
            />
          </div>

          <UploadButton />
        </div>
      </form>
    </div>
  );
}
