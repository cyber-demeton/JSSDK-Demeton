// Copyright (C) 2018 go-demeton authors
// 
// This file is part of the go-demeton library.
// 
// the go-demeton library is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// the go-demeton library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with the go-demeton library.  If not, see <http://www.gnu.org/licenses/>.
// 


var DebDate = (function(ProtoDate) {
    // compatibility
    var Date = function() {
        throw new Error("Date is not allowed in dvm.");
    }

    function allow() {
        return Blockchain.block.seed != null && typeof(Blockchain.block.seed) !== 'undefined';
    }

    function DebDate() {
        if (!Blockchain) {
            throw new Error("'Blockchain' is not defined.");
        }
        if (!Blockchain.block) {
            throw new Error("'Blockchain.block' is not defined.");
        }
        if (!allow()) {
            throw new Error("Date is not allowed in dvm.");
        }
    
        var date = new(Function.prototype.bind.apply(ProtoDate, [ProtoDate].concat(Array.prototype.slice.call(arguments))))();
        if (arguments.length == 0) {
            // unit of timestamp is second
            date.setTime(Blockchain.block.timestamp * 1000);
        }
        Object.setPrototypeOf(date, DebDate.prototype);
        return date;
    }
    DebDate.now = function() {
        if (!allow()) {
            Date.now();
        }
        return new DebDate().getTime();
    }
    DebDate.UTC = function() {
        if (!allow()) {
            Date.UTC();
        }
        return ProtoDate.UTC.apply(null, arguments);
    }
    DebDate.parse = function(dateString) {
        if (!allow()) {
            Date.parse(dateString);
        }
        return ProtoDate.parse(dateString);
    }

    DebDate.prototype.getTimezoneOffset = function() {
        throw new Error("Unsupported method!");
    }
    DebDate.prototype.getDate = function() {
        return this.getUTCDate();
    }
    DebDate.prototype.getDay = function() {
        return this.getUTCDay();
    }
    DebDate.prototype.getFullYear = function() {
        return this.getUTCFullYear();
    }
    DebDate.prototype.getHours = function() {
        return this.getUTCHours();
    }
    DebDate.prototype.getMilliseconds = function() {
        return this.getUTCMilliseconds();
    }
    DebDate.prototype.getMinutes = function() {
        return this.getUTCMinutes();
    }
    DebDate.prototype.getMonth = function() {
        return this.getUTCMonth();
    }
    DebDate.prototype.getSeconds = function() {
        return this.getUTCSeconds();
    },
    DebDate.prototype.getYear = function() {
        throw new Error("Deprecated!");
    }
    DebDate.prototype.setYear = function() {
        throw new Error("Deprecated!");
    }
    DebDate.prototype.setDate = function() {
        return this.setUTCDate.apply(this, arguments);
    }
    DebDate.prototype.setFullYear = function() {
        return this.setUTCFullYear.apply(this, arguments);
    }
    DebDate.prototype.setHours = function() {
        return this.setUTCHours.apply(this, arguments);
    }
    DebDate.prototype.setMilliseconds = function() {
        return this.setUTCMilliseconds.apply(this, arguments);
    }
    DebDate.prototype.setMinutes = function() {
        return this.setUTCMinutes.apply(this, arguments);
    }
    DebDate.prototype.setMonth = function() {
        return this.setUTCMonth.apply(this, arguments);
    }
    DebDate.prototype.setSeconds = function() {
        return this.setUTCSeconds.apply(this, arguments);
    }
    DebDate.prototype.toString = function() {
        // return UTC string
        return this.toUTCString.apply(this, arguments);
    }
    DebDate.prototype.toDateString = function() {
        throw new Error("Unsupported method!");
    }
    DebDate.prototype.toTimeString = function() {
        throw new Error("Unsupported method!");
    }

    DebDate.prototype = new Proxy(DebDate.prototype, {
        getPrototypeOf: function(target) {
            throw new Error("Unsupported method!");
        },
    });

    Object.setPrototypeOf(DebDate.prototype, ProtoDate.prototype);
    return DebDate;
})(Date);

module.exports = DebDate;