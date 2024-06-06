import { ApiResponse } from "../interfaces/response.interface";

interface Props {
  data: ApiResponse;
}

export const Card = ({ data }: Props) => {
  const { name, username, email, address, phone, website } = data;
  return (
    <div
      className="border bg-card text-card-foreground shadow-sm w-full max-w-2xl rounded-2xl"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 bg-gray-100 dark:bg-gray-800 rounded-t-2xl p-8">
        <div className="flex items-center gap-6">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
            <img
              className="aspect-square h-full w-full"
              alt="@shadcn"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            />
          </span>
          <div className="grid gap-1">
            <div className="text-xl font-medium dark:text-white">{name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {username}
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 grid gap-6">
        <div className="grid gap-1">
          <div className="text-sm font-medium">Email</div>
          <div className="text-gray-500 dark:text-gray-400">{email}</div>
        </div>
        <div className="grid gap-1">
          <div className="text-sm font-medium">Address</div>
          <div className="text-gray-500 dark:text-gray-400">
            {address.street} {address.suite} {address.city}
          </div>
        </div>
        <div className="grid gap-1">
          <div className="text-sm font-medium">Phone</div>
          <div className="text-gray-500 dark:text-gray-400">{phone}</div>
        </div>
        <div className="grid gap-1">
          <div className="text-sm font-medium">Website</div>
          <div className="text-gray-500 dark:text-gray-400">{website}</div>
        </div>
        <div className="grid gap-1"></div>
      </div>
    </div>
  );
};
