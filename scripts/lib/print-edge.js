const printEdge = (edge, inout) => ({
  //name: edge.name,
  type: edge.type,
  spec: edge.spec,
  ...(edge.accept ? { accept: edge.accept } : {}),
  ...(inout === 'in' ? {
    from: edge.from.location,
  } : {
    to: edge.to && edge.to.location,
  }),
  ...(edge.error ? { error: edge.error } : {}),
  __proto__: { constructor: edge.constructor },
})
module.exports = printEdge
