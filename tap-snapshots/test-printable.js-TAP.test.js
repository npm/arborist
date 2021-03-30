/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/printable.js TAP broken links dont break the printing > must match snapshot 1`] = `
{
"children":Map{
"devnull" => ArboristLink{
"dev":true,
"extraneous":true,
"location":"node_modules/devnull",
"name":"devnull",
"optional":true,
"path":"/home/user/projects/root/node_modules/devnull",
"peer":true,
"realpath":"/home/user/projects/root/no/thing/here",
"resolved":"file:../no/thing/here",
"target":null,},},
"dev":true,
"extraneous":true,
"location":"",
"name":"root",
"optional":true,
"path":"/home/user/projects/root",
"peer":true,}
`

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

exports[`test/printable.js TAP show workspaces in printable node output > must match snapshot 1`] = `
{
"children":Map{
"a" => ArboristLink{
"dev":true,
"edgesIn":Set{
EdgeIn{
"from":"",
"name":"a",
"spec":"file:/home/user/projects/root/packages/a",
"type":"workspace",},},
"extraneous":true,
"location":"node_modules/a",
"name":"a",
"optional":true,
"path":"/home/user/projects/root/node_modules/a",
"peer":true,
"realpath":"/home/user/projects/root/packages/a",
"resolved":"file:../packages/a",
"target":{
"location":"packages/a",},
"version":"1.2.3",},
"b" => ArboristLink{
"dev":true,
"edgesIn":Set{
EdgeIn{
"from":"",
"name":"b",
"spec":"file:/home/user/projects/root/packages/b",
"type":"workspace",},},
"extraneous":true,
"location":"node_modules/b",
"name":"b",
"optional":true,
"path":"/home/user/projects/root/node_modules/b",
"peer":true,
"realpath":"/home/user/projects/root/packages/b",
"resolved":"file:../packages/b",
"target":{
"location":"packages/b",},
"version":"1.2.3",},},
"dev":true,
"edgesOut":Map{
"a" => EdgeOut{
"name":"a",
"spec":"file:/home/user/projects/root/packages/a",
"to":"node_modules/a",
"type":"workspace",},
"b" => EdgeOut{
"name":"b",
"spec":"file:/home/user/projects/root/packages/b",
"to":"node_modules/b",
"type":"workspace",},},
"extraneous":true,
"fsChildren":Set{
{
"dev":true,
"extraneous":true,
"location":"packages/a",
"name":"a",
"optional":true,
"path":"/home/user/projects/root/packages/a",
"peer":true,
"version":"1.2.3",},
{
"dev":true,
"extraneous":true,
"location":"packages/b",
"name":"b",
"optional":true,
"path":"/home/user/projects/root/packages/b",
"peer":true,
"version":"1.2.3",},},
"location":"",
"name":"root",
"optional":true,
"path":"/home/user/projects/root",
"peer":true,
"workspaces":Map{
"a" => "packages/a",
"b" => "packages/b",},}
`

exports[`test/printable.js TAP virtual roots are shown with their sourceReference > must match snapshot 1`] = `
ArboristVirtualNode{
"dev":true,
"extraneous":true,
"location":undefined,
"name":"baz",
"optional":true,
"path":null,
"peer":true,
"sourceReference":{
"dev":true,
"extraneous":true,
"location":"",
"name":"baz",
"optional":true,
"path":"/foo/bar/baz",
"peer":true,
"version":"1.2.3",},
"version":"1.2.3",}
`
