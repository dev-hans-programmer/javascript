// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end
const locations = [
   {
      location_key: [32, 22, 11],
      autoassign: 1,
   },
   {
      location_key: [41, 42],
      autoassign: 2,
   },
];

const bulkConfig = [
   {
      dataValues: {
         config_key: 100,
      },
   },
   {
      dataValues: {
         config_key: 200,
      },
   },
];

function mapData(locations = [], bulkConfig = []) {
   const items = [];

   for (const [index, { location_key, autoassign }] of Object.entries(
      locations
   )) {
      for (const loc of location_key) {
         items.push({
            location_key: loc,
            autoassign,
            config_key: bulkConfig[index].dataValues.config_key,
         });
      }
   }
   return items;
}

console.log(mapData(locations, bulkConfig));
