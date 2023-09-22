const express = require('express');

const app = express();
const port = 3000;

// Define user roles
const roles = {
   admin: ['create', 'read', 'update', 'delete'],
   user: ['read'],
};

function checkPermission(role, permission) {
   return (req, res, next) => {
      if (roles[role].includes(permission)) {
         next();
      } else {
         res.status(403).json({ message: 'Access denied' });
      }
   };
}

// Example protected route with RBAC middleware
app.get('/admin/create', checkPermission('admin', 'create'), (req, res) => {
   res.json({ message: 'Admin can create' });
});

app.get('/user/read', checkPermission('user', 'read'), (req, res) => {
   res.json({ message: 'User can read' });
});

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});
