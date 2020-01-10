export default props => 
<html lang="en">
<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href={ props["stylesheet-href"] } />
  <title>{ props.title }</title>
</head>
<body>
  { props.children }
  {/* chrome hack */}
  <script> </script>
</body>
</html>
