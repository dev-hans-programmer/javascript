// You have two functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
const users = [
   {
      id: 1,
      name: 'Hans',
   },
   {
      id: 2,
      name: 'John',
   },
   {
      id: 3,
      name: 'Mike',
   },
];

const statuses = [
   {
      id: 1,
      isActive: true,
   },
   {
      id: 2,
      isActive: false,
   },
   {
      id: 3,
      isActive: true,
   },
];

function transformData(users = [], statuses = []) {
   const data = users.map((user) => ({
      ...user,
      isActive: statuses.find((sts) => sts.id === user.id).isActive,
   }));

   return data;
}

const getUsers = () => new Promise((resolve) => resolve(users));
const getStatuses = () => new Promise((resolve) => resolve(statuses));

async function mapData() {
   const [users, statuses] = await Promise.all([getUsers(), getStatuses()]);
   return transformData(users, statuses);
}

mapData().then((data) => console.log(data));
