import React from "react";
const Error = () => {
  return (
    <div className="own-container d-flex flex-column justify-content-center align-items-center text-center bg-light">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <p className="fs-3 text-secondary">الصفحة غير موجودة</p>
      <p className="lead">
        يبدو أنك حاولت الوصول إلى صفحة غير موجودة أو تم نقلها.
      </p>
      <a href="/" className="btn btn-primary mt-3 px-4 py-2">
        الرجوع للرئيسية
      </a>
    </div>
  );
};

export default Error;
