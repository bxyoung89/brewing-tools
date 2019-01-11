export default hops => hops.filter(hop => hop.boilTime > 0 && hop.alphaAcid > 0 && hop.ounces > 0);
