import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useParams } from 'react-router-dom';

function BreadcrumbC() {
    // TODO função para receber parte do link e fazer o breadcrumb de acordo com isso
    const params = useParams();
    console.log(params);
  return (
    <Breadcrumb style={{marginTop: "55px"}}>
      <Breadcrumb.Item link="#">Products</Breadcrumb.Item>
      <Breadcrumb.Item active>Dummy</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbC;