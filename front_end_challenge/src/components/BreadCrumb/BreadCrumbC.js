import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function BreadCrumbC() {
  let params = useParams();
  if (params.id) {
    return (
      <div className>
        <Breadcrumb style={{ marginLeft: "16.5%", marginTop: "2%" }}>
          <Breadcrumb.Item>
            <Link to="/item_list">
              <div>Products</div>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Description</Breadcrumb.Item>
          <Breadcrumb.Item active></Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  } else {
    return (
      <div>
        <Breadcrumb style={{ marginLeft: "16.5%", marginTop: "2%" }}>
          <Breadcrumb.Item active>Products</Breadcrumb.Item>
          <Breadcrumb.Item active></Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default BreadCrumbC;
