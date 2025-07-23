import Card from "../components/Card/Card";

export default function Home() {
  return (
    <main style={{ padding: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Card title="Welcome!">
        Deploy this React app using Docker & Jenkins pipeline.
      </Card>
      <Card title="Features">
        - React Router<br/>- CSS Modules<br/>- Modern Responsive Layout
      </Card>
      <Card title="Next Steps">
        Integrate in CI/CD with Jenkins, Docker, and your private registry.
      </Card>
    </main>
  );
}
