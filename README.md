# Demeton JavaScript API

[![](https://data.jsdelivr.com/v1/package/npm/demeton/badge)](https://www.jsdelivr.com/package/npm/demeton)

[![NPM](https://nodei.co/npm/demeton.png)](https://nodei.co/npm/demeton/)

This is the Demeton compatible JavaScript API. Users can use it in browser and node.js. This javascript library also support API for our Repl console. Users can sign/send transactions and deploy/call smart contract with it. [deb.js](https://github.com/cyber-demeton/deb.js)


## Install && Package

Use the `npm` installation dependencies

```
npm install
```

Use `gulp` to package the deb.js:

```
gulp
```

Now we can check the newly created files in `/dist`

Here you should see a bunch of js files. 

 * `deb.js`:Used in browser side. Only RPC interface supported.
 * `deb-light.js`:Used in Repl console. Not including outside dependency.
 * `demeton.js`: Fully functional in the browser. Users can create an address, sign a transaction, and deploy/call a smart contract.

###### CDN Support
deb.js has been released to [NPM](https://www.npmjs.com/package/demeton), and developers can use the following code through [CDN](https://www.jsdelivr.com/package/npm/demeton) addition.

```html
<script src="https://cdn.jsdelivr.net/npm/demeton@0.5.6/dist/demeton.js"></script>
```

## Documentation


<a target="_blank" href="https://cyber-demeton.github.io/deb.js/index.html">Public API documentation link</a>

For build API documentation run `gulp documentation` task.

Generated documentation you can check in `/documentation` folder.

## Usage
`deb.js` is a useful library for demeton developers. It provides rich underlying support in web and node.js's dapp. It implements the following functions.

* The RPC interface for the demeton node is encapsulated;
* Create and manage the private key and address of the demeton;
* Generate the transaction object and sign the transaction.
* Deploy/call smart contract, breakpoint debugging support.

The use of deb.js can be used as examples:

* [web-example](example/example.html) 
* [nodejs-example](example/node-example.js)
* [node-dvm](example/node-dvm.js)

## Contribution

We are very glad that you are considering to help Demeton Team or go-demeton project, including but not limited to source code, documents or others.

If you'd like to contribute, please fork, fix, commit and send a pull request for the maintainers to review and merge into the main code base. If you wish to submit more complex changes though, please check up with the core devs first on our [slack channel](http://cyber-demeton.herokuapp.com) to ensure those changes are in line with the general philosophy of the project and/or get some early feedback which can make both your efforts much lighter as well as our review and merge procedures quick and simple.

Please refer to our [contribution guideline](https://github.com/cyber-demeton/wiki/blob/master/contribute.md) for more information.

Thanks.

## License

The go-demeton project is licensed under the [GNU Lesser General Public License Version 3.0 (“LGPL v3”)](https://www.gnu.org/licenses/lgpl-3.0.en.html).

For the more information about licensing, please refer to [Licensing](https://github.com/cyber-demeton/wiki/blob/master/licensing.md) page.

