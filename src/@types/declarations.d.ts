declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { content };
  export default ReactComponent;
}

declare module '*.jpg';
