/* /pages/index.js */
import { Button, Alert } from "reactstrap";

export default function Home() {
  return (
    <div>
      <div>
        <Alert color="primary">
          Hello Project is strapi-next with Bootstrap
        </Alert>
        &nbsp; <Button color="primary">Hello from Next.Js</Button>
      </div>
    </div>
  );
}
