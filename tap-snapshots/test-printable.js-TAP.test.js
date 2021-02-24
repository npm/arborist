/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/printable.js TAP printable Node do not recurse forever > must match snapshot 1`] = `
{
name:'recursive',
version:'1.0.0',
location:'',
path:'/home/user/projects/root',
edgesOut:Map{
'a' =>{prod a@^1.0.0 -> node_modules/a},
'b' =>{prod b@^1.0.0 -> node_modules/b}},
fsChildren:Set{
{
name:'b',
version:'1.2.3',
location:'b',
path:'/home/user/projects/root/b',
edgesOut:Map{'c' =>{prod c@* -> b/node_modules/c}},
children:Map{
'c' =>{
name:'c',
version:'1.2.3',
location:'b/node_modules/c',
path:'/home/user/projects/root/b/node_modules/c',
edgesOut:Map{
'b' =>{prod b@9.9.9999 -> b/node_modules/c/node_modules/b INVALID},
'notfound' =>{prod notfound@* MISSING}},
edgesIn:Set{{b prod c@*}},
children:Map{
'b' => ArboristLink{
name:'b',
version:'1.2.3',
location:'b/node_modules/c/node_modules/b',
path:'/home/user/projects/root/b/node_modules/c/node_modules/b',
realpath:'/home/user/projects/root/b',
resolved:'file:../../..',
edgesIn:Set{{b/node_modules/c prod b@9.9.9999 INVALID}},
target:{location:'b'}}}}}}},
children:Map{
'a' =>{
name:'a',
version:'1.2.3',
location:'node_modules/a',
path:'/home/user/projects/root/node_modules/a',
edgesIn:Set{{"" prod a@^1.0.0}}},
'b' => ArboristLink{
name:'b',
version:'1.2.3',
location:'node_modules/b',
path:'/home/user/projects/root/node_modules/b',
realpath:'/home/user/projects/root/b',
resolved:'file:../b',
edgesIn:Set{{"" prod b@^1.0.0}},
target:{location:'b'}}}}
`

exports[`test/printable.js TAP printable Node extraneous tree > should print human readable representation of node tree 1`] = `
{
name:'printable-node',
version:'1.1.1',
location:'',
path:'/home/user/projects/root',
extraneous:true,
dev:true,
optional:true,
peer:true,
error:{code:'ERR', path:'/'},
edgesOut:Map{
'b' =>{prod b@* -> node_modules/b},
'missing' =>{prod missing@* MISSING},
'prod' =>{prod prod@1.x -> node_modules/prod}},
children:Map{
'b' =>{
name:'b',
version:'1.2.3',
location:'node_modules/b',
path:'/home/user/projects/root/node_modules/b',
resolved:'b',
extraneous:true,
dev:true,
optional:true,
peer:true,
edgesIn:Set{{"" prod b@*},{node_modules/prod prod b@*}}},
'c' =>{
name:'c',
location:'node_modules/c',
path:'/home/user/projects/root/node_modules/c',
resolved:'c',
extraneous:true,
dev:true,
optional:true,
peer:true},
'prod' =>{
name:'prod',
version:'1.2.3',
location:'node_modules/prod',
path:'/home/user/projects/root/node_modules/prod',
resolved:'prod',
extraneous:true,
dev:true,
optional:true,
peer:true,
edgesOut:Map{
'b' =>{prod b@* -> node_modules/b},
'meta' =>{prod meta@* MISSING},
'peer' =>{peer peer@* MISSING}},
edgesIn:Set{{"" prod prod@1.x}},
fsChildren:Set{
{
name:'bar',
version:'1.0.0',
location:'node_modules/prod/bar',
path:'/home/user/projects/root/node_modules/prod/bar',
extraneous:true,
dev:true,
optional:true,
peer:true},
{
name:'foo',
version:'1.2.3',
location:'node_modules/prod/foo',
path:'/home/user/projects/root/node_modules/prod/foo',
extraneous:true,
dev:true,
optional:true,
peer:true,
edgesOut:Map{'meta' =>{prod meta@* MISSING}}}}}}}
`

exports[`test/printable.js TAP printable Node variations > should match non-extraneous tree representation 1`] = `
{
name:'variations',
version:'1.0.0',
location:'',
path:'/home/user/projects/root',
dev:true,
optional:true,
peer:true,
error:{code:'ERR'},
edgesOut:Map{
'a' =>{prod a@^1.0.0 -> node_modules/a},
'b' =>{prod b@^1.0.0 -> node_modules/b}},
fsChildren:Set{
{
name:'c',
version:'1.0.0',
location:'c',
path:'/home/user/projects/root/c',
extraneous:true,
dev:true,
optional:true,
peer:true}},
children:Map{
'a' =>{
name:'a',
version:'1.1.1',
location:'node_modules/a',
path:'/home/user/projects/root/node_modules/a',
dev:true,
optional:true,
peer:true,
bundled:true,
errors:[{code:'ERR'}],
edgesIn:Set{{"" prod a@^1.0.0}}},
'b' => ArboristLink{
name:'b',
packageName:'c',
version:'1.0.0',
location:'node_modules/b',
path:'/home/user/projects/root/node_modules/b',
realpath:'/home/user/projects/root/c',
resolved:'file:../c',
devOptional:true,
errors:[{code:'ERR',
path:'/home/users/projects/root/node_modules/b'}],
edgesIn:Set{{"" prod b@^1.0.0}},
target:{location:'c'}},
'd' => ArboristLink{
name:'d',
packageName:'c',
version:'1.0.0',
location:'node_modules/d',
path:'/home/user/projects/root/node_modules/d',
realpath:'/home/user/projects/root/c',
resolved:'file:../c',
extraneous:true,
dev:true,
optional:true,
peer:true,
target:{location:'c'}}}}
`
