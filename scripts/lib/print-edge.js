const printEdge = (edge, inout) => ({
  //name: edge.name,
  type: edge.type,
  spec: edge.spec,
  ...(edge.from.dummy ? { FROM_DUMMY: true } : {}),
  ...(edge.to && edge.to.dummy ? { TO_DUMMY: true } : {}),
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
