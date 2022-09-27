"use strict";
(globalThis["webpackChunk_croquet_microverse"] = globalThis["webpackChunk_croquet_microverse"] || []).push([["vendors-node_modules_dimforge_rapier3d_rapier_js"],{

/***/ "./node_modules/@dimforge/rapier3d/dynamics/ccd_solver.js":
/*!****************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/ccd_solver.js ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CCDSolver": () => (/* binding */ CCDSolver)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__]);
_raw__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * The CCD solver responsible for resolving Continuous Collision Detection.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `ccdSolver.free()`
 * once you are done using it.
 */
var CCDSolver = /** @class */ (function () {
    function CCDSolver(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawCCDSolver();
    }
    /**
     * Release the WASM memory occupied by this narrow-phase.
     */
    CCDSolver.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    return CCDSolver;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/dynamics/coefficient_combine_rule.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/coefficient_combine_rule.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoefficientCombineRule": () => (/* binding */ CoefficientCombineRule)
/* harmony export */ });
/**
 * A rule applied to combine coefficients.
 *
 * Use this when configuring the `ColliderDesc` to specify
 * how friction and restitution coefficient should be combined
 * in a contact.
 */
var CoefficientCombineRule;
(function (CoefficientCombineRule) {
    CoefficientCombineRule[CoefficientCombineRule["Average"] = 0] = "Average";
    CoefficientCombineRule[CoefficientCombineRule["Min"] = 1] = "Min";
    CoefficientCombineRule[CoefficientCombineRule["Multiply"] = 2] = "Multiply";
    CoefficientCombineRule[CoefficientCombineRule["Max"] = 3] = "Max";
})(CoefficientCombineRule || (CoefficientCombineRule = {}));


/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/dynamics/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/index.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallJoint": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.BallJoint),
/* harmony export */   "CCDSolver": () => (/* reexport safe */ _ccd_solver__WEBPACK_IMPORTED_MODULE_6__.CCDSolver),
/* harmony export */   "CoefficientCombineRule": () => (/* reexport safe */ _coefficient_combine_rule__WEBPACK_IMPORTED_MODULE_5__.CoefficientCombineRule),
/* harmony export */   "FixedJoint": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.FixedJoint),
/* harmony export */   "IntegrationParameters": () => (/* reexport safe */ _integration_parameters__WEBPACK_IMPORTED_MODULE_2__.IntegrationParameters),
/* harmony export */   "IslandManager": () => (/* reexport safe */ _island_manager__WEBPACK_IMPORTED_MODULE_7__.IslandManager),
/* harmony export */   "Joint": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.Joint),
/* harmony export */   "JointParams": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.JointParams),
/* harmony export */   "JointSet": () => (/* reexport safe */ _joint_set__WEBPACK_IMPORTED_MODULE_4__.JointSet),
/* harmony export */   "JointType": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.JointType),
/* harmony export */   "PrismaticJoint": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.PrismaticJoint),
/* harmony export */   "RevoluteJoint": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.RevoluteJoint),
/* harmony export */   "RigidBody": () => (/* reexport safe */ _rigid_body__WEBPACK_IMPORTED_MODULE_0__.RigidBody),
/* harmony export */   "RigidBodyDesc": () => (/* reexport safe */ _rigid_body__WEBPACK_IMPORTED_MODULE_0__.RigidBodyDesc),
/* harmony export */   "RigidBodySet": () => (/* reexport safe */ _rigid_body_set__WEBPACK_IMPORTED_MODULE_1__.RigidBodySet),
/* harmony export */   "RigidBodyType": () => (/* reexport safe */ _rigid_body__WEBPACK_IMPORTED_MODULE_0__.RigidBodyType),
/* harmony export */   "SpringModel": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.SpringModel),
/* harmony export */   "UnitJoint": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_3__.UnitJoint)
/* harmony export */ });
/* harmony import */ var _rigid_body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rigid_body */ "./node_modules/@dimforge/rapier3d/dynamics/rigid_body.js");
/* harmony import */ var _rigid_body_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rigid_body_set */ "./node_modules/@dimforge/rapier3d/dynamics/rigid_body_set.js");
/* harmony import */ var _integration_parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integration_parameters */ "./node_modules/@dimforge/rapier3d/dynamics/integration_parameters.js");
/* harmony import */ var _joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./joint */ "./node_modules/@dimforge/rapier3d/dynamics/joint.js");
/* harmony import */ var _joint_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joint_set */ "./node_modules/@dimforge/rapier3d/dynamics/joint_set.js");
/* harmony import */ var _coefficient_combine_rule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coefficient_combine_rule */ "./node_modules/@dimforge/rapier3d/dynamics/coefficient_combine_rule.js");
/* harmony import */ var _ccd_solver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ccd_solver */ "./node_modules/@dimforge/rapier3d/dynamics/ccd_solver.js");
/* harmony import */ var _island_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./island_manager */ "./node_modules/@dimforge/rapier3d/dynamics/island_manager.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rigid_body__WEBPACK_IMPORTED_MODULE_0__, _rigid_body_set__WEBPACK_IMPORTED_MODULE_1__, _integration_parameters__WEBPACK_IMPORTED_MODULE_2__, _joint__WEBPACK_IMPORTED_MODULE_3__, _joint_set__WEBPACK_IMPORTED_MODULE_4__, _ccd_solver__WEBPACK_IMPORTED_MODULE_6__, _island_manager__WEBPACK_IMPORTED_MODULE_7__]);
([_rigid_body__WEBPACK_IMPORTED_MODULE_0__, _rigid_body_set__WEBPACK_IMPORTED_MODULE_1__, _integration_parameters__WEBPACK_IMPORTED_MODULE_2__, _joint__WEBPACK_IMPORTED_MODULE_3__, _joint_set__WEBPACK_IMPORTED_MODULE_4__, _ccd_solver__WEBPACK_IMPORTED_MODULE_6__, _island_manager__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/dynamics/integration_parameters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/integration_parameters.js ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegrationParameters": () => (/* binding */ IntegrationParameters)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__]);
_raw__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var IntegrationParameters = /** @class */ (function () {
    function IntegrationParameters(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawIntegrationParameters();
    }
    /**
     * Free the WASM memory used by these integration parameters.
     */
    IntegrationParameters.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    Object.defineProperty(IntegrationParameters.prototype, "dt", {
        /**
         * The timestep length (default: `1.0 / 60.0`)
         */
        get: function () {
            return this.raw.dt;
        },
        set: function (value) {
            this.raw.dt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "erp", {
        /**
         * The Error Reduction Parameter in `[0, 1]` is the proportion of
         * the positional error to be corrected at each time step (default: `0.2`).
         */
        get: function () {
            return this.raw.erp;
        },
        set: function (value) {
            this.raw.erp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "jointErp", {
        /**
         * The Error Reduction Parameter for joints in `[0, 1]` is the proportion of
         * the positional error to be corrected at each time step (default: `0.2`).
         */
        get: function () {
            return this.raw.jointErp;
        },
        set: function (value) {
            this.raw.jointErp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "warmstartCoeff", {
        /**
         * Each cached impulse are multiplied by this coefficient in `[0, 1]`
         * when they are re-used to initialize the solver (default `1.0`).
         */
        get: function () {
            return this.raw.warmstartCoeff;
        },
        set: function (value) {
            this.raw.warmstartCoeff = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "allowedLinearError", {
        /**
         * Amount of penetration the engine wont attempt to correct (default: `0.001m`).
         */
        get: function () {
            return this.raw.allowedLinearError;
        },
        set: function (value) {
            this.raw.allowedLinearError = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "predictionDistance", {
        /**
         * The maximal distance separating two objects that will generate predictive contacts (default: `0.002`).
         */
        get: function () {
            return this.raw.predictionDistance;
        },
        set: function (value) {
            this.raw.predictionDistance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "allowedAngularError", {
        /**
         * Amount of angular drift of joint limits the engine wont
         * attempt to correct (default: `0.001rad`).
         */
        get: function () {
            return this.raw.allowedAngularError;
        },
        set: function (value) {
            this.raw.allowedAngularError = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "maxLinearCorrection", {
        /**
         * Maximum linear correction during one step of the non-linear position solver (default: `0.2`).
         */
        get: function () {
            return this.raw.maxLinearCorrection;
        },
        set: function (value) {
            this.raw.maxLinearCorrection = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "maxAngularCorrection", {
        /**
         * Maximum angular correction during one step of the non-linear position solver (default: `0.2`).
         */
        get: function () {
            return this.raw.maxAngularCorrection;
        },
        set: function (value) {
            this.raw.maxAngularCorrection = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "maxVelocityIterations", {
        /**
         * Maximum number of iterations performed by the velocity constraints solver (default: `4`).
         */
        get: function () {
            return this.raw.maxVelocityIterations;
        },
        set: function (value) {
            this.raw.maxVelocityIterations = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "maxPositionIterations", {
        /**
         * Maximum number of iterations performed by the position-based constraints solver (default: `1`).
         */
        get: function () {
            return this.raw.maxPositionIterations;
        },
        set: function (value) {
            this.raw.maxPositionIterations = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "minIslandSize", {
        /**
         * Minimum number of dynamic bodies in each active island (default: `128`).
         */
        get: function () {
            return this.raw.minIslandSize;
        },
        set: function (value) {
            this.raw.minIslandSize = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationParameters.prototype, "maxCcdSubsteps", {
        /**
         * Maximum number of substeps performed by the  solver (default: `1`).
         */
        get: function () {
            return this.raw.maxCcdSubsteps;
        },
        set: function (value) {
            this.raw.maxCcdSubsteps = value;
        },
        enumerable: false,
        configurable: true
    });
    return IntegrationParameters;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/dynamics/island_manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/island_manager.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IslandManager": () => (/* binding */ IslandManager)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__]);
_raw__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * The CCD solver responsible for resolving Continuous Collision Detection.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `ccdSolver.free()`
 * once you are done using it.
 */
var IslandManager = /** @class */ (function () {
    function IslandManager(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawIslandManager();
    }
    /**
     * Release the WASM memory occupied by this narrow-phase.
     */
    IslandManager.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    /**
     * Applies the given closure to the handle of each active rigid-bodies contained by this set.
     *
     * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
     *
     * @param f - The closure to apply.
     */
    IslandManager.prototype.forEachActiveRigidBodyHandle = function (f) {
        this.raw.forEachActiveRigidBodyHandle(f);
    };
    return IslandManager;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/dynamics/joint.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/joint.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallJoint": () => (/* binding */ BallJoint),
/* harmony export */   "FixedJoint": () => (/* binding */ FixedJoint),
/* harmony export */   "Joint": () => (/* binding */ Joint),
/* harmony export */   "JointParams": () => (/* binding */ JointParams),
/* harmony export */   "JointType": () => (/* binding */ JointType),
/* harmony export */   "PrismaticJoint": () => (/* binding */ PrismaticJoint),
/* harmony export */   "RevoluteJoint": () => (/* binding */ RevoluteJoint),
/* harmony export */   "SpringModel": () => (/* binding */ SpringModel),
/* harmony export */   "UnitJoint": () => (/* binding */ UnitJoint)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_math__WEBPACK_IMPORTED_MODULE_0__, _raw__WEBPACK_IMPORTED_MODULE_1__]);
([_math__WEBPACK_IMPORTED_MODULE_0__, _raw__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * An enum grouping all possible types of joints:
 * - `Ball`: A Ball joint that removes all relative linear degrees of freedom between the affected bodies.
 * - `Fixed`: A fixed joint that removes all relative degrees of freedom between the affected bodies.
 * - `Prismatic`: A prismatic joint that removes all degrees of freedom between the affected
 *                bodies except for the translation along one axis.
 * - `Revolute`: (3D only) A revolute joint that removes all degrees of freedom between the affected
 *               bodies except for the rotation along one axis.
 */
var JointType;
(function (JointType) {
    JointType[JointType["Ball"] = 0] = "Ball";
    JointType[JointType["Fixed"] = 1] = "Fixed";
    JointType[JointType["Prismatic"] = 2] = "Prismatic";
    // #if DIM3
    JointType[JointType["Revolute"] = 3] = "Revolute";
    // #endif
})(JointType || (JointType = {}));
var SpringModel;
(function (SpringModel) {
    SpringModel[SpringModel["Disabled"] = 0] = "Disabled";
    SpringModel[SpringModel["VelocityBased"] = 1] = "VelocityBased";
    SpringModel[SpringModel["AccelerationBased"] = 2] = "AccelerationBased";
    SpringModel[SpringModel["ForceBased"] = 3] = "ForceBased";
})(SpringModel || (SpringModel = {}));
var Joint = /** @class */ (function () {
    function Joint(rawSet, handle) {
        this.rawSet = rawSet;
        this.handle = handle;
    }
    /**
     * Checks if this joint is still valid (i.e. that it has
     * not been deleted from the joint set yet).
     */
    Joint.prototype.isValid = function () {
        return this.rawSet.contains(this.handle);
    };
    /**
     * The unique integer identifier of the first rigid-body this joint it attached to.
     */
    Joint.prototype.bodyHandle1 = function () {
        return this.rawSet.jointBodyHandle1(this.handle);
    };
    /**
     * The unique integer identifier of the second rigid-body this joint is attached to.
     */
    Joint.prototype.bodyHandle2 = function () {
        return this.rawSet.jointBodyHandle2(this.handle);
    };
    /**
     * The type of this joint given as a string.
     */
    Joint.prototype.type = function () {
        return this.rawSet.jointType(this.handle);
    };
    // #if DIM3
    /**
     * The rotation quaternion that aligns this joint's first local axis to the `x` axis.
     */
    Joint.prototype.frameX1 = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.fromRaw(this.rawSet.jointFrameX1(this.handle));
    };
    // #endif
    // #if DIM3
    /**
     * The rotation matrix that aligns this joint's second local axis to the `x` axis.
     */
    Joint.prototype.frameX2 = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.fromRaw(this.rawSet.jointFrameX2(this.handle));
    };
    // #endif
    /**
     * The position of the first anchor of this joint.
     *
     * The first anchor gives the position of the points application point on the
     * local frame of the first rigid-body it is attached to.
     */
    Joint.prototype.anchor1 = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
    };
    /**
     * The position of the second anchor of this joint.
     *
     * The second anchor gives the position of the points application point on the
     * local frame of the second rigid-body it is attached to.
     */
    Joint.prototype.anchor2 = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
    };
    /**
     * The first axis of this joint, if any.
     *
     * For joints where an application axis makes sense (e.g. the revolute and prismatic joins),
     * this returns the application axis on the first rigid-body this joint is attached to, expressed
     * in the local-space of this first rigid-body.
     */
    Joint.prototype.axis1 = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.jointAxis1(this.handle));
    };
    /**
     * The second axis of this joint, if any.
     *
     * For joints where an application axis makes sense (e.g. the revolute and prismatic joins),
     * this returns the application axis on the second rigid-body this joint is attached to, expressed
     * in the local-space of this second rigid-body.
     */
    Joint.prototype.axis2 = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.jointAxis2(this.handle));
    };
    return Joint;
}());

var UnitJoint = /** @class */ (function (_super) {
    __extends(UnitJoint, _super);
    function UnitJoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Are the limits enabled for this joint?
     */
    UnitJoint.prototype.limitsEnabled = function () {
        return this.rawSet.jointLimitsEnabled(this.handle);
    };
    /**
     * The min limit of this joint.
     */
    UnitJoint.prototype.limitsMin = function () {
        return this.rawSet.jointLimitsMin(this.handle);
    };
    /**
     * The max limit of this joint.
     */
    UnitJoint.prototype.limitsMax = function () {
        return this.rawSet.jointLimitsMax(this.handle);
    };
    UnitJoint.prototype.configureMotorModel = function (model) {
        this.rawSet.jointConfigureMotorModel(this.handle, model);
    };
    UnitJoint.prototype.configureMotorVelocity = function (targetVel, factor) {
        this.rawSet.jointConfigureUnitMotorVelocity(this.handle, targetVel, factor);
    };
    UnitJoint.prototype.configureMotorPosition = function (targetPos, stiffness, damping) {
        this.rawSet.jointConfigureUnitMotorPosition(this.handle, targetPos, stiffness, damping);
    };
    UnitJoint.prototype.configureMotor = function (targetPos, targetVel, stiffness, damping) {
        this.rawSet.jointConfigureUnitMotor(this.handle, targetPos, targetVel, stiffness, damping);
    };
    return UnitJoint;
}(Joint));

var FixedJoint = /** @class */ (function (_super) {
    __extends(FixedJoint, _super);
    function FixedJoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FixedJoint;
}(Joint));

var PrismaticJoint = /** @class */ (function (_super) {
    __extends(PrismaticJoint, _super);
    function PrismaticJoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrismaticJoint;
}(UnitJoint));

// #if DIM3
var BallJoint = /** @class */ (function (_super) {
    __extends(BallJoint, _super);
    function BallJoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BallJoint.prototype.configureMotorModel = function (model) {
        this.rawSet.jointConfigureMotorModel(this.handle, model);
    };
    BallJoint.prototype.configureMotorVelocity = function (targetVel, factor) {
        this.rawSet.jointConfigureBallMotorVelocity(this.handle, targetVel.x, targetVel.y, targetVel.z, factor);
    };
    BallJoint.prototype.configureMotorPosition = function (targetPos, stiffness, damping) {
        this.rawSet.jointConfigureBallMotorPosition(this.handle, targetPos.w, targetPos.x, targetPos.y, targetPos.z, stiffness, damping);
    };
    BallJoint.prototype.configureMotor = function (targetPos, targetVel, stiffness, damping) {
        this.rawSet.jointConfigureBallMotor(this.handle, targetPos.w, targetPos.x, targetPos.y, targetPos.z, targetVel.x, targetVel.y, targetVel.z, stiffness, damping);
    };
    return BallJoint;
}(Joint));

var RevoluteJoint = /** @class */ (function (_super) {
    __extends(RevoluteJoint, _super);
    function RevoluteJoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RevoluteJoint;
}(UnitJoint));

// #endif
var JointParams = /** @class */ (function () {
    function JointParams() {
    }
    /**
     * Create a new joint descriptor that builds Ball joints.
     *
     * A ball joints allows three relative rotational degrees of freedom
     * by preventing any relative translation between the anchors of the
     * two attached rigid-bodies.
     *
     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     */
    JointParams.ball = function (anchor1, anchor2) {
        var res = new JointParams();
        res.anchor1 = anchor1;
        res.anchor2 = anchor2;
        res.jointType = JointType.Ball;
        return res;
    };
    /**
     * Creates a new joint descriptor that builds a Fixed joint.
     *
     * A fixed joint removes all the degrees of freedom between the affected bodies, ensuring their
     * anchor and local frames coincide in world-space.
     *
     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param frame1 - The reference orientation of the joint wrt. the first rigid-body.
     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param frame2 - The reference orientation of the joint wrt. the second rigid-body.
     */
    JointParams.fixed = function (anchor1, frame1, anchor2, frame2) {
        var res = new JointParams();
        res.anchor1 = anchor1;
        res.anchor2 = anchor2;
        res.frame1 = frame1;
        res.frame2 = frame2;
        res.jointType = JointType.Fixed;
        return res;
    };
    // #if DIM3
    /**
     * Creates a new joint descriptor that builds a Prismatic joint.
     *
     * A prismatic joint removes all the degrees of freedom between the
     * affected bodies, except for the translation along one axis.
     *
     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param axis1 - Axis of the joint, expressed in the local-space of the first rigid-body it is attached to.
     * @param tangent1 - A vector orthogonal to `axis1`. It is used to compute a basis orthonormal
     *                   to the joint's axis. If this tangent is set to the zero vector, the orthonormal
     *                   basis will be automatically computed arbitrarily.
     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param axis2 - Axis of the joint, expressed in the local-space of the second rigid-body it is attached to.
     * @param tangent2 - A vector orthogonal to `axis2`. It is used to compute a basis orthonormal
     *                   to the joint's axis. If this tangent is set to the zero vector, the orthonormal
     *                   basis will be automatically computed arbitrarily.
     */
    JointParams.prismatic = function (anchor1, axis1, tangent1, anchor2, axis2, tangent2) {
        var res = new JointParams();
        res.anchor1 = anchor1;
        res.axis1 = axis1;
        res.tangent1 = tangent1;
        res.anchor2 = anchor2;
        res.axis2 = axis2;
        res.tangent2 = tangent2;
        res.jointType = JointType.Prismatic;
        return res;
    };
    /**
     * Create a new joint descriptor that builds Revolute joints.
     *
     * A revolute joint removes all degrees of freedom between the affected
     * bodies except for the rotation along one axis.
     *
     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param axis1 - Axis of the joint, expressed in the local-space of the first rigid-body it is attached to.
     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param axis2 - Axis of the joint, expressed in the local-space of the second rigid-body it is attached to.
     */
    JointParams.revolute = function (anchor1, axis1, anchor2, axis2) {
        var res = new JointParams();
        res.anchor1 = anchor1;
        res.anchor2 = anchor2;
        res.axis1 = axis1;
        res.axis2 = axis2;
        res.jointType = JointType.Revolute;
        return res;
    };
    // #endif
    JointParams.prototype.intoRaw = function () {
        var rawA1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.anchor1);
        var rawA2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.anchor2);
        var rawAx1;
        var rawAx2;
        var result;
        var limitsEnabled = false;
        var limitsMin = 0.0;
        var limitsMax = 0.0;
        switch (this.jointType) {
            case JointType.Ball:
                result = _raw__WEBPACK_IMPORTED_MODULE_1__.RawJointParams.ball(rawA1, rawA2);
                break;
            case JointType.Fixed:
                var rawFra1 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(this.frame1);
                var rawFra2 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(this.frame2);
                result = _raw__WEBPACK_IMPORTED_MODULE_1__.RawJointParams.fixed(rawA1, rawFra1, rawA2, rawFra2);
                rawFra1.free();
                rawFra2.free();
                break;
            case JointType.Prismatic:
                rawAx1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.axis1);
                rawAx2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.axis2);
                if (!!this.limitsEnabled) {
                    limitsEnabled = true;
                    limitsMin = this.limits[0];
                    limitsMax = this.limits[1];
                }
                // #if DIM3
                var rawTa1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.tangent1);
                var rawTa2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.tangent2);
                result = _raw__WEBPACK_IMPORTED_MODULE_1__.RawJointParams.prismatic(rawA1, rawAx1, rawTa1, rawA2, rawAx2, rawTa2, limitsEnabled, limitsMin, limitsMax);
                rawTa1.free();
                rawTa2.free();
                // #endif
                rawAx1.free();
                rawAx2.free();
                break;
            // #if DIM3
            case JointType.Revolute:
                rawAx1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.axis1);
                rawAx2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.axis2);
                result = _raw__WEBPACK_IMPORTED_MODULE_1__.RawJointParams.revolute(rawA1, rawAx1, rawA2, rawAx2);
                rawAx1.free();
                rawAx2.free();
                break;
            // #endif
        }
        rawA1.free();
        rawA2.free();
        return result;
    };
    return JointParams;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/dynamics/joint_set.js":
/*!***************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/joint_set.js ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JointSet": () => (/* binding */ JointSet)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
/* harmony import */ var _joint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joint */ "./node_modules/@dimforge/rapier3d/dynamics/joint.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _joint__WEBPACK_IMPORTED_MODULE_1__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _joint__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/**
 * A set of joints.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `jointSet.free()`
 * once you are done using it (and all the joints it created).
 */
var JointSet = /** @class */ (function () {
    function JointSet(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawJointSet();
    }
    /**
     * Release the WASM memory occupied by this joint set.
     */
    JointSet.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    /**
     * Creates a new joint and return its integer handle.
     *
     * @param bodies - The set of rigid-bodies containing the bodies the joint is attached to.
     * @param desc - The joint's parameters.
     * @param parent1 - The handle of the first rigid-body this joint is attached to.
     * @param parent2 - The handle of the second rigid-body this joint is attached to.
     */
    JointSet.prototype.createJoint = function (bodies, desc, parent1, parent2) {
        var rawParams = desc.intoRaw();
        var result = this.raw.createJoint(bodies.raw, rawParams, parent1, parent2);
        rawParams.free();
        return result;
    };
    /**
     * Remove a joint from this set.
     *
     * @param handle - The integer handle of the joint.
     * @param bodies - The set of rigid-bodies containing the rigid-bodies attached by the removed joint.
     * @param wake_up - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
     */
    JointSet.prototype.remove = function (handle, islands, bodies, wake_up) {
        this.raw.remove(handle, islands.raw, bodies.raw, wake_up);
    };
    /**
     * The number of joints on this set.
     */
    JointSet.prototype.len = function () {
        return this.raw.len();
    };
    /**
     * Does this set contain a joint with the given handle?
     *
     * @param handle - The joint handle to check.
     */
    JointSet.prototype.contains = function (handle) {
        return this.raw.contains(handle);
    };
    /**
     * Gets the joint with the given handle.
     *
     * Returns `null` if no joint with the specified handle exists.
     * Note that two distinct calls with the same `handle` will return two
     * different JavaScript objects that both represent the same joint.
     *
     * @param handle - The integer handle of the joint to retrieve.
     */
    JointSet.prototype.get = function (handle) {
        if (this.raw.contains(handle)) {
            switch (this.raw.jointType(handle)) {
                case _joint__WEBPACK_IMPORTED_MODULE_1__.JointType.Ball:
                    return new _joint__WEBPACK_IMPORTED_MODULE_1__.BallJoint(this.raw, handle);
                case _joint__WEBPACK_IMPORTED_MODULE_1__.JointType.Prismatic:
                    return new _joint__WEBPACK_IMPORTED_MODULE_1__.PrismaticJoint(this.raw, handle);
                case _joint__WEBPACK_IMPORTED_MODULE_1__.JointType.Fixed:
                    return new _joint__WEBPACK_IMPORTED_MODULE_1__.FixedJoint(this.raw, handle);
                // #if DIM3
                case _joint__WEBPACK_IMPORTED_MODULE_1__.JointType.Revolute:
                    return new _joint__WEBPACK_IMPORTED_MODULE_1__.RevoluteJoint(this.raw, handle);
                // #endif
            }
        }
        else {
            return null;
        }
    };
    /**
     * Applies the given closure to each joints contained by this set.
     *
     * @param f - The closure to apply.
     */
    JointSet.prototype.forEachJoint = function (f) {
        var _this = this;
        this.raw.forEachJointHandle(function (handle) {
            f(new _joint__WEBPACK_IMPORTED_MODULE_1__.Joint(_this.raw, handle));
        });
    };
    /**
     * Applies the given closure to the handle of each joints contained by this set.
     *
     * @param f - The closure to apply.
     */
    JointSet.prototype.forEachJointHandle = function (f) {
        this.raw.forEachJointHandle(f);
    };
    return JointSet;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/dynamics/rigid_body.js":
/*!****************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/rigid_body.js ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RigidBody": () => (/* binding */ RigidBody),
/* harmony export */   "RigidBodyDesc": () => (/* binding */ RigidBodyDesc),
/* harmony export */   "RigidBodyType": () => (/* binding */ RigidBodyType)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_math__WEBPACK_IMPORTED_MODULE_0__]);
_math__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * The simulation status of a rigid-body.
 */
// TODO: rename this to RigidBodyType
var RigidBodyType;
(function (RigidBodyType) {
    /**
     * A `RigidBodyType::Dynamic` body can be affected by all external forces.
     */
    RigidBodyType[RigidBodyType["Dynamic"] = 0] = "Dynamic";
    /**
     * A `RigidBodyType::Static` body cannot be affected by external forces.
     */
    RigidBodyType[RigidBodyType["Static"] = 1] = "Static";
    /**
     * A `RigidBodyType::KinematicPositionBased` body cannot be affected by any external forces but can be controlled
     * by the user at the position level while keeping realistic one-way interaction with dynamic bodies.
     *
     * One-way interaction means that a kinematic body can push a dynamic body, but a kinematic body
     * cannot be pushed by anything. In other words, the trajectory of a kinematic body can only be
     * modified by the user and is independent from any contact or joint it is involved in.
     */
    RigidBodyType[RigidBodyType["KinematicPositionBased"] = 2] = "KinematicPositionBased";
    /**
     * A `RigidBodyType::KinematicVelocityBased` body cannot be affected by any external forces but can be controlled
     * by the user at the velocity level while keeping realistic one-way interaction with dynamic bodies.
     *
     * One-way interaction means that a kinematic body can push a dynamic body, but a kinematic body
     * cannot be pushed by anything. In other words, the trajectory of a kinematic body can only be
     * modified by the user and is independent from any contact or joint it is involved in.
     */
    RigidBodyType[RigidBodyType["KinematicVelocityBased"] = 3] = "KinematicVelocityBased";
})(RigidBodyType || (RigidBodyType = {}));
/**
 * A rigid-body.
 */
var RigidBody = /** @class */ (function () {
    function RigidBody(rawSet, handle) {
        this.rawSet = rawSet;
        this.handle = handle;
    }
    /**
     * Checks if this rigid-body is still valid (i.e. that it has
     * not been deleted from the rigid-body set yet.
     */
    RigidBody.prototype.isValid = function () {
        return this.rawSet.contains(this.handle);
    };
    /**
     * Locks or unlocks the ability of this rigid-body to translate.
     *
     * @param locked - If `true`, this rigid-body will no longer translate due to forces and impulses.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    RigidBody.prototype.lockTranslations = function (locked, wakeUp) {
        return this.rawSet.rbLockTranslations(this.handle, locked, wakeUp);
    };
    /**
     * Locks or unlocks the ability of this rigid-body to rotate.
     *
     * @param locked - If `true`, this rigid-body will no longer rotate due to torques and impulses.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    RigidBody.prototype.lockRotations = function (locked, wakeUp) {
        return this.rawSet.rbLockRotations(this.handle, locked, wakeUp);
    };
    // #if DIM3
    /**
     * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
     *
     * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
     * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
     * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    RigidBody.prototype.restrictRotations = function (enableX, enableY, enableZ, wakeUp) {
        return this.rawSet.rbRestrictRotations(this.handle, enableX, enableY, enableZ, wakeUp);
    };
    // #endif
    /**
     * The dominance group, in [-127, +127] this rigid-body is part of.
     */
    RigidBody.prototype.dominanceGroup = function () {
        return this.rawSet.rbDominanceGroup(this.handle);
    };
    /**
     * Sets the dominance group of this rigid-body.
     *
     * @param group - The dominance group of this rigid-body. Must be a signed integer in the range [-127, +127].
     */
    RigidBody.prototype.setDominanceGroup = function (group) {
        this.rawSet.rbSetDominanceGroup(this.handle, group);
    };
    /**
     * Enable or disable CCD (Continuous Collision Detection) for this rigid-body.
     *
     * @param enabled - If `true`, CCD will be enabled for this rigid-body.
     */
    RigidBody.prototype.enableCcd = function (enabled) {
        this.rawSet.rbEnableCcd(this.handle, enabled);
    };
    /**
     * The world-space translation of this rigid-body.
     */
    RigidBody.prototype.translation = function () {
        var res = this.rawSet.rbTranslation(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(res);
    };
    /**
     * The world-space orientation of this rigid-body.
     */
    RigidBody.prototype.rotation = function () {
        var res = this.rawSet.rbRotation(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.fromRaw(res);
    };
    /**
     * The world-space next translation of this rigid-body.
     *
     * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
     * method and is used for estimating the kinematic body velocity at the next timestep.
     * For non-kinematic bodies, this value is currently unspecified.
     */
    RigidBody.prototype.nextTranslation = function () {
        var res = this.rawSet.rbNextTranslation(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(res);
    };
    /**
     * The world-space next orientation of this rigid-body.
     *
     * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
     * method and is used for estimating the kinematic body velocity at the next timestep.
     * For non-kinematic bodies, this value is currently unspecified.
     */
    RigidBody.prototype.nextRotation = function () {
        var res = this.rawSet.rbNextRotation(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.fromRaw(res);
    };
    /**
     * Sets the translation of this rigid-body.
     *
     * @param tra - The world-space position of the rigid-body.
     * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
     *                 wasn't moving before modifying its position.
     */
    RigidBody.prototype.setTranslation = function (tra, wakeUp) {
        // #if DIM3
        this.rawSet.rbSetTranslation(this.handle, tra.x, tra.y, tra.z, wakeUp);
        // #endif
    };
    /**
     * Sets the linear velocity fo this rigid-body.
     *
     * @param vel - The linear velocity to set.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    RigidBody.prototype.setLinvel = function (vel, wakeUp) {
        var rawVel = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(vel);
        this.rawSet.rbSetLinvel(this.handle, rawVel, wakeUp);
        rawVel.free();
    };
    /**
     * The scale factor applied to the gravity affecting
     * this rigid-body.
     */
    RigidBody.prototype.gravityScale = function () {
        return this.rawSet.rbGravityScale(this.handle);
    };
    /**
     * Sets the scale factor applied to the gravity affecting
     * this rigid-body.
     *
     * @param factor - The scale factor to set. A value of 0.0 means
     *   that this rigid-body will on longer be affected by gravity.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    RigidBody.prototype.setGravityScale = function (factor, wakeUp) {
        this.rawSet.rbSetGravityScale(this.handle, factor, wakeUp);
    };
    // #if DIM3
    /**
     * Sets the rotation quaternion of this rigid-body.
     *
     * This does nothing if a zero quaternion is provided.
     *
     * @param rotation - The rotation to set.
     * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
     * wasn't moving before modifying its position.
     */
    RigidBody.prototype.setRotation = function (rot, wakeUp) {
        this.rawSet.rbSetRotation(this.handle, rot.x, rot.y, rot.z, rot.w, wakeUp);
    };
    /**
     * Sets the angular velocity fo this rigid-body.
     *
     * @param vel - The angular velocity to set.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    RigidBody.prototype.setAngvel = function (vel, wakeUp) {
        var rawVel = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(vel);
        this.rawSet.rbSetAngvel(this.handle, rawVel, wakeUp);
        rawVel.free();
    };
    // #endif
    /**
     * If this rigid body is kinematic, sets its future translation after the next timestep integration.
     *
     * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
     * an artificial velocity for this rigid-body from its current position and its next kinematic
     * position. This velocity will be used to compute forces on dynamic bodies interacting with
     * this body.
     *
     * @param t - The kinematic translation to set.
     */
    RigidBody.prototype.setNextKinematicTranslation = function (t) {
        // #if DIM3
        this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
        // #endif
    };
    // #if DIM3
    /**
     * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
     *
     * This should be used instead of `rigidBody.setRotation` to make the dynamic object
     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
     * an artificial velocity for this rigid-body from its current position and its next kinematic
     * position. This velocity will be used to compute forces on dynamic bodies interacting with
     * this body.
     *
     * @param rot - The kinematic rotation to set.
     */
    RigidBody.prototype.setNextKinematicRotation = function (rot) {
        this.rawSet.rbSetNextKinematicRotation(this.handle, rot.x, rot.y, rot.z, rot.w);
    };
    // #endif
    /**
     * The linear velocity of this rigid-body.
     */
    RigidBody.prototype.linvel = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.rbLinvel(this.handle));
    };
    // #if DIM3
    /**
     * The angular velocity of this rigid-body.
     */
    RigidBody.prototype.angvel = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.rbAngvel(this.handle));
    };
    // #endif
    /**
     * The mass of this rigid-body.
     */
    RigidBody.prototype.mass = function () {
        return this.rawSet.rbMass(this.handle);
    };
    /**
     * Put this rigid body to sleep.
     *
     * A sleeping body no longer moves and is no longer simulated by the physics engine unless
     * it is waken up. It can be woken manually with `this.wakeUp()` or automatically due to
     * external forces like contacts.
     */
    RigidBody.prototype.sleep = function () {
        this.rawSet.rbSleep(this.handle);
    };
    /**
     * Wakes this rigid-body up.
     *
     * A dynamic rigid-body that does not move during several consecutive frames will
     * be put to sleep by the physics engine, i.e., it will stop being simulated in order
     * to avoid useless computations.
     * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
     * the position of a dynamic body so that it is properly simulated afterwards.
     */
    RigidBody.prototype.wakeUp = function () {
        this.rawSet.rbWakeUp(this.handle);
    };
    /**
     * Is CCD enabled for this rigid-body?
     */
    RigidBody.prototype.isCcdEnabled = function () {
        this.rawSet.rbIsCcdEnabled(this.handle);
    };
    /**
     * The number of colliders attached to this rigid-body.
     */
    RigidBody.prototype.numColliders = function () {
        return this.rawSet.rbNumColliders(this.handle);
    };
    /**
     * Retrieves the handle of the `i-th` collider attached to this rigid-body.
     *
     * @param i - The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
     *         This index is **not** the same as the unique identifier of the collider.
     */
    RigidBody.prototype.collider = function (i) {
        return this.rawSet.rbCollider(this.handle, i);
    };
    /**
     * The status of this rigid-body: static, dynamic, or kinematic.
     */
    RigidBody.prototype.bodyType = function () {
        return this.rawSet.rbBodyType(this.handle);
    };
    /**
     * Is this rigid-body sleeping?
     */
    RigidBody.prototype.isSleeping = function () {
        return this.rawSet.rbIsSleeping(this.handle);
    };
    /**
     * Is the velocity of this rigid-body not zero?
     */
    RigidBody.prototype.isMoving = function () {
        return this.rawSet.rbIsMoving(this.handle);
    };
    /**
     * Is this rigid-body static?
     */
    RigidBody.prototype.isStatic = function () {
        return this.rawSet.rbIsStatic(this.handle);
    };
    /**
     * Is this rigid-body kinematic?
     */
    RigidBody.prototype.isKinematic = function () {
        return this.rawSet.rbIsKinematic(this.handle);
    };
    /**
     * Is this rigid-body dynamic?
     */
    RigidBody.prototype.isDynamic = function () {
        return this.rawSet.rbIsDynamic(this.handle);
    };
    /**
     * The linear damping coefficient of this rigid-body.
     */
    RigidBody.prototype.linearDamping = function () {
        return this.rawSet.rbLinearDamping(this.handle);
    };
    /**
     * The angular damping coefficient of this rigid-body.
     */
    RigidBody.prototype.angularDamping = function () {
        return this.rawSet.rbAngularDamping(this.handle);
    };
    /**
     * Sets the linear damping factor applied to this rigid-body.
     *
     * @param factor - The damping factor to set.
     */
    RigidBody.prototype.setLinearDamping = function (factor) {
        this.rawSet.rbSetLinearDamping(this.handle, factor);
    };
    /**
     * Sets the linear damping factor applied to this rigid-body.
     *
     * @param factor - The damping factor to set.
     */
    RigidBody.prototype.setAngularDamping = function (factor) {
        this.rawSet.rbSetAngularDamping(this.handle, factor);
    };
    /**
     * Applies a force at the center-of-mass of this rigid-body.
     *
     * @param force - the world-space force to apply on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    RigidBody.prototype.applyForce = function (force, wakeUp) {
        var rawForce = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(force);
        this.rawSet.rbApplyForce(this.handle, rawForce, wakeUp);
        rawForce.free();
    };
    /**
     * Applies an impulse at the center-of-mass of this rigid-body.
     *
     * @param impulse - the world-space impulse to apply on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    RigidBody.prototype.applyImpulse = function (impulse, wakeUp) {
        var rawImpulse = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(impulse);
        this.rawSet.rbApplyImpulse(this.handle, rawImpulse, wakeUp);
        rawImpulse.free();
    };
    // #if DIM3
    /**
     * Applies a torque at the center-of-mass of this rigid-body.
     *
     * @param torque - the world-space torque to apply on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    RigidBody.prototype.applyTorque = function (torque, wakeUp) {
        var rawTorque = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(torque);
        this.rawSet.rbApplyTorque(this.handle, rawTorque, wakeUp);
        rawTorque.free();
    };
    // #endif
    // #if DIM3
    /**
     * Applies an impulsive torque at the center-of-mass of this rigid-body.
     *
     * @param torqueImpulse - the world-space torque impulse to apply on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    RigidBody.prototype.applyTorqueImpulse = function (torqueImpulse, wakeUp) {
        var rawTorqueImpulse = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(torqueImpulse);
        this.rawSet.rbApplyTorqueImpulse(this.handle, rawTorqueImpulse, wakeUp);
        rawTorqueImpulse.free();
    };
    // #endif
    /**
     * Applies a force at the given world-space point of this rigid-body.
     *
     * @param force - the world-space force to apply on the rigid-body.
     * @param point - the world-space point where the impulse is to be applied on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    RigidBody.prototype.applyForceAtPoint = function (force, point, wakeUp) {
        var rawForce = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(force);
        var rawPoint = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(point);
        this.rawSet.rbApplyForceAtPoint(this.handle, rawForce, rawPoint, wakeUp);
        rawForce.free();
        rawPoint.free();
    };
    /**
     * Applies an impulse at the given world-space point of this rigid-body.
     *
     * @param impulse - the world-space impulse to apply on the rigid-body.
     * @param point - the world-space point where the impulse is to be applied on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    RigidBody.prototype.applyImpulseAtPoint = function (impulse, point, wakeUp) {
        var rawImpulse = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(impulse);
        var rawPoint = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(point);
        this.rawSet.rbApplyImpulseAtPoint(this.handle, rawImpulse, rawPoint, wakeUp);
        rawImpulse.free();
        rawPoint.free();
    };
    return RigidBody;
}());

var RigidBodyDesc = /** @class */ (function () {
    function RigidBodyDesc(status) {
        this.status = status;
        this.translation = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.rotation = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.identity();
        this.gravityScale = 1.0;
        this.linvel = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.mass = 0.0;
        this.translationsEnabled = true;
        this.centerOfMass = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        // #if DIM3
        this.angvel = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.principalAngularInertia = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.angularInertiaLocalFrame = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.identity();
        this.rotationsEnabledX = true;
        this.rotationsEnabledY = true;
        this.rotationsEnabledZ = true;
        // #endif
        this.linearDamping = 0.0;
        this.angularDamping = 0.0;
        this.canSleep = true;
        this.ccdEnabled = false;
        this.dominanceGroup = 0;
    }
    /**
     * A rigid-body descriptor used to build a dynamic rigid-body.
     */
    RigidBodyDesc.newDynamic = function () {
        return new RigidBodyDesc(RigidBodyType.Dynamic);
    };
    /**
     * A rigid-body descriptor used to build a position-based kinematic rigid-body.
     */
    RigidBodyDesc.newKinematicPositionBased = function () {
        return new RigidBodyDesc(RigidBodyType.KinematicPositionBased);
    };
    /**
     * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
     */
    RigidBodyDesc.newKinematicVelocityBased = function () {
        return new RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
    };
    /**
     * A rigid-body descriptor used to build a static rigid-body.
     */
    RigidBodyDesc.newStatic = function () {
        return new RigidBodyDesc(RigidBodyType.Static);
    };
    RigidBodyDesc.prototype.setDominanceGroup = function (group) {
        this.dominanceGroup = group;
        return this;
    };
    // #if DIM3
    /**
     * Sets the initial translation of the rigid-body to create.
     *
     * @param tra - The translation to set.
     */
    RigidBodyDesc.prototype.setTranslation = function (x, y, z) {
        if (typeof x != "number" || typeof y != "number" || typeof z != "number")
            throw TypeError("The translation components must be numbers.");
        this.translation = { x: x, y: y, z: z };
        return this;
    };
    // #endif
    /**
     * Sets the initial rotation of the rigid-body to create.
     *
     * @param rot - The rotation to set.
     */
    RigidBodyDesc.prototype.setRotation = function (rot) {
        this.rotation = rot;
        return this;
    };
    /**
     * Sets the scale factor applied to the gravity affecting
     * the rigid-body being built.
     *
     * @param scale - The scale factor. Set this to `0.0` if the rigid-body
     *   needs to ignore gravity.
     */
    RigidBodyDesc.prototype.setGravityScale = function (scale) {
        this.gravityScale = scale;
        return this;
    };
    /**
     * Sets the initial mass of the rigid-body being built, before adding colliders' contributions.
     *
     * @param mass − The initial mass of the rigid-body to create.
     */
    RigidBodyDesc.prototype.setAdditionalMass = function (mass) {
        this.mass = mass;
        return this;
    };
    /**
     * Locks all translations that would have resulted from forces on
     * the created rigid-body.
     */
    RigidBodyDesc.prototype.lockTranslations = function () {
        this.translationsEnabled = false;
        return this;
    };
    // #if DIM3
    /**
     * Sets the initial linear velocity of the rigid-body to create.
     *
     * @param x - The linear velocity to set along the `x` axis.
     * @param y - The linear velocity to set along the `y` axis.
     * @param z - The linear velocity to set along the `z` axis.
     */
    RigidBodyDesc.prototype.setLinvel = function (x, y, z) {
        if (typeof x != "number" || typeof y != "number" || typeof z != "number")
            throw TypeError("The linvel components must be numbers.");
        this.linvel = { x: x, y: y, z: z };
        return this;
    };
    /**
     * Sets the initial angular velocity of the rigid-body to create.
     *
     * @param vel - The angular velocity to set.
     */
    RigidBodyDesc.prototype.setAngvel = function (vel) {
        this.angvel = vel;
        return this;
    };
    /**
     * Sets the mass properties of the rigid-body being built.
     *
     * Note that the final mass properties of the rigid-bodies depends
     * on the initial mass-properties of the rigid-body (set by this method)
     * to which is added the contributions of all the colliders with non-zero density
     * attached to this rigid-body.
     *
     * Therefore, if you want your provided mass properties to be the final
     * mass properties of your rigid-body, don't attach colliders to it, or
     * only attach colliders with densities equal to zero.
     *
     * @param mass − The initial mass of the rigid-body to create.
     * @param centerOfMass − The initial center-of-mass of the rigid-body to create.
     * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
     *                                  These are the eigenvalues of the angular inertia matrix.
     * @param angularInertiaLocalFrame − The initial local angular inertia frame of the rigid-body to create.
     *                                   These are the eigenvectors of the angular inertia matrix.
     */
    RigidBodyDesc.prototype.setAdditionalMassProperties = function (mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame) {
        this.mass = mass;
        this.centerOfMass = centerOfMass;
        this.principalAngularInertia = principalAngularInertia;
        this.angularInertiaLocalFrame = angularInertiaLocalFrame;
        return this;
    };
    /**
     * Sets the mass properties of the rigid-body being built.
     *
     * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
     */
    RigidBodyDesc.prototype.setAdditionalPrincipalAngularInertia = function (principalAngularInertia) {
        this.principalAngularInertia = principalAngularInertia;
        return this;
    };
    /**
     * Allow rotation of this rigid-body only along specific axes.
     * @param rotationsEnabledX - Are rotations along the X axis enabled?
     * @param rotationsEnabledY - Are rotations along the y axis enabled?
     * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
     */
    RigidBodyDesc.prototype.restrictRotations = function (rotationsEnabledX, rotationsEnabledY, rotationsEnabledZ) {
        this.rotationsEnabledX = rotationsEnabledX;
        this.rotationsEnabledY = rotationsEnabledY;
        this.rotationsEnabledZ = rotationsEnabledZ;
        return this;
    };
    /**
     * Locks all rotations that would have resulted from forces on
     * the created rigid-body.
     */
    RigidBodyDesc.prototype.lockRotations = function () {
        return this.restrictRotations(false, false, false);
    };
    // #endif
    /**
     * Sets the linear damping of the rigid-body to create.
     *
     * This will progressively slowdown the translational movement of the rigid-body.
     *
     * @param damping - The angular damping coefficient. Should be >= 0. The higher this
     *                  value is, the stronger the translational slowdown will be.
     */
    RigidBodyDesc.prototype.setLinearDamping = function (damping) {
        this.linearDamping = damping;
        return this;
    };
    /**
     * Sets the angular damping of the rigid-body to create.
     *
     * This will progressively slowdown the rotational movement of the rigid-body.
     *
     * @param damping - The angular damping coefficient. Should be >= 0. The higher this
     *                  value is, the stronger the rotational slowdown will be.
     */
    RigidBodyDesc.prototype.setAngularDamping = function (damping) {
        this.angularDamping = damping;
        return this;
    };
    /**
     * Sets whether or not the rigid-body to create can sleep.
     *
     * @param can - true if the rigid-body can sleep, false if it can't.
     */
    RigidBodyDesc.prototype.setCanSleep = function (can) {
        this.canSleep = can;
        return this;
    };
    /**
     * Sets whether Continuous Collision Detection (CCD) is enabled for this rigid-body.
     *
     * @param enabled - true if the rigid-body has CCD enabled.
     */
    RigidBodyDesc.prototype.setCcdEnabled = function (enabled) {
        this.ccdEnabled = enabled;
        return this;
    };
    return RigidBodyDesc;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/dynamics/rigid_body_set.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/dynamics/rigid_body_set.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RigidBodySet": () => (/* binding */ RigidBodySet)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
/* harmony import */ var _rigid_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rigid_body */ "./node_modules/@dimforge/rapier3d/dynamics/rigid_body.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _rigid_body__WEBPACK_IMPORTED_MODULE_2__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _rigid_body__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/**
 * A set of rigid bodies that can be handled by a physics pipeline.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `jointSet.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
var RigidBodySet = /** @class */ (function () {
    function RigidBodySet(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawRigidBodySet();
    }
    /**
     * Release the WASM memory occupied by this rigid-body set.
     */
    RigidBodySet.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    /**
     * Creates a new rigid-body and return its integer handle.
     *
     * @param desc - The description of the rigid-body to create.
     */
    RigidBodySet.prototype.createRigidBody = function (desc) {
        var rawTra = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(desc.translation);
        var rawRot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(desc.rotation);
        var rawLv = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(desc.linvel);
        var rawCom = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(desc.centerOfMass);
        // #if DIM3
        var rawAv = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(desc.angvel);
        var rawPrincipalInertia = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(desc.principalAngularInertia);
        var rawInertiaFrame = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(desc.angularInertiaLocalFrame);
        // #endif
        var handle = this.raw.createRigidBody(rawTra, rawRot, desc.gravityScale, desc.mass, desc.translationsEnabled, rawCom, rawLv, 
        // #if DIM3
        rawAv, rawPrincipalInertia, rawInertiaFrame, desc.rotationsEnabledX, desc.rotationsEnabledY, desc.rotationsEnabledZ, 
        // #endif
        desc.linearDamping, desc.angularDamping, desc.status, desc.canSleep, desc.ccdEnabled, desc.dominanceGroup);
        rawTra.free();
        rawRot.free();
        rawLv.free();
        rawCom.free();
        // #if DIM3
        rawAv.free();
        rawPrincipalInertia.free();
        rawInertiaFrame.free();
        // #endif
        return handle;
    };
    /**
     * Removes a rigid-body from this set.
     *
     * This will also remove all the colliders and joints attached to the rigid-body.
     *
     * @param handle - The integer handle of the rigid-body to remove.
     * @param colliders - The set of colliders that may contain colliders attached to the removed rigid-body.
     * @param joints - The set of joints that may contain joints attached to the removed rigid-body.
     */
    RigidBodySet.prototype.remove = function (handle, islands, colliders, joints) {
        this.raw.remove(handle, islands.raw, colliders.raw, joints.raw);
    };
    /**
     * The number of rigid-bodies on this set.
     */
    RigidBodySet.prototype.len = function () {
        return this.raw.len();
    };
    /**
     * Does this set contain a rigid-body with the given handle?
     *
     * @param handle - The rigid-body handle to check.
     */
    RigidBodySet.prototype.contains = function (handle) {
        return this.raw.contains(handle);
    };
    /**
     * Gets the rigid-body with the given handle.
     *
     * @param handle - The handle of the rigid-body to retrieve.
     */
    RigidBodySet.prototype.get = function (handle) {
        if (this.raw.contains(handle)) {
            return new _rigid_body__WEBPACK_IMPORTED_MODULE_2__.RigidBody(this.raw, handle);
        }
        else {
            return null;
        }
    };
    /**
     * Applies the given closure to each rigid-body contained by this set.
     *
     * @param f - The closure to apply.
     */
    RigidBodySet.prototype.forEachRigidBody = function (f) {
        var _this = this;
        this.forEachRigidBodyHandle(function (handle) {
            f(new _rigid_body__WEBPACK_IMPORTED_MODULE_2__.RigidBody(_this.raw, handle));
        });
    };
    /**
     * Applies the given closure to the handle of each rigid-body contained by this set.
     *
     * @param f - The closure to apply.
     */
    RigidBodySet.prototype.forEachRigidBodyHandle = function (f) {
        this.raw.forEachRigidBodyHandle(f);
    };
    /**
     * Applies the given closure to each active rigid-bodies contained by this set.
     *
     * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
     *
     * @param f - The closure to apply.
     */
    RigidBodySet.prototype.forEachActiveRigidBody = function (islands, f) {
        var _this = this;
        islands.forEachActiveRigidBodyHandle(function (handle) {
            f(new _rigid_body__WEBPACK_IMPORTED_MODULE_2__.RigidBody(_this.raw, handle));
        });
    };
    return RigidBodySet;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/exports.js":
/*!****************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/exports.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ActiveCollisionTypes),
/* harmony export */   "ActiveEvents": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.ActiveEvents),
/* harmony export */   "ActiveHooks": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.ActiveHooks),
/* harmony export */   "Ball": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Ball),
/* harmony export */   "BallJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.BallJoint),
/* harmony export */   "BroadPhase": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.BroadPhase),
/* harmony export */   "CCDSolver": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.CCDSolver),
/* harmony export */   "Capsule": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Capsule),
/* harmony export */   "CoefficientCombineRule": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.CoefficientCombineRule),
/* harmony export */   "Collider": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Collider),
/* harmony export */   "ColliderDesc": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ColliderDesc),
/* harmony export */   "ColliderSet": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ColliderSet),
/* harmony export */   "Cone": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Cone),
/* harmony export */   "ConvexPolyhedron": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ConvexPolyhedron),
/* harmony export */   "Cuboid": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Cuboid),
/* harmony export */   "Cylinder": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Cylinder),
/* harmony export */   "EventQueue": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.EventQueue),
/* harmony export */   "FixedJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.FixedJoint),
/* harmony export */   "Heightfield": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Heightfield),
/* harmony export */   "IntegrationParameters": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.IntegrationParameters),
/* harmony export */   "IslandManager": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.IslandManager),
/* harmony export */   "Joint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.Joint),
/* harmony export */   "JointParams": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.JointParams),
/* harmony export */   "JointSet": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.JointSet),
/* harmony export */   "JointType": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.JointType),
/* harmony export */   "NarrowPhase": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.NarrowPhase),
/* harmony export */   "PhysicsPipeline": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.PhysicsPipeline),
/* harmony export */   "PointColliderProjection": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.PointColliderProjection),
/* harmony export */   "Polyline": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Polyline),
/* harmony export */   "PrismaticJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.PrismaticJoint),
/* harmony export */   "Quaternion": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Quaternion),
/* harmony export */   "Ray": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Ray),
/* harmony export */   "RayColliderIntersection": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RayColliderIntersection),
/* harmony export */   "RayColliderToi": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RayColliderToi),
/* harmony export */   "RevoluteJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RevoluteJoint),
/* harmony export */   "RigidBody": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RigidBody),
/* harmony export */   "RigidBodyDesc": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RigidBodyDesc),
/* harmony export */   "RigidBodySet": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RigidBodySet),
/* harmony export */   "RigidBodyType": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RigidBodyType),
/* harmony export */   "RotationOps": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps),
/* harmony export */   "RoundCone": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RoundCone),
/* harmony export */   "RoundConvexPolyhedron": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RoundConvexPolyhedron),
/* harmony export */   "RoundCuboid": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RoundCuboid),
/* harmony export */   "RoundCylinder": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RoundCylinder),
/* harmony export */   "RoundTriangle": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RoundTriangle),
/* harmony export */   "Segment": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Segment),
/* harmony export */   "SerializationPipeline": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.SerializationPipeline),
/* harmony export */   "ShapeColliderTOI": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ShapeColliderTOI),
/* harmony export */   "ShapeType": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ShapeType),
/* harmony export */   "SolverFlags": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.SolverFlags),
/* harmony export */   "SpringModel": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.SpringModel),
/* harmony export */   "TempContactManifold": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.TempContactManifold),
/* harmony export */   "TriMesh": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.TriMesh),
/* harmony export */   "Triangle": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Triangle),
/* harmony export */   "UnitJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.UnitJoint),
/* harmony export */   "Vector3": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Vector3),
/* harmony export */   "VectorOps": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps),
/* harmony export */   "World": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.World),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/@dimforge/rapier3d/math.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamics */ "./node_modules/@dimforge/rapier3d/dynamics/index.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geometry */ "./node_modules/@dimforge/rapier3d/geometry/index.js");
/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipeline */ "./node_modules/@dimforge/rapier3d/pipeline/index.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _dynamics__WEBPACK_IMPORTED_MODULE_2__, _geometry__WEBPACK_IMPORTED_MODULE_3__, _pipeline__WEBPACK_IMPORTED_MODULE_4__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _dynamics__WEBPACK_IMPORTED_MODULE_2__, _geometry__WEBPACK_IMPORTED_MODULE_3__, _pipeline__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

function version() {
    return (0,_raw__WEBPACK_IMPORTED_MODULE_0__.version)();
}






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/broad_phase.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/broad_phase.js ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BroadPhase": () => (/* binding */ BroadPhase)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__]);
_raw__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * The broad-phase used for coarse collision-detection.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `broadPhase.free()`
 * once you are done using it.
 */
var BroadPhase = /** @class */ (function () {
    function BroadPhase(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawBroadPhase();
    }
    /**
     * Release the WASM memory occupied by this broad-phase.
     */
    BroadPhase.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    return BroadPhase;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/collider.js":
/*!**************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/collider.js ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* binding */ ActiveCollisionTypes),
/* harmony export */   "Collider": () => (/* binding */ Collider),
/* harmony export */   "ColliderDesc": () => (/* binding */ ColliderDesc)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier3d/dynamics/coefficient_combine_rule.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shape */ "./node_modules/@dimforge/rapier3d/geometry/shape.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_math__WEBPACK_IMPORTED_MODULE_0__, _shape__WEBPACK_IMPORTED_MODULE_2__]);
([_math__WEBPACK_IMPORTED_MODULE_0__, _shape__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/// Flags affecting whether or not collision-detection happens between two colliders
/// depending on the type of rigid-bodies they are attached to.
var ActiveCollisionTypes;
(function (ActiveCollisionTypes) {
    /// Enable collision-detection between a collider attached to a dynamic body
    /// and another collider attached to a dynamic body.
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_DYNAMIC"] = 1] = "DYNAMIC_DYNAMIC";
    /// Enable collision-detection between a collider attached to a dynamic body
    /// and another collider attached to a kinematic body.
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_KINEMATIC"] = 12] = "DYNAMIC_KINEMATIC";
    /// Enable collision-detection between a collider attached to a dynamic body
    /// and another collider attached to a static body (or not attached to any body).
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_STATIC"] = 2] = "DYNAMIC_STATIC";
    /// Enable collision-detection between a collider attached to a kinematic body
    /// and another collider attached to a kinematic body.
    ActiveCollisionTypes[ActiveCollisionTypes["KINEMATIC_KINEMATIC"] = 52224] = "KINEMATIC_KINEMATIC";
    /// Enable collision-detection between a collider attached to a kinematic body
    /// and another collider attached to a static body (or not attached to any body).
    ActiveCollisionTypes[ActiveCollisionTypes["KINEMATIC_STATIC"] = 8704] = "KINEMATIC_STATIC";
    /// Enable collision-detection between a collider attached to a static body (or
    /// not attached to any body) and another collider attached to a static body (or
    /// not attached to any body).
    ActiveCollisionTypes[ActiveCollisionTypes["STATIC_STATIC"] = 32] = "STATIC_STATIC";
    /// The default active collision types, enabling collisions between a dynamic body
    /// and another body of any type, but not enabling collisions between two non-dynamic bodies.
    ActiveCollisionTypes[ActiveCollisionTypes["DEFAULT"] = 15] = "DEFAULT";
    /// Enable collisions between any kind of rigid-bodies (including between two non-dynamic bodies).
    ActiveCollisionTypes[ActiveCollisionTypes["ALL"] = 60943] = "ALL";
})(ActiveCollisionTypes || (ActiveCollisionTypes = {}));
/**
 * A geometric entity that can be attached to a body so it can be affected
 * by contacts and proximity queries.
 */
var Collider = /** @class */ (function () {
    function Collider(rawSet, handle) {
        this.rawSet = rawSet;
        this.handle = handle;
    }
    /**
     * Checks if this collider is still valid (i.e. that it has
     * not been deleted from the collider set yet.
     */
    Collider.prototype.isValid = function () {
        return this.rawSet.contains(this.handle);
    };
    /**
     * The world-space translation of this rigid-body.
     */
    Collider.prototype.translation = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.coTranslation(this.handle));
    };
    /**
     * The world-space orientation of this rigid-body.
     */
    Collider.prototype.rotation = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.fromRaw(this.rawSet.coRotation(this.handle));
    };
    /**
     * Is this collider a sensor?
     */
    Collider.prototype.isSensor = function () {
        return this.rawSet.coIsSensor(this.handle);
    };
    Collider.prototype.setSensor = function (isSensor) {
        this.rawSet.coSetSensor(this.handle, isSensor);
    };
    Collider.prototype.setShape = function (shape) {
        var rawShape = shape.intoRaw();
        this.rawSet.coSetShape(this.handle, rawShape);
        rawShape.free();
    };
    /**
     * Sets the restitution coefficient of the collider to be created.
     *
     * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
     *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
     *                   constraints solver).
     */
    Collider.prototype.setRestitution = function (restitution) {
        this.rawSet.coSetRestitution(this.handle, restitution);
    };
    /**
     * Sets the friction coefficient of the collider to be created.
     *
     * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
     *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
     *                   being built.
     */
    Collider.prototype.setFriction = function (friction) {
        this.rawSet.coSetFriction(this.handle, friction);
    };
    /**
     * Gets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     */
    Collider.prototype.frictionCombineRule = function () {
        return this.rawSet.coFrictionCombineRule(this.handle);
    };
    /**
     * Sets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    Collider.prototype.setFrictionCombineRule = function (rule) {
        this.rawSet.coSetFrictionCombineRule(this.handle, rule);
    };
    /**
     * Gets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     */
    Collider.prototype.restitutionCombineRule = function () {
        return this.rawSet.coRestitutionCombineRule(this.handle);
    };
    /**
     * Sets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    Collider.prototype.setRestitutionCombineRule = function (rule) {
        this.rawSet.coSetRestitutionCombineRule(this.handle, rule);
    };
    /**
     * Sets the collision groups used by this collider.
     *
     * Two colliders will interact iff. their collision groups are compatible.
     * See the documentation of `InteractionGroups` for details on teh used bit pattern.
     *
     * @param groups - The collision groups used for the collider being built.
     */
    Collider.prototype.setCollisionGroups = function (groups) {
        this.rawSet.coSetCollisionGroups(this.handle, groups);
    };
    /**
     * Sets the solver groups used by this collider.
     *
     * Forces between two colliders in contact will be computed iff their solver
     * groups are compatible.
     * See the documentation of `InteractionGroups` for details on the used bit pattern.
     *
     * @param groups - The solver groups used for the collider being built.
     */
    Collider.prototype.setSolverGroups = function (groups) {
        this.rawSet.coSetSolverGroups(this.handle, groups);
    };
    /**
     * Get the physics hooks active for this collider.
     */
    Collider.prototype.activeHooks = function () {
        this.rawSet.coActiveHooks(this.handle);
    };
    /**
     * Set the physics hooks active for this collider.
     *
     * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
     *
     * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
     */
    Collider.prototype.setActiveHooks = function (activeHooks) {
        this.rawSet.coSetActiveHooks(this.handle, activeHooks);
    };
    /**
     * The events active for this collider.
     */
    Collider.prototype.activeEvents = function () {
        return this.rawSet.coActiveEvents(this.handle);
    };
    /**
     * Set the events active for this collider.
     *
     * Use this to enable contact and/or intersection event reporting for this collider.
     *
     * @param activeEvents - The events active for contact/intersection pairs involving this collider.
     */
    Collider.prototype.setActiveEvents = function (activeEvents) {
        this.rawSet.coSetActiveEvents(this.handle, activeEvents);
    };
    /**
     * Gets the collision types active for this collider.
     */
    Collider.prototype.activeCollisionTypes = function () {
        return this.rawSet.coActiveCollisionTypes(this.handle);
    };
    /**
     * Set the collision types active for this collider.
     *
     * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
     */
    Collider.prototype.setActiveCollisionTypes = function (activeCollisionTypes) {
        this.rawSet.coSetActiveCollisionTypes(this.handle, activeCollisionTypes);
    };
    /**
     * Sets the translation of this collider.
     *
     * @param tra - The world-space position of the collider.
     */
    Collider.prototype.setTranslation = function (tra) {
        // #if DIM3
        this.rawSet.coSetTranslation(this.handle, tra.x, tra.y, tra.z);
        // #endif
    };
    /**
     * Sets the translation of this collider relative to its parent rigid-body.
     *
     * Does nothing if this collider isn't attached to a rigid-body.
     *
     * @param tra - The new translation of the collider relative to its parent.
     */
    Collider.prototype.setTranslationWrtParent = function (tra) {
        // #if DIM3
        this.rawSet.coSetTranslationWrtParent(this.handle, tra.x, tra.y, tra.z);
        // #endif
    };
    // #if DIM3
    /**
     * Sets the rotation quaternion of this collider.
     *
     * This does nothing if a zero quaternion is provided.
     *
     * @param rotation - The rotation to set.
     */
    Collider.prototype.setRotation = function (rot) {
        this.rawSet.coSetRotation(this.handle, rot.x, rot.y, rot.z, rot.w);
    };
    /**
     * Sets the rotation quaternion of this collider relative to its parent rigid-body.
     *
     * This does nothing if a zero quaternion is provided or if this collider isn't
     * attached to a rigid-body.
     *
     * @param rotation - The rotation to set.
     */
    Collider.prototype.setRotationWrtParent = function (rot) {
        this.rawSet.coSetRotationWrtParent(this.handle, rot.x, rot.y, rot.z, rot.w);
    };
    // #endif
    /**
     * The type of the shape of this collider.
     */
    Collider.prototype.shapeType = function () {
        return this.rawSet.coShapeType(this.handle);
    };
    /**
     * The half-extents of this collider if it is a cuboid shape.
     */
    Collider.prototype.halfExtents = function () {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.coHalfExtents(this.handle));
    };
    /**
     * The radius of this collider if it is a ball, cylinder, capsule, or cone shape.
     */
    Collider.prototype.radius = function () {
        return this.rawSet.coRadius(this.handle);
    };
    /**
     * The radius of the round edges of this collider if it is a round cylinder.
     */
    Collider.prototype.roundRadius = function () {
        return this.rawSet.coRoundRadius(this.handle);
    };
    /**
     * The half height of this collider if it is a cylinder, capsule, or cone shape.
     */
    Collider.prototype.halfHeight = function () {
        return this.rawSet.coHalfHeight(this.handle);
    };
    /**
     * If this collider has a triangle mesh, polyline, convex polygon, or convex polyhedron shape,
     * this returns the vertex buffer of said shape.
     */
    Collider.prototype.vertices = function () {
        return this.rawSet.coVertices(this.handle);
    };
    /**
     * If this collider has a triangle mesh, polyline, or convex polyhedron shape,
     * this returns the index buffer of said shape.
     */
    Collider.prototype.indices = function () {
        return this.rawSet.coIndices(this.handle);
    };
    /**
     * If this collider has a heightfield shape, this returns the heights buffer of
     * the heightfield.
     * In 3D, the returned height matrix is provided in column-major order.
     */
    Collider.prototype.heightfieldHeights = function () {
        return this.rawSet.coHeightfieldHeights(this.handle);
    };
    /**
     * If this collider has a heightfield shape, this returns the scale
     * applied to it.
     */
    Collider.prototype.heightfieldScale = function () {
        var scale = this.rawSet.coHeightfieldScale(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(scale);
    };
    // #if DIM3
    /**
     * If this collider has a heightfield shape, this returns the number of
     * rows of its height matrix.
     */
    Collider.prototype.heightfieldNRows = function () {
        return this.rawSet.coHeightfieldNRows(this.handle);
    };
    /**
     * If this collider has a heightfield shape, this returns the number of
     * columns of its height matrix.
     */
    Collider.prototype.heightfieldNCols = function () {
        return this.rawSet.coHeightfieldNCols(this.handle);
    };
    // #endif
    /**
     * The unique integer identifier of the rigid-body this collider is attached to.
     */
    Collider.prototype.parent = function () {
        return this.rawSet.coParent(this.handle);
    };
    /**
     * The friction coefficient of this collider.
     */
    Collider.prototype.friction = function () {
        return this.rawSet.coFriction(this.handle);
    };
    /**
     * The density of this collider.
     */
    Collider.prototype.density = function () {
        return this.rawSet.coDensity(this.handle);
    };
    /**
     * The collision groups of this collider.
     */
    Collider.prototype.collisionGroups = function () {
        return this.rawSet.coCollisionGroups(this.handle);
    };
    /**
     * The solver groups of this collider.
     */
    Collider.prototype.solverGroups = function () {
        return this.rawSet.coSolverGroups(this.handle);
    };
    return Collider;
}());

var ColliderDesc = /** @class */ (function () {
    /**
     * Initializes a collider descriptor from the collision shape.
     *
     * @param shape - The shape of the collider being built.
     */
    function ColliderDesc(shape) {
        this.shape = shape;
        this.useMassProps = false;
        this.density = 1.0;
        this.friction = 0.5;
        this.restitution = 0.0;
        this.rotation = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.identity();
        this.translation = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.isSensor = false;
        this.collisionGroups = 4294967295;
        this.solverGroups = 4294967295;
        this.frictionCombineRule = _dynamics__WEBPACK_IMPORTED_MODULE_1__.CoefficientCombineRule.Average;
        this.restitutionCombineRule = _dynamics__WEBPACK_IMPORTED_MODULE_1__.CoefficientCombineRule.Average;
        this.activeCollisionTypes = ActiveCollisionTypes.DEFAULT;
        this.activeEvents = 0;
        this.activeHooks = 0;
        this.mass = 0.0;
        this.centerOfMass = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        // #if DIM3
        this.principalAngularInertia = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.angularInertiaLocalFrame = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.identity();
        // #endif
    }
    /**
     * Create a new collider descriptor with a ball shape.
     *
     * @param radius - The radius of the ball.
     */
    ColliderDesc.ball = function (radius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Ball(radius);
        return new ColliderDesc(shape);
    };
    /**
     * Create a new collider descriptor with a capsule shape.
     *
     * @param halfHeight - The half-height of the capsule, along the `y` axis.
     * @param radius - The radius of the capsule basis.
     */
    ColliderDesc.capsule = function (halfHeight, radius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Capsule(halfHeight, radius);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new segment shape.
     *
     * @param a - The first point of the segment.
     * @param b - The second point of the segment.
     */
    ColliderDesc.segment = function (a, b) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Segment(a, b);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new triangle shape.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     */
    ColliderDesc.triangle = function (a, b, c) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Triangle(a, b, c);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new triangle shape with round corners.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     * @param borderRadius - The radius of the borders of this triangle. In 3D,
     *   this is also equal to half the thickness of the triangle.
     */
    ColliderDesc.roundTriangle = function (a, b, c, borderRadius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.RoundTriangle(a, b, c, borderRadius);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new collider descriptor with a polyline shape.
     *
     * @param vertices - The coordinates of the polyline's vertices.
     * @param indices - The indices of the polyline's segments. If this is `null`,
     *    the vertices are assumed to describe a line strip.
     */
    ColliderDesc.polyline = function (vertices, indices) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Polyline(vertices, indices);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new collider descriptor with a triangle mesh shape.
     *
     * @param vertices - The coordinates of the triangle mesh's vertices.
     * @param indices - The indices of the triangle mesh's triangles.
     */
    ColliderDesc.trimesh = function (vertices, indices) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.TriMesh(vertices, indices);
        return new ColliderDesc(shape);
    };
    // #if DIM3
    /**
     * Creates a new collider descriptor with a cuboid shape.
     *
     * @param hx - The half-width of the rectangle along its local `x` axis.
     * @param hy - The half-width of the rectangle along its local `y` axis.
     * @param hz - The half-width of the rectangle along its local `z` axis.
     */
    ColliderDesc.cuboid = function (hx, hy, hz) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Cuboid(hx, hy, hz);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new collider descriptor with a rectangular shape with round borders.
     *
     * @param hx - The half-width of the rectangle along its local `x` axis.
     * @param hy - The half-width of the rectangle along its local `y` axis.
     * @param hz - The half-width of the rectangle along its local `z` axis.
     * @param borderRadius - The radius of the cuboid's borders.
     */
    ColliderDesc.roundCuboid = function (hx, hy, hz, borderRadius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.RoundCuboid(hx, hy, hz, borderRadius);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new collider descriptor with a heightfield shape.
     *
     * @param nrows − The number of rows in the heights matrix.
     * @param ncols - The number of columns in the heights matrix.
     * @param heights - The heights of the heightfield along its local `y` axis,
     *                  provided as a matrix stored in column-major order.
     * @param scale - The scale factor applied to the heightfield.
     */
    ColliderDesc.heightfield = function (nrows, ncols, heights, scale) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Heightfield(nrows, ncols, heights, scale);
        return new ColliderDesc(shape);
    };
    /**
     * Create a new collider descriptor with a cylinder shape.
     *
     * @param halfHeight - The half-height of the cylinder, along the `y` axis.
     * @param radius - The radius of the cylinder basis.
     */
    ColliderDesc.cylinder = function (halfHeight, radius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Cylinder(halfHeight, radius);
        return new ColliderDesc(shape);
    };
    /**
     * Create a new collider descriptor with a cylinder shape with rounded corners.
     *
     * @param halfHeight - The half-height of the cylinder, along the `y` axis.
     * @param radius - The radius of the cylinder basis.
     * @param borderRadius - The radius of the cylinder's rounded edges and vertices.
     */
    ColliderDesc.roundCylinder = function (halfHeight, radius, borderRadius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.RoundCylinder(halfHeight, radius, borderRadius);
        return new ColliderDesc(shape);
    };
    /**
     * Create a new collider descriptor with a cone shape.
     *
     * @param halfHeight - The half-height of the cone, along the `y` axis.
     * @param radius - The radius of the cone basis.
     */
    ColliderDesc.cone = function (halfHeight, radius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.Cone(halfHeight, radius);
        return new ColliderDesc(shape);
    };
    /**
     * Create a new collider descriptor with a cone shape with rounded corners.
     *
     * @param halfHeight - The half-height of the cone, along the `y` axis.
     * @param radius - The radius of the cone basis.
     * @param borderRadius - The radius of the cone's rounded edges and vertices.
     */
    ColliderDesc.roundCone = function (halfHeight, radius, borderRadius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.RoundCone(halfHeight, radius, borderRadius);
        return new ColliderDesc(shape);
    };
    /**
     * Computes the convex-hull of the given points and use the resulting
     * convex polyhedron as the shape for this new collider descriptor.
     *
     * @param points - The point that will be used to compute the convex-hull.
     */
    ColliderDesc.convexHull = function (points) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.ConvexPolyhedron(points, null);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new collider descriptor that uses the given set of points assumed
     * to form a convex polyline (no convex-hull computation will be done).
     *
     * @param vertices - The vertices of the convex polyline.
     */
    ColliderDesc.convexMesh = function (vertices, indices) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.ConvexPolyhedron(vertices, indices);
        return new ColliderDesc(shape);
    };
    /**
     * Computes the convex-hull of the given points and use the resulting
     * convex polyhedron as the shape for this new collider descriptor. A
     * border is added to that convex polyhedron to give it round corners.
     *
     * @param points - The point that will be used to compute the convex-hull.
     * @param borderRadius - The radius of the round border added to the convex polyhedron.
     */
    ColliderDesc.roundConvexHull = function (points, borderRadius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.RoundConvexPolyhedron(points, null, borderRadius);
        return new ColliderDesc(shape);
    };
    /**
     * Creates a new collider descriptor that uses the given set of points assumed
     * to form a round convex polyline (no convex-hull computation will be done).
     *
     * @param vertices - The vertices of the convex polyline.
     * @param borderRadius - The radius of the round border added to the convex polyline.
     */
    ColliderDesc.roundConvexMesh = function (vertices, indices, borderRadius) {
        var shape = new _shape__WEBPACK_IMPORTED_MODULE_2__.RoundConvexPolyhedron(vertices, indices, borderRadius);
        return new ColliderDesc(shape);
    };
    // #endif
    // #if DIM3
    /**
     * Sets the position of the collider to be created relative to the rigid-body it is attached to.
     */
    ColliderDesc.prototype.setTranslation = function (x, y, z) {
        if (typeof x != "number" || typeof y != "number" || typeof z != "number")
            throw TypeError("The translation components must be numbers.");
        this.translation = { x: x, y: y, z: z };
        return this;
    };
    // #endif
    /**
     * Sets the rotation of the collider to be created relative to the rigid-body it is attached to.
     *
     * @param rot - The rotation of the collider to be created relative to the rigid-body it is attached to.
     */
    ColliderDesc.prototype.setRotation = function (rot) {
        this.rotation = rot;
        return this;
    };
    /**
     * Sets whether or not the collider being created is a sensor.
     *
     * A sensor collider does not take part of the physics simulation, but generates
     * proximity events.
     *
     * @param is - Set to `true` of the collider built is to be a sensor.
     */
    ColliderDesc.prototype.setSensor = function (is) {
        this.isSensor = is;
        return this;
    };
    /**
     * Sets the density of the collider being built.
     *
     * @param density - The density to set, must be greater or equal to 0. A density of 0 means that this collider
     *                  will not affect the mass or angular inertia of the rigid-body it is attached to.
     */
    ColliderDesc.prototype.setDensity = function (density) {
        this.useMassProps = false;
        this.density = density;
        return this;
    };
    // #if DIM3
    /**
     * Sets the mass properties of the collider being built.
     *
     * This replaces the mass-properties automatically computed from the collider's density and shape.
     * These mass-properties will be added to the mass-properties of the rigid-body this collider will be attached to.
     *
     * @param mass − The mass of the collider to create.
     * @param centerOfMass − The center-of-mass of the collider to create.
     * @param principalAngularInertia − The initial principal angular inertia of the collider to create.
     *                                  These are the eigenvalues of the angular inertia matrix.
     * @param angularInertiaLocalFrame − The initial local angular inertia frame of the collider to create.
     *                                   These are the eigenvectors of the angular inertia matrix.
     */
    ColliderDesc.prototype.setMassProperties = function (mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame) {
        this.useMassProps = true;
        this.mass = mass;
        this.centerOfMass = centerOfMass;
        this.principalAngularInertia = principalAngularInertia;
        this.angularInertiaLocalFrame = angularInertiaLocalFrame;
        return this;
    };
    // #endif
    /**
     * Sets the restitution coefficient of the collider to be created.
     *
     * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
     *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
     *                   constraints solver).
     */
    ColliderDesc.prototype.setRestitution = function (restitution) {
        this.restitution = restitution;
        return this;
    };
    /**
     * Sets the friction coefficient of the collider to be created.
     *
     * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
     *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
     *                   being built.
     */
    ColliderDesc.prototype.setFriction = function (friction) {
        this.friction = friction;
        return this;
    };
    /**
     * Sets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    ColliderDesc.prototype.setFrictionCombineRule = function (rule) {
        this.frictionCombineRule = rule;
        return this;
    };
    /**
     * Sets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    ColliderDesc.prototype.setRestitutionCombineRule = function (rule) {
        this.restitutionCombineRule = rule;
        return this;
    };
    /**
     * Sets the collision groups used by this collider.
     *
     * Two colliders will interact iff. their collision groups are compatible.
     * See the documentation of `InteractionGroups` for details on teh used bit pattern.
     *
     * @param groups - The collision groups used for the collider being built.
     */
    ColliderDesc.prototype.setCollisionGroups = function (groups) {
        this.collisionGroups = groups;
        return this;
    };
    /**
     * Sets the solver groups used by this collider.
     *
     * Forces between two colliders in contact will be computed iff their solver
     * groups are compatible.
     * See the documentation of `InteractionGroups` for details on the used bit pattern.
     *
     * @param groups - The solver groups used for the collider being built.
     */
    ColliderDesc.prototype.setSolverGroups = function (groups) {
        this.solverGroups = groups;
        return this;
    };
    /**
     * Set the physics hooks active for this collider.
     *
     * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
     *
     * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
     */
    ColliderDesc.prototype.setActiveHooks = function (activeHooks) {
        this.activeHooks = activeHooks;
        return this;
    };
    /**
     * Set the events active for this collider.
     *
     * Use this to enable contact and/or intersection event reporting for this collider.
     *
     * @param activeEvents - The events active for contact/intersection pairs involving this collider.
     */
    ColliderDesc.prototype.setActiveEvents = function (activeEvents) {
        this.activeEvents = activeEvents;
        return this;
    };
    /**
     * Set the collision types active for this collider.
     *
     * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
     */
    ColliderDesc.prototype.setActiveCollisionTypes = function (activeCollisionTypes) {
        this.activeCollisionTypes = activeCollisionTypes;
        return this;
    };
    return ColliderDesc;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/collider_set.js":
/*!******************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/collider_set.js ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColliderSet": () => (/* binding */ ColliderSet)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collider */ "./node_modules/@dimforge/rapier3d/geometry/collider.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _collider__WEBPACK_IMPORTED_MODULE_2__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _collider__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/**
 * A set of rigid bodies that can be handled by a physics pipeline.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `colliderSet.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
var ColliderSet = /** @class */ (function () {
    function ColliderSet(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawColliderSet();
    }
    /**
     * Release the WASM memory occupied by this collider set.
     */
    ColliderSet.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    /**
     * Creates a new collider and return its integer handle.
     *
     * @param bodies - The set of bodies where the collider's parent can be found.
     * @param desc - The collider's description.
     * @param parentHandle - The inteer handle of the rigid-body this collider is attached to.
     */
    ColliderSet.prototype.createCollider = function (bodies, desc, parentHandle) {
        var hasParent = parentHandle != undefined && parentHandle != null;
        if (hasParent && isNaN(parentHandle))
            throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
        var rawShape = desc.shape.intoRaw();
        var rawTra = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(desc.translation);
        var rawRot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(desc.rotation);
        var rawCom = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(desc.centerOfMass);
        // #if DIM3
        var rawPrincipalInertia = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(desc.principalAngularInertia);
        var rawInertiaFrame = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(desc.angularInertiaLocalFrame);
        // #endif
        var handle = this.raw.createCollider(rawShape, rawTra, rawRot, desc.useMassProps, desc.mass, rawCom, 
        // #if DIM3
        rawPrincipalInertia, rawInertiaFrame, 
        // #endif
        desc.density, desc.friction, desc.restitution, desc.frictionCombineRule, desc.restitutionCombineRule, desc.isSensor, desc.collisionGroups, desc.solverGroups, desc.activeCollisionTypes, desc.activeHooks, desc.activeEvents, hasParent, hasParent ? parentHandle : 0, bodies.raw);
        rawShape.free();
        rawTra.free();
        rawRot.free();
        rawCom.free();
        // #if DIM3
        rawPrincipalInertia.free();
        rawInertiaFrame.free();
        // #endif
        return handle;
    };
    /**
     * Remove a collider from this set.
     *
     * @param handle - The integer handle of the collider to remove.
     * @param bodies - The set of rigid-body containing the rigid-body the collider is attached to.
     * @param wakeUp - If `true`, the rigid-body the removed collider is attached to will be woken-up automatically.
     */
    ColliderSet.prototype.remove = function (handle, islands, bodies, wakeUp) {
        this.raw.remove(handle, islands.raw, bodies.raw, wakeUp);
    };
    /**
     * Gets the rigid-body with the given handle.
     *
     * @param handle - The handle of the rigid-body to retrieve.
     */
    ColliderSet.prototype.get = function (handle) {
        if (this.raw.contains(handle)) {
            return new _collider__WEBPACK_IMPORTED_MODULE_2__.Collider(this.raw, handle);
        }
        else {
            return null;
        }
    };
    /**
     * The number of colliders on this set.
     */
    ColliderSet.prototype.len = function () {
        return this.raw.len();
    };
    /**
     * Does this set contain a collider with the given handle?
     *
     * @param handle - The collider handle to check.
     */
    ColliderSet.prototype.contains = function (handle) {
        return this.raw.contains(handle);
    };
    /**
     * Applies the given closure to each collider contained by this set.
     *
     * @param f - The closure to apply.
     */
    ColliderSet.prototype.forEachCollider = function (f) {
        var _this = this;
        this.forEachColliderHandle(function (handle) {
            f(new _collider__WEBPACK_IMPORTED_MODULE_2__.Collider(_this.raw, handle));
        });
    };
    /**
     * Applies the given closure to the handles of each collider contained by this set.
     *
     * @param f - The closure to apply.
     */
    ColliderSet.prototype.forEachColliderHandle = function (f) {
        this.raw.forEachColliderHandle(f);
    };
    return ColliderSet;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/index.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* reexport safe */ _collider__WEBPACK_IMPORTED_MODULE_3__.ActiveCollisionTypes),
/* harmony export */   "Ball": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Ball),
/* harmony export */   "BroadPhase": () => (/* reexport safe */ _broad_phase__WEBPACK_IMPORTED_MODULE_0__.BroadPhase),
/* harmony export */   "Capsule": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Capsule),
/* harmony export */   "Collider": () => (/* reexport safe */ _collider__WEBPACK_IMPORTED_MODULE_3__.Collider),
/* harmony export */   "ColliderDesc": () => (/* reexport safe */ _collider__WEBPACK_IMPORTED_MODULE_3__.ColliderDesc),
/* harmony export */   "ColliderSet": () => (/* reexport safe */ _collider_set__WEBPACK_IMPORTED_MODULE_4__.ColliderSet),
/* harmony export */   "Cone": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Cone),
/* harmony export */   "ConvexPolyhedron": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.ConvexPolyhedron),
/* harmony export */   "Cuboid": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Cuboid),
/* harmony export */   "Cylinder": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Cylinder),
/* harmony export */   "Heightfield": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Heightfield),
/* harmony export */   "NarrowPhase": () => (/* reexport safe */ _narrow_phase__WEBPACK_IMPORTED_MODULE_1__.NarrowPhase),
/* harmony export */   "PointColliderProjection": () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_6__.PointColliderProjection),
/* harmony export */   "Polyline": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Polyline),
/* harmony export */   "Ray": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_5__.Ray),
/* harmony export */   "RayColliderIntersection": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_5__.RayColliderIntersection),
/* harmony export */   "RayColliderToi": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_5__.RayColliderToi),
/* harmony export */   "RoundCone": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.RoundCone),
/* harmony export */   "RoundConvexPolyhedron": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.RoundConvexPolyhedron),
/* harmony export */   "RoundCuboid": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.RoundCuboid),
/* harmony export */   "RoundCylinder": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.RoundCylinder),
/* harmony export */   "RoundTriangle": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.RoundTriangle),
/* harmony export */   "Segment": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Segment),
/* harmony export */   "ShapeColliderTOI": () => (/* reexport safe */ _toi__WEBPACK_IMPORTED_MODULE_7__.ShapeColliderTOI),
/* harmony export */   "ShapeType": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.ShapeType),
/* harmony export */   "TempContactManifold": () => (/* reexport safe */ _narrow_phase__WEBPACK_IMPORTED_MODULE_1__.TempContactManifold),
/* harmony export */   "TriMesh": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.TriMesh),
/* harmony export */   "Triangle": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Triangle)
/* harmony export */ });
/* harmony import */ var _broad_phase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broad_phase */ "./node_modules/@dimforge/rapier3d/geometry/broad_phase.js");
/* harmony import */ var _narrow_phase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./narrow_phase */ "./node_modules/@dimforge/rapier3d/geometry/narrow_phase.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shape */ "./node_modules/@dimforge/rapier3d/geometry/shape.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collider */ "./node_modules/@dimforge/rapier3d/geometry/collider.js");
/* harmony import */ var _collider_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collider_set */ "./node_modules/@dimforge/rapier3d/geometry/collider_set.js");
/* harmony import */ var _ray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ray */ "./node_modules/@dimforge/rapier3d/geometry/ray.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point */ "./node_modules/@dimforge/rapier3d/geometry/point.js");
/* harmony import */ var _toi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toi */ "./node_modules/@dimforge/rapier3d/geometry/toi.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_broad_phase__WEBPACK_IMPORTED_MODULE_0__, _narrow_phase__WEBPACK_IMPORTED_MODULE_1__, _shape__WEBPACK_IMPORTED_MODULE_2__, _collider__WEBPACK_IMPORTED_MODULE_3__, _collider_set__WEBPACK_IMPORTED_MODULE_4__, _ray__WEBPACK_IMPORTED_MODULE_5__, _point__WEBPACK_IMPORTED_MODULE_6__, _toi__WEBPACK_IMPORTED_MODULE_7__]);
([_broad_phase__WEBPACK_IMPORTED_MODULE_0__, _narrow_phase__WEBPACK_IMPORTED_MODULE_1__, _shape__WEBPACK_IMPORTED_MODULE_2__, _collider__WEBPACK_IMPORTED_MODULE_3__, _collider_set__WEBPACK_IMPORTED_MODULE_4__, _ray__WEBPACK_IMPORTED_MODULE_5__, _point__WEBPACK_IMPORTED_MODULE_6__, _toi__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/narrow_phase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/narrow_phase.js ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NarrowPhase": () => (/* binding */ NarrowPhase),
/* harmony export */   "TempContactManifold": () => (/* binding */ TempContactManifold)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/**
 * The narrow-phase used for precise collision-detection.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `narrowPhase.free()`
 * once you are done using it.
 */
var NarrowPhase = /** @class */ (function () {
    function NarrowPhase(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawNarrowPhase();
        this.tempManifold = new TempContactManifold(null);
    }
    /**
     * Release the WASM memory occupied by this narrow-phase.
     */
    NarrowPhase.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    /**
     * Enumerates all the colliders potentially in contact with the given collider.
     *
     * @param collider1 - The second collider involved in the contact.
     * @param f - Closure that will be called on each collider that is in contact with `collider1`.
     */
    NarrowPhase.prototype.contactsWith = function (collider1, f) {
        this.raw.contacts_with(collider1, f);
    };
    /**
     * Enumerates all the colliders intersecting the given colliders, assuming one of them
     * is a sensor.
     */
    NarrowPhase.prototype.intersectionsWith = function (collider1, f) {
        this.raw.intersections_with(collider1, f);
    };
    /**
     * Iterates through all the contact manifolds between the given pair of colliders.
     *
     * @param collider1 - The first collider involved in the contact.
     * @param collider2 - The second collider involved in the contact.
     * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
     *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
     *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
     */
    NarrowPhase.prototype.contactPair = function (collider1, collider2, f) {
        var rawPair = this.raw.contact_pair(collider1, collider2);
        if (!!rawPair) {
            var flipped = rawPair.collider1() != collider1;
            var i = void 0;
            for (i = 0; i < rawPair.numContactManifolds(); ++i) {
                this.tempManifold.raw = rawPair.contactManifold(i);
                if (!!this.tempManifold.raw) {
                    f(this.tempManifold, flipped);
                }
                // SAFETY: The RawContactManifold stores a raw pointer that will be invalidated
                //         at the next timestep. So we must be sure to free the pair here
                //         to avoid unsoundness in the Rust code.
                this.tempManifold.free();
            }
            rawPair.free();
        }
    };
    /**
     * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
     * @param collider1 − The first collider involved in the intersection.
     * @param collider2 − The second collider involved in the intersection.
     */
    NarrowPhase.prototype.intersectionPair = function (collider1, collider2) {
        return this.raw.intersection_pair(collider1, collider2);
    };
    return NarrowPhase;
}());

var TempContactManifold = /** @class */ (function () {
    function TempContactManifold(raw) {
        this.raw = raw;
    }
    TempContactManifold.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    TempContactManifold.prototype.normal = function () {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.normal());
    };
    TempContactManifold.prototype.localNormal1 = function () {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.local_n1());
    };
    TempContactManifold.prototype.localNormal2 = function () {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.local_n2());
    };
    TempContactManifold.prototype.subshape1 = function () {
        return this.raw.subshape1();
    };
    TempContactManifold.prototype.subshape2 = function () {
        return this.raw.subshape2();
    };
    TempContactManifold.prototype.numContacts = function () {
        return this.raw.num_contacts();
    };
    TempContactManifold.prototype.localContactPoint1 = function (i) {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.contact_local_p1(i));
    };
    TempContactManifold.prototype.localContactPoint2 = function (i) {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.contact_local_p2(i));
    };
    TempContactManifold.prototype.contactDist = function (i) {
        return this.raw.contact_dist(i);
    };
    TempContactManifold.prototype.contactFid1 = function (i) {
        return this.raw.contact_fid1(i);
    };
    TempContactManifold.prototype.contactFid2 = function (i) {
        return this.raw.contact_fid2(i);
    };
    TempContactManifold.prototype.contactImpulse = function (i) {
        return this.raw.contact_impulse(i);
    };
    // #if DIM3
    TempContactManifold.prototype.contactTangentImpulseX = function (i) {
        return this.raw.contact_tangent_impulse_x(i);
    };
    TempContactManifold.prototype.contactTangentImpulseY = function (i) {
        return this.raw.contact_tangent_impulse_y(i);
    };
    // #endif
    TempContactManifold.prototype.numSolverContacts = function () {
        return this.raw.num_solver_contacts();
    };
    TempContactManifold.prototype.solverContactPoint = function (i) {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.solver_contact_point(i));
    };
    TempContactManifold.prototype.solverContactDist = function (i) {
        return this.raw.solver_contact_dist(i);
    };
    TempContactManifold.prototype.solverContactFriction = function (i) {
        return this.raw.solver_contact_friction(i);
    };
    TempContactManifold.prototype.solverContactRestitution = function (i) {
        return this.raw.solver_contact_restitution(i);
    };
    TempContactManifold.prototype.solverContactTangentVelocity = function (i) {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.solver_contact_tangent_velocity(i));
    };
    return TempContactManifold;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/point.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/point.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointColliderProjection": () => (/* binding */ PointColliderProjection)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_math__WEBPACK_IMPORTED_MODULE_0__]);
_math__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * The intersection between a ray and a collider.
 */
var PointColliderProjection = /** @class */ (function () {
    function PointColliderProjection(colliderHandle, point, isInside) {
        this.colliderHandle = colliderHandle;
        this.point = point;
        this.isInside = isInside;
    }
    PointColliderProjection.fromRaw = function (raw) {
        if (!raw)
            return null;
        var result = new PointColliderProjection(raw.colliderHandle(), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.point()), raw.isInside());
        raw.free();
        return result;
    };
    return PointColliderProjection;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/ray.js":
/*!*********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/ray.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ray": () => (/* binding */ Ray),
/* harmony export */   "RayColliderIntersection": () => (/* binding */ RayColliderIntersection),
/* harmony export */   "RayColliderToi": () => (/* binding */ RayColliderToi)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_math__WEBPACK_IMPORTED_MODULE_0__]);
_math__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * A ray. This is a directed half-line.
 */
var Ray = /** @class */ (function () {
    /**
     * Builds a ray from its origin and direction.
     *
     * @param origin - The ray's starting point.
     * @param dir - The ray's direction of propagation.
     */
    function Ray(origin, dir) {
        this.origin = origin;
        this.dir = dir;
    }
    Ray.prototype.pointAt = function (t) {
        return {
            x: this.origin.x + this.dir.x * t,
            y: this.origin.y + this.dir.y * t,
            // #if DIM3
            z: this.origin.z + this.dir.z * t,
            // #endif
        };
    };
    ;
    return Ray;
}());

/**
 * The intersection between a ray and a collider.
 */
var RayColliderIntersection = /** @class */ (function () {
    function RayColliderIntersection(colliderHandle, toi, normal) {
        this.colliderHandle = colliderHandle;
        this.toi = toi;
        this.normal = normal;
    }
    RayColliderIntersection.fromRaw = function (raw) {
        if (!raw)
            return null;
        var result = new RayColliderIntersection(raw.colliderHandle(), raw.toi(), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal()));
        raw.free();
        return result;
    };
    return RayColliderIntersection;
}());

/**
 * The time of impact between a ray and a collider.
 */
var RayColliderToi = /** @class */ (function () {
    function RayColliderToi(colliderHandle, toi) {
        this.colliderHandle = colliderHandle;
        this.toi = toi;
    }
    RayColliderToi.fromRaw = function (raw) {
        if (!raw)
            return null;
        var result = new RayColliderToi(raw.colliderHandle(), raw.toi());
        raw.free();
        return result;
    };
    return RayColliderToi;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/shape.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/shape.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ball": () => (/* binding */ Ball),
/* harmony export */   "Capsule": () => (/* binding */ Capsule),
/* harmony export */   "Cone": () => (/* binding */ Cone),
/* harmony export */   "ConvexPolyhedron": () => (/* binding */ ConvexPolyhedron),
/* harmony export */   "Cuboid": () => (/* binding */ Cuboid),
/* harmony export */   "Cylinder": () => (/* binding */ Cylinder),
/* harmony export */   "Heightfield": () => (/* binding */ Heightfield),
/* harmony export */   "Polyline": () => (/* binding */ Polyline),
/* harmony export */   "RoundCone": () => (/* binding */ RoundCone),
/* harmony export */   "RoundConvexPolyhedron": () => (/* binding */ RoundConvexPolyhedron),
/* harmony export */   "RoundCuboid": () => (/* binding */ RoundCuboid),
/* harmony export */   "RoundCylinder": () => (/* binding */ RoundCylinder),
/* harmony export */   "RoundTriangle": () => (/* binding */ RoundTriangle),
/* harmony export */   "Segment": () => (/* binding */ Segment),
/* harmony export */   "ShapeType": () => (/* binding */ ShapeType),
/* harmony export */   "TriMesh": () => (/* binding */ TriMesh),
/* harmony export */   "Triangle": () => (/* binding */ Triangle)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/**
 * An enumeration representing the type of a shape.
 */
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["Ball"] = 0] = "Ball";
    ShapeType[ShapeType["Cuboid"] = 1] = "Cuboid";
    ShapeType[ShapeType["Capsule"] = 2] = "Capsule";
    ShapeType[ShapeType["Segment"] = 3] = "Segment";
    ShapeType[ShapeType["Polyline"] = 4] = "Polyline";
    ShapeType[ShapeType["Triangle"] = 5] = "Triangle";
    ShapeType[ShapeType["TriMesh"] = 6] = "TriMesh";
    ShapeType[ShapeType["HeightField"] = 7] = "HeightField";
    // Compound = 8,
    ShapeType[ShapeType["ConvexPolyhedron"] = 9] = "ConvexPolyhedron";
    ShapeType[ShapeType["Cylinder"] = 10] = "Cylinder";
    ShapeType[ShapeType["Cone"] = 11] = "Cone";
    ShapeType[ShapeType["RoundCuboid"] = 12] = "RoundCuboid";
    ShapeType[ShapeType["RoundTriangle"] = 13] = "RoundTriangle";
    ShapeType[ShapeType["RoundCylinder"] = 14] = "RoundCylinder";
    ShapeType[ShapeType["RoundCone"] = 15] = "RoundCone";
    ShapeType[ShapeType["RoundConvexPolyhedron"] = 16] = "RoundConvexPolyhedron";
})(ShapeType || (ShapeType = {}));
// #endif
/**
 * A shape that is a sphere in 3D and a circle in 2D.
 */
var Ball = /** @class */ (function () {
    /**
     * Creates a new ball with the given radius.
     * @param radius - The balls radius.
     */
    function Ball(radius) {
        this.radius = radius;
    }
    Ball.prototype.intoRaw = function () {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.ball(this.radius);
    };
    return Ball;
}());

/**
 * A shape that is a box in 3D and a rectangle in 2D.
 */
var Cuboid = /** @class */ (function () {
    // #if DIM3
    /**
     * Creates a new 3D cuboid.
     * @param hx - The half width of the cuboid.
     * @param hy - The half height of the cuboid.
     * @param hz - The half depth of the cuboid.
     */
    function Cuboid(hx, hy, hz) {
        this.halfExtents = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps["new"](hx, hy, hz);
    }
    // #endif
    Cuboid.prototype.intoRaw = function () {
        // #if DIM3
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
        // #endif
    };
    return Cuboid;
}());

/**
 * A shape that is a box in 3D and a rectangle in 2D, with round corners.
 */
var RoundCuboid = /** @class */ (function () {
    // #if DIM3
    /**
     * Creates a new 3D cuboid.
     * @param hx - The half width of the cuboid.
     * @param hy - The half height of the cuboid.
     * @param hz - The half depth of the cuboid.
     * @param borderRadius - The radius of the borders of this cuboid. This will
     *   effectively increase the half-extents of the cuboid by this radius.
     */
    function RoundCuboid(hx, hy, hz, borderRadius) {
        this.halfExtents = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps["new"](hx, hy, hz);
        this.borderRadius = borderRadius;
    }
    // #endif
    RoundCuboid.prototype.intoRaw = function () {
        // #if DIM3
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
        // #endif
    };
    return RoundCuboid;
}());

/**
 * A shape that is a capsule.
 */
var Capsule = /** @class */ (function () {
    /**
     * Creates a new capsule with the given radius and half-height.
     * @param halfHeight - The balls half-height along the `y` axis.
     * @param radius - The balls radius.
     */
    function Capsule(halfHeight, radius) {
        this.halfHeight = halfHeight;
        this.radius = radius;
    }
    Capsule.prototype.intoRaw = function () {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.capsule(this.halfHeight, this.radius);
    };
    return Capsule;
}());

/**
 * A shape that is a segment.
 */
var Segment = /** @class */ (function () {
    /**
     * Creates a new segment shape.
     * @param a - The first point of the segment.
     * @param b - The second point of the segment.
     */
    function Segment(a, b) {
        this.a = a;
        this.b = b;
    }
    Segment.prototype.intoRaw = function () {
        var ra = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.a);
        var rb = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.b);
        var result = _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.segment(ra, rb);
        ra.free();
        rb.free();
        return result;
    };
    return Segment;
}());

/**
 * A shape that is a segment.
 */
var Triangle = /** @class */ (function () {
    /**
     * Creates a new triangle shape.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     */
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.intoRaw = function () {
        var ra = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.a);
        var rb = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.b);
        var rc = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.c);
        var result = _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.triangle(ra, rb, rc);
        ra.free();
        rb.free();
        rc.free();
        return result;
    };
    return Triangle;
}());

/**
 * A shape that is a triangle with round borders and a non-zero thickness.
 */
var RoundTriangle = /** @class */ (function () {
    /**
     * Creates a new triangle shape with round corners.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     * @param borderRadius - The radius of the borders of this triangle. In 3D,
     *   this is also equal to half the thickness of the triangle.
     */
    function RoundTriangle(a, b, c, borderRadius) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.borderRadius = borderRadius;
    }
    RoundTriangle.prototype.intoRaw = function () {
        var ra = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.a);
        var rb = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.b);
        var rc = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.c);
        var result = _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.roundTriangle(ra, rb, rc, this.borderRadius);
        ra.free();
        rb.free();
        rc.free();
        return result;
    };
    return RoundTriangle;
}());

/**
 * A shape that is a triangle mesh.
 */
var Polyline = /** @class */ (function () {
    /**
     * Creates a new polyline shape.
     *
     * @param vertices - The coordinates of the polyline's vertices.
     * @param indices - The indices of the polyline's segments. If this is `null` then
     *    the vertices are assumed to form a line strip.
     */
    function Polyline(vertices, indices) {
        this.vertices = vertices;
        this.indices = !!indices ? indices : new Uint32Array(0);
    }
    Polyline.prototype.intoRaw = function () {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.polyline(this.vertices, this.indices);
    };
    return Polyline;
}());

/**
 * A shape that is a triangle mesh.
 */
var TriMesh = /** @class */ (function () {
    /**
     * Creates a new triangle mesh shape.
     *
     * @param vertices - The coordinates of the triangle mesh's vertices.
     * @param indices - The indices of the triangle mesh's triangles.
     */
    function TriMesh(vertices, indices) {
        this.vertices = vertices;
        this.indices = indices;
    }
    TriMesh.prototype.intoRaw = function () {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.trimesh(this.vertices, this.indices);
    };
    return TriMesh;
}());

// #if DIM3
/**
 * A shape that is a convex polygon.
 */
var ConvexPolyhedron = /** @class */ (function () {
    /**
     * Creates a new convex polygon shape.
     *
     * @param vertices - The coordinates of the convex polygon's vertices.
     * @param indices - The index buffer of this convex mesh. If this is `null`
     *   or `undefined`, the convex-hull of the input vertices will be computed
     *   automatically. Otherwise, it will be assumed that the mesh you provide
     *   is already convex.
     */
    function ConvexPolyhedron(vertices, indices) {
        this.vertices = vertices;
        this.indices = indices;
    }
    ConvexPolyhedron.prototype.intoRaw = function () {
        if (!!this.indices) {
            return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.convexMesh(this.vertices, this.indices);
        }
        else {
            return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.convexHull(this.vertices);
        }
    };
    return ConvexPolyhedron;
}());

/**
 * A shape that is a convex polygon.
 */
var RoundConvexPolyhedron = /** @class */ (function () {
    /**
     * Creates a new convex polygon shape.
     *
     * @param vertices - The coordinates of the convex polygon's vertices.
     * @param indices - The index buffer of this convex mesh. If this is `null`
     *   or `undefined`, the convex-hull of the input vertices will be computed
     *   automatically. Otherwise, it will be assumed that the mesh you provide
     *   is already convex.
     * @param borderRadius - The radius of the borders of this convex polyhedron.
     */
    function RoundConvexPolyhedron(vertices, indices, borderRadius) {
        this.vertices = vertices;
        this.indices = indices;
        this.borderRadius = borderRadius;
    }
    RoundConvexPolyhedron.prototype.intoRaw = function () {
        if (!!this.indices) {
            return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.roundConvexMesh(this.vertices, this.indices, this.borderRadius);
        }
        else {
            return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.roundConvexHull(this.vertices, this.borderRadius);
        }
    };
    return RoundConvexPolyhedron;
}());

/**
 * A shape that is a heightfield.
 */
var Heightfield = /** @class */ (function () {
    /**
     * Creates a new heightfield shape.
     *
     * @param nrows − The number of rows in the heights matrix.
     * @param ncols - The number of columns in the heights matrix.
     * @param heights - The heights of the heightfield along its local `y` axis,
     *                  provided as a matrix stored in column-major order.
     * @param scale - The dimensions of the heightfield's local `x,z` plane.
     */
    function Heightfield(nrows, ncols, heights, scale) {
        this.nrows = nrows;
        this.ncols = ncols;
        this.heights = heights;
        this.scale = scale;
    }
    Heightfield.prototype.intoRaw = function () {
        var rawScale = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(this.scale);
        var rawShape = _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.heightfield(this.nrows, this.ncols, this.heights, rawScale);
        rawScale.free();
        return rawShape;
    };
    return Heightfield;
}());

/**
 * A shape that is a 3D cylinder.
 */
var Cylinder = /** @class */ (function () {
    /**
     * Creates a new cylinder with the given radius and half-height.
     * @param halfHeight - The balls half-height along the `y` axis.
     * @param radius - The balls radius.
     */
    function Cylinder(halfHeight, radius) {
        this.halfHeight = halfHeight;
        this.radius = radius;
    }
    Cylinder.prototype.intoRaw = function () {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.cylinder(this.halfHeight, this.radius);
    };
    return Cylinder;
}());

/**
 * A shape that is a 3D cylinder with round corners.
 */
var RoundCylinder = /** @class */ (function () {
    /**
     * Creates a new cylinder with the given radius and half-height.
     * @param halfHeight - The balls half-height along the `y` axis.
     * @param radius - The balls radius.
     * @param borderRadius - The radius of the borders of this cylinder.
     */
    function RoundCylinder(halfHeight, radius, borderRadius) {
        this.borderRadius = borderRadius;
        this.halfHeight = halfHeight;
        this.radius = radius;
    }
    RoundCylinder.prototype.intoRaw = function () {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    };
    return RoundCylinder;
}());

/**
 * A shape that is a 3D cone.
 */
var Cone = /** @class */ (function () {
    /**
     * Creates a new cone with the given radius and half-height.
     * @param halfHeight - The balls half-height along the `y` axis.
     * @param radius - The balls radius.
     */
    function Cone(halfHeight, radius) {
        this.halfHeight = halfHeight;
        this.radius = radius;
    }
    Cone.prototype.intoRaw = function () {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.cone(this.halfHeight, this.radius);
    };
    return Cone;
}());

/**
 * A shape that is a 3D cone with round corners.
 */
var RoundCone = /** @class */ (function () {
    /**
     * Creates a new cone with the given radius and half-height.
     * @param halfHeight - The balls half-height along the `y` axis.
     * @param radius - The balls radius.
     * @param borderRadius - The radius of the borders of this cone.
     */
    function RoundCone(halfHeight, radius, borderRadius) {
        this.halfHeight = halfHeight;
        this.radius = radius;
        this.borderRadius = borderRadius;
    }
    RoundCone.prototype.intoRaw = function () {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawShape.roundCone(this.halfHeight, this.radius, this.borderRadius);
    };
    return RoundCone;
}());

// #endif

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/geometry/toi.js":
/*!*********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/geometry/toi.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeColliderTOI": () => (/* binding */ ShapeColliderTOI)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_math__WEBPACK_IMPORTED_MODULE_0__]);
_math__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * The intersection between a ray and a collider.
 */
var ShapeColliderTOI = /** @class */ (function () {
    function ShapeColliderTOI(colliderHandle, toi, witness1, witness2, normal1, normal2) {
        this.colliderHandle = colliderHandle;
        this.toi = toi;
        this.witness1 = witness1;
        this.witness2 = witness2;
        this.normal1 = normal1;
        this.normal2 = normal2;
    }
    ShapeColliderTOI.fromRaw = function (raw) {
        if (!raw)
            return null;
        var result = new ShapeColliderTOI(raw.colliderHandle(), raw.toi(), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.witness1()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.witness2()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal1()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal2()));
        raw.free();
        return result;
    };
    return ShapeColliderTOI;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/math.js":
/*!*************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/math.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quaternion": () => (/* binding */ Quaternion),
/* harmony export */   "RotationOps": () => (/* binding */ RotationOps),
/* harmony export */   "Vector3": () => (/* binding */ Vector3),
/* harmony export */   "VectorOps": () => (/* binding */ VectorOps)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__]);
_raw__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * A 3D vector.
 */
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Vector3;
}());

var VectorOps = /** @class */ (function () {
    function VectorOps() {
    }
    VectorOps.new = function (x, y, z) {
        return new Vector3(x, y, z);
    };
    VectorOps.intoRaw = function (v) {
        return new _raw__WEBPACK_IMPORTED_MODULE_0__.RawVector(v.x, v.y, v.z);
    };
    VectorOps.zeros = function () {
        return VectorOps.new(0.0, 0.0, 0.0);
    };
    // FIXME: type ram: RawVector?
    VectorOps.fromRaw = function (raw) {
        if (!raw)
            return null;
        var res = VectorOps.new(raw.x, raw.y, raw.z);
        raw.free();
        return res;
    };
    return VectorOps;
}());

/**
 * A quaternion.
 */
var Quaternion = /** @class */ (function () {
    function Quaternion(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    return Quaternion;
}());

var RotationOps = /** @class */ (function () {
    function RotationOps() {
    }
    RotationOps.identity = function () {
        return new Quaternion(0.0, 0.0, 0.0, 1.0);
    };
    RotationOps.fromRaw = function (raw) {
        if (!raw)
            return null;
        var res = new Quaternion(raw.x, raw.y, raw.z, raw.w);
        raw.free();
        return res;
    };
    RotationOps.intoRaw = function (rot) {
        return new _raw__WEBPACK_IMPORTED_MODULE_0__.RawRotation(rot.x, rot.y, rot.z, rot.w);
    };
    return RotationOps;
}());

// #endif

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/pipeline/event_queue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/pipeline/event_queue.js ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveEvents": () => (/* binding */ ActiveEvents),
/* harmony export */   "EventQueue": () => (/* binding */ EventQueue)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__]);
_raw__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/// Flags indicating what events are enabled for colliders.
var ActiveEvents;
(function (ActiveEvents) {
    /// Enable intersection events.
    ActiveEvents[ActiveEvents["INTERSECTION_EVENTS"] = 1] = "INTERSECTION_EVENTS";
    /// Enable contact events.
    ActiveEvents[ActiveEvents["CONTACT_EVENTS"] = 2] = "CONTACT_EVENTS";
})(ActiveEvents || (ActiveEvents = {}));
/**
 * A structure responsible for collecting events generated
 * by the physics engine.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `eventQueue.free()`
 * once you are done using it.
 */
var EventQueue = /** @class */ (function () {
    /**
     * Creates a new event collector.
     *
     * @param autoDrain -setting this to `true` is strongly recommended. If true, the collector will
     * be automatically drained before each `world.step(collector)`. If false, the collector will
     * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
     * RAM if no drain is performed.
     */
    function EventQueue(autoDrain, raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawEventQueue(autoDrain);
    }
    /**
     * Release the WASM memory occupied by this event-queue.
     */
    EventQueue.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    /**
     * Applies the given javascript closure on each contact event of this collector, then clear
     * the internal contact event buffer.
     *
     * @param f - JavaScript closure applied to each contact event. The
     * closure should take three arguments: two integers representing the handles of the colliders
     * involved in the contact, and a boolean indicating if the contact started (true) or stopped
     * (false).
     */
    EventQueue.prototype.drainContactEvents = function (f) {
        this.raw.drainContactEvents(f);
    };
    /**
     * Applies the given javascript closure on each intersection event of this collector, then clear
     * the internal intersection event buffer.
     *
     * @param f - JavaScript closure applied to each intersection event. The
     * closure should take four arguments: two integers representing the handles of the colliders
     * involved in the intersection, and a boolean indicating if they started intersecting (true) or
     * stopped intersecting (false).
     */
    EventQueue.prototype.drainIntersectionEvents = function (f) {
        this.raw.drainIntersectionEvents(f);
    };
    /**
     * Removes all events contained by this collector
     */
    EventQueue.prototype.clear = function () {
        this.raw.clear();
    };
    return EventQueue;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/pipeline/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/pipeline/index.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveEvents": () => (/* reexport safe */ _event_queue__WEBPACK_IMPORTED_MODULE_3__.ActiveEvents),
/* harmony export */   "ActiveHooks": () => (/* reexport safe */ _physics_hooks__WEBPACK_IMPORTED_MODULE_4__.ActiveHooks),
/* harmony export */   "EventQueue": () => (/* reexport safe */ _event_queue__WEBPACK_IMPORTED_MODULE_3__.EventQueue),
/* harmony export */   "PhysicsPipeline": () => (/* reexport safe */ _physics_pipeline__WEBPACK_IMPORTED_MODULE_1__.PhysicsPipeline),
/* harmony export */   "SerializationPipeline": () => (/* reexport safe */ _serialization_pipeline__WEBPACK_IMPORTED_MODULE_2__.SerializationPipeline),
/* harmony export */   "SolverFlags": () => (/* reexport safe */ _physics_hooks__WEBPACK_IMPORTED_MODULE_4__.SolverFlags),
/* harmony export */   "World": () => (/* reexport safe */ _world__WEBPACK_IMPORTED_MODULE_0__.World)
/* harmony export */ });
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./node_modules/@dimforge/rapier3d/pipeline/world.js");
/* harmony import */ var _physics_pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics_pipeline */ "./node_modules/@dimforge/rapier3d/pipeline/physics_pipeline.js");
/* harmony import */ var _serialization_pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialization_pipeline */ "./node_modules/@dimforge/rapier3d/pipeline/serialization_pipeline.js");
/* harmony import */ var _event_queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event_queue */ "./node_modules/@dimforge/rapier3d/pipeline/event_queue.js");
/* harmony import */ var _physics_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physics_hooks */ "./node_modules/@dimforge/rapier3d/pipeline/physics_hooks.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_world__WEBPACK_IMPORTED_MODULE_0__, _physics_pipeline__WEBPACK_IMPORTED_MODULE_1__, _serialization_pipeline__WEBPACK_IMPORTED_MODULE_2__, _event_queue__WEBPACK_IMPORTED_MODULE_3__]);
([_world__WEBPACK_IMPORTED_MODULE_0__, _physics_pipeline__WEBPACK_IMPORTED_MODULE_1__, _serialization_pipeline__WEBPACK_IMPORTED_MODULE_2__, _event_queue__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/pipeline/physics_hooks.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/pipeline/physics_hooks.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveHooks": () => (/* binding */ ActiveHooks),
/* harmony export */   "SolverFlags": () => (/* binding */ SolverFlags)
/* harmony export */ });
var ActiveHooks;
(function (ActiveHooks) {
    ActiveHooks[ActiveHooks["FILTER_CONTACT_PAIRS"] = 1] = "FILTER_CONTACT_PAIRS";
    ActiveHooks[ActiveHooks["FILTER_INTERSECTION_PAIRS"] = 2] = "FILTER_INTERSECTION_PAIRS";
    // MODIFY_SOLVER_CONTACTS = 0b0100, /* Not supported yet in JS. */
})(ActiveHooks || (ActiveHooks = {}));
var SolverFlags;
(function (SolverFlags) {
    SolverFlags[SolverFlags["EMPTY"] = 0] = "EMPTY";
    SolverFlags[SolverFlags["COMPUTE_IMPULSE"] = 1] = "COMPUTE_IMPULSE";
})(SolverFlags || (SolverFlags = {}));


/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/pipeline/physics_pipeline.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/pipeline/physics_pipeline.js ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicsPipeline": () => (/* binding */ PhysicsPipeline)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


var PhysicsPipeline = /** @class */ (function () {
    function PhysicsPipeline(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawPhysicsPipeline();
    }
    PhysicsPipeline.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    PhysicsPipeline.prototype.step = function (gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, ccdSolver, eventQueue, hooks) {
        var rawG = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(gravity);
        if (!!eventQueue) {
            this.raw.stepWithEvents(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, joints.raw, ccdSolver.raw, eventQueue.raw, hooks, !!hooks ? hooks.filterContactPair : null, !!hooks ? hooks.filterIntersectionPair : null);
        }
        else {
            this.raw.step(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, joints.raw, ccdSolver.raw);
        }
        rawG.free();
    };
    return PhysicsPipeline;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/pipeline/query_pipeline.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/pipeline/query_pipeline.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryPipeline": () => (/* binding */ QueryPipeline)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier3d/geometry/ray.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier3d/geometry/point.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier3d/geometry/toi.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _geometry__WEBPACK_IMPORTED_MODULE_2__, _geometry__WEBPACK_IMPORTED_MODULE_3__, _geometry__WEBPACK_IMPORTED_MODULE_4__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _geometry__WEBPACK_IMPORTED_MODULE_2__, _geometry__WEBPACK_IMPORTED_MODULE_3__, _geometry__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/**
 * A pipeline for performing queries on all the colliders of a scene.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `queryPipeline.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
var QueryPipeline = /** @class */ (function () {
    function QueryPipeline(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawQueryPipeline();
    }
    /**
     * Release the WASM memory occupied by this query pipeline.
     */
    QueryPipeline.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    /**
     * Updates the acceleration structure of the query pipeline.
     * @param bodies - The set of rigid-bodies taking part in this pipeline.
     * @param colliders - The set of colliders taking part in this pipeline.
     */
    QueryPipeline.prototype.update = function (islands, bodies, colliders) {
        this.raw.update(islands.raw, bodies.raw, colliders.raw);
    };
    /**
     * Find the closest intersection between a ray and a set of collider.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     */
    QueryPipeline.prototype.castRay = function (colliders, ray, maxToi, solid, groups) {
        var rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        var rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        var result = _geometry__WEBPACK_IMPORTED_MODULE_2__.RayColliderToi.fromRaw(this.raw.castRay(colliders.raw, rawOrig, rawDir, maxToi, solid, groups));
        rawOrig.free();
        rawDir.free();
        return result;
    };
    /**
     * Find the closest intersection between a ray and a set of collider.
     *
     * This also computes the normal at the hit point.
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     */
    QueryPipeline.prototype.castRayAndGetNormal = function (colliders, ray, maxToi, solid, groups) {
        var rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        var rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        var result = _geometry__WEBPACK_IMPORTED_MODULE_2__.RayColliderIntersection.fromRaw(this.raw.castRayAndGetNormal(colliders.raw, rawOrig, rawDir, maxToi, solid, groups));
        rawOrig.free();
        rawDir.free();
        return result;
    };
    /**
     * Cast a ray and collects all the intersections between a ray and the scene.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
     *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
     */
    QueryPipeline.prototype.intersectionsWithRay = function (colliders, ray, maxToi, solid, groups, callback) {
        var rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        var rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        var rawCallback = function (rawInter) {
            return callback(_geometry__WEBPACK_IMPORTED_MODULE_2__.RayColliderIntersection.fromRaw(rawInter));
        };
        this.raw.intersectionsWithRay(colliders.raw, rawOrig, rawDir, maxToi, solid, groups, rawCallback);
        rawOrig.free();
        rawDir.free();
    };
    /**
     * Gets the handle of up to one collider intersecting the given shape.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param shapePos - The position of the shape used for the intersection test.
     * @param shapeRot - The orientation of the shape used for the intersection test.
     * @param shape - The shape used for the intersection test.
     * @param groups - The bit groups and filter associated to the ray, in order to only
     *   hit the colliders with collision groups compatible with the ray's group.
     */
    QueryPipeline.prototype.intersectionWithShape = function (colliders, shapePos, shapeRot, shape, groups) {
        var rawPos = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapePos);
        var rawRot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shapeRot);
        var rawShape = shape.intoRaw();
        var result = this.raw.intersectionWithShape(colliders.raw, rawPos, rawRot, rawShape, groups);
        rawPos.free();
        rawRot.free();
        rawShape.free();
        return result;
    };
    /**
     * Find the projection of a point on the closest collider.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param point - The point to project.
     * @param solid - If this is set to `true` then the collider shapes are considered to
     *   be plain (if the point is located inside of a plain shape, its projection is the point
     *   itself). If it is set to `false` the collider shapes are considered to be hollow
     *   (if the point is located inside of an hollow shape, it is projected on the shape's
     *   boundary).
     * @param groups - The bit groups and filter associated to the point to project, in order to only
     *   project on colliders with collision groups compatible with the ray's group.
     */
    QueryPipeline.prototype.projectPoint = function (colliders, point, solid, groups) {
        var rawPoint = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(point);
        var result = _geometry__WEBPACK_IMPORTED_MODULE_3__.PointColliderProjection.fromRaw(this.raw.projectPoint(colliders.raw, rawPoint, solid, groups));
        rawPoint.free();
        return result;
    };
    /**
     * Find all the colliders containing the given point.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param point - The point used for the containment test.
     * @param groups - The bit groups and filter associated to the point to test, in order to only
     *   test on colliders with collision groups compatible with the ray's group.
     * @param callback - A function called with the handles of each collider with a shape
     *   containing the `point`.
     */
    QueryPipeline.prototype.intersectionsWithPoint = function (colliders, point, groups, callback) {
        var rawPoint = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(point);
        this.raw.intersectionsWithPoint(colliders.raw, rawPoint, groups, callback);
        rawPoint.free();
    };
    /**
     * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
     * This is similar to ray-casting except that we are casting a whole shape instead of
     * just a point (the ray origin).
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param shapePos - The initial position of the shape to cast.
     * @param shapeRot - The initial rotation of the shape to cast.
     * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
     * @param shape - The shape to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
     * @param groups - The bit groups and filter associated to the shape to cast, in order to only
     *   test on colliders with collision groups compatible with this group.
     */
    QueryPipeline.prototype.castShape = function (colliders, shapePos, shapeRot, shapeVel, shape, maxToi, groups) {
        var rawPos = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapePos);
        var rawRot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shapeRot);
        var rawVel = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapeVel);
        var rawShape = shape.intoRaw();
        var result = _geometry__WEBPACK_IMPORTED_MODULE_4__.ShapeColliderTOI.fromRaw(this.raw.castShape(colliders.raw, rawPos, rawRot, rawVel, rawShape, maxToi, groups));
        rawPos.free();
        rawRot.free();
        rawVel.free();
        rawShape.free();
        return result;
    };
    /**
     * Retrieve all the colliders intersecting the given shape.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param shapePos - The position of the shape to test.
     * @param shapeRot - The orientation of the shape to test.
     * @param shape - The shape to test.
     * @param groups - The bit groups and filter associated to the shape to test, in order to only
     *   test on colliders with collision groups compatible with this group.
     * @param callback - A function called with the handles of each collider intersecting the `shape`.
     */
    QueryPipeline.prototype.intersectionsWithShape = function (colliders, shapePos, shapeRot, shape, groups, callback) {
        var rawPos = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapePos);
        var rawRot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shapeRot);
        var rawShape = shape.intoRaw();
        this.raw.intersectionsWithShape(colliders.raw, rawPos, rawRot, rawShape, groups, callback);
        rawPos.free();
        rawRot.free();
        rawShape.free();
    };
    /**
     * Finds the handles of all the colliders with an AABB intersecting the given AABB.
     *
     * @param aabbCenter - The center of the AABB to test.
     * @param aabbHalfExtents - The half-extents of the AABB to test.
     * @param callback - The callback that will be called with the handles of all the colliders
     *                   currently intersecting the given AABB.
     */
    QueryPipeline.prototype.collidersWithAabbIntersectingAabb = function (aabbCenter, aabbHalfExtents, callback) {
        var rawCenter = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(aabbCenter);
        var rawHalfExtents = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(aabbHalfExtents);
        this.raw.collidersWithAabbIntersectingAabb(rawCenter, rawHalfExtents, callback);
        rawCenter.free();
        rawHalfExtents.free();
    };
    return QueryPipeline;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/pipeline/serialization_pipeline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/pipeline/serialization_pipeline.js ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerializationPipeline": () => (/* binding */ SerializationPipeline)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world */ "./node_modules/@dimforge/rapier3d/pipeline/world.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _world__WEBPACK_IMPORTED_MODULE_2__]);
([_raw__WEBPACK_IMPORTED_MODULE_0__, _math__WEBPACK_IMPORTED_MODULE_1__, _world__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/**
 * A pipeline for serializing the physics scene.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `queryPipeline.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
var SerializationPipeline = /** @class */ (function () {
    function SerializationPipeline(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawSerializationPipeline();
    }
    /**
     * Release the WASM memory occupied by this serialization pipeline.
     */
    SerializationPipeline.prototype.free = function () {
        this.raw.free();
        this.raw = undefined;
    };
    /**
     * Serialize a complete physics state into a single byte array.
     * @param gravity - The current gravity affecting the simulation.
     * @param integrationParameters - The integration parameters of the simulation.
     * @param broadPhase - The broad-phase of the simulation.
     * @param narrowPhase - The narrow-phase of the simulation.
     * @param bodies - The rigid-bodies taking part into the simulation.
     * @param colliders - The colliders taking part into the simulation.
     * @param joints - The joints taking part into the simulation.
     */
    SerializationPipeline.prototype.serializeAll = function (gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints) {
        var rawGra = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(gravity);
        var res = this.raw.serializeAll(rawGra, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, joints.raw);
        rawGra.free();
        return res;
    };
    /**
     * Deserialize the complete physics state from a single byte array.
     *
     * @param data - The byte array to deserialize.
     */
    SerializationPipeline.prototype.deserializeAll = function (data) {
        return _world__WEBPACK_IMPORTED_MODULE_2__.World.fromRaw(this.raw.deserializeAll(data));
    };
    return SerializationPipeline;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/pipeline/world.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/pipeline/world.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "World": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier3d/geometry/broad_phase.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier3d/geometry/narrow_phase.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier3d/geometry/collider_set.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier3d/dynamics/integration_parameters.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier3d/dynamics/island_manager.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier3d/dynamics/rigid_body_set.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier3d/dynamics/joint_set.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier3d/dynamics/ccd_solver.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier3d/math.js");
/* harmony import */ var _physics_pipeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./physics_pipeline */ "./node_modules/@dimforge/rapier3d/pipeline/physics_pipeline.js");
/* harmony import */ var _query_pipeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query_pipeline */ "./node_modules/@dimforge/rapier3d/pipeline/query_pipeline.js");
/* harmony import */ var _serialization_pipeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serialization_pipeline */ "./node_modules/@dimforge/rapier3d/pipeline/serialization_pipeline.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_dynamics__WEBPACK_IMPORTED_MODULE_0__, _dynamics__WEBPACK_IMPORTED_MODULE_1__, _geometry__WEBPACK_IMPORTED_MODULE_2__, _geometry__WEBPACK_IMPORTED_MODULE_3__, _dynamics__WEBPACK_IMPORTED_MODULE_4__, _geometry__WEBPACK_IMPORTED_MODULE_5__, _dynamics__WEBPACK_IMPORTED_MODULE_6__, _dynamics__WEBPACK_IMPORTED_MODULE_7__, _query_pipeline__WEBPACK_IMPORTED_MODULE_8__, _physics_pipeline__WEBPACK_IMPORTED_MODULE_9__, _serialization_pipeline__WEBPACK_IMPORTED_MODULE_10__, _math__WEBPACK_IMPORTED_MODULE_11__]);
([_dynamics__WEBPACK_IMPORTED_MODULE_0__, _dynamics__WEBPACK_IMPORTED_MODULE_1__, _geometry__WEBPACK_IMPORTED_MODULE_2__, _geometry__WEBPACK_IMPORTED_MODULE_3__, _dynamics__WEBPACK_IMPORTED_MODULE_4__, _geometry__WEBPACK_IMPORTED_MODULE_5__, _dynamics__WEBPACK_IMPORTED_MODULE_6__, _dynamics__WEBPACK_IMPORTED_MODULE_7__, _query_pipeline__WEBPACK_IMPORTED_MODULE_8__, _physics_pipeline__WEBPACK_IMPORTED_MODULE_9__, _serialization_pipeline__WEBPACK_IMPORTED_MODULE_10__, _math__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/**
 * The physics world.
 *
 * This contains all the data-structures necessary for creating and simulating
 * bodies with contacts, joints, and external forces.
 */
var World = /** @class */ (function () {
    function World(gravity, rawIntegrationParameters, rawIslands, rawBroadPhase, rawNarrowPhase, rawBodies, rawColliders, rawJoints, rawCCDSolver, rawQueryPipeline, rawPhysicsPipeline, rawSerializationPipeline) {
        this.gravity = gravity;
        this.integrationParameters = new _dynamics__WEBPACK_IMPORTED_MODULE_0__.IntegrationParameters(rawIntegrationParameters);
        this.islands = new _dynamics__WEBPACK_IMPORTED_MODULE_1__.IslandManager(rawIslands);
        this.broadPhase = new _geometry__WEBPACK_IMPORTED_MODULE_2__.BroadPhase(rawBroadPhase);
        this.narrowPhase = new _geometry__WEBPACK_IMPORTED_MODULE_3__.NarrowPhase(rawNarrowPhase);
        this.bodies = new _dynamics__WEBPACK_IMPORTED_MODULE_4__.RigidBodySet(rawBodies);
        this.colliders = new _geometry__WEBPACK_IMPORTED_MODULE_5__.ColliderSet(rawColliders);
        this.joints = new _dynamics__WEBPACK_IMPORTED_MODULE_6__.JointSet(rawJoints);
        this.ccdSolver = new _dynamics__WEBPACK_IMPORTED_MODULE_7__.CCDSolver(rawCCDSolver);
        this.queryPipeline = new _query_pipeline__WEBPACK_IMPORTED_MODULE_8__.QueryPipeline(rawQueryPipeline);
        this.physicsPipeline = new _physics_pipeline__WEBPACK_IMPORTED_MODULE_9__.PhysicsPipeline(rawPhysicsPipeline);
        this.serializationPipeline = new _serialization_pipeline__WEBPACK_IMPORTED_MODULE_10__.SerializationPipeline(rawSerializationPipeline);
    }
    /**
     * Release the WASM memory occupied by this physics world.
     *
     * All the fields of this physics world will be freed as well,
     * so there is no need to call their `.free()` methods individually.
     */
    World.prototype.free = function () {
        this.integrationParameters.free();
        this.islands.free();
        this.broadPhase.free();
        this.narrowPhase.free();
        this.bodies.free();
        this.colliders.free();
        this.joints.free();
        this.ccdSolver.free();
        this.queryPipeline.free();
        this.physicsPipeline.free();
        this.serializationPipeline.free();
        this.integrationParameters = undefined;
        this.islands = undefined;
        this.broadPhase = undefined;
        this.narrowPhase = undefined;
        this.bodies = undefined;
        this.colliders = undefined;
        this.ccdSolver = undefined;
        this.joints = undefined;
        this.queryPipeline = undefined;
        this.physicsPipeline = undefined;
        this.serializationPipeline = undefined;
    };
    World.fromRaw = function (raw) {
        if (!raw)
            return null;
        return new World(_math__WEBPACK_IMPORTED_MODULE_11__.VectorOps.fromRaw(raw.takeGravity()), raw.takeIntegrationParameters(), raw.takeIslandManager(), raw.takeBroadPhase(), raw.takeNarrowPhase(), raw.takeBodies(), raw.takeColliders(), raw.takeJoints());
    };
    /**
     * Takes a snapshot of this world.
     *
     * Use `World.restoreSnapshot` to create a new physics world with a state identical to
     * the state when `.takeSnapshot()` is called.
     */
    World.prototype.takeSnapshot = function () {
        return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.joints);
    };
    /**
     * Creates a new physics world from a snapshot.
     *
     * This new physics world will be an identical copy of the snapshoted physics world.
     */
    World.restoreSnapshot = function (data) {
        var deser = new _serialization_pipeline__WEBPACK_IMPORTED_MODULE_10__.SerializationPipeline();
        return deser.deserializeAll(data);
    };
    /**
     * Advance the simulation by one time step.
     *
     * All events generated by the physics engine are ignored.
     *
     * @param EventQueue - (optional) structure responsible for collecting
     *   events generated by the physics engine.
     */
    World.prototype.step = function (eventQueue, hooks) {
        this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.joints, this.ccdSolver, eventQueue, hooks);
        this.queryPipeline.update(this.islands, this.bodies, this.colliders);
    };
    Object.defineProperty(World.prototype, "timestep", {
        /**
         * The current simulation timestep.
         */
        get: function () {
            return this.integrationParameters.dt;
        },
        /**
         * Sets the new simulation timestep.
         *
         * The simulation timestep governs by how much the physics state of the world will
         * be integrated. A simulation timestep should:
         * - be as small as possible. Typical values evolve around 0.016 (assuming the chosen unit is milliseconds,
         * corresponds to the time between two frames of a game running at 60FPS).
         * - not vary too much during the course of the simulation. A timestep with large variations may
         * cause instabilities in the simulation.
         *
         * @param timestep - The timestep length, in milliseconds.
         */
        set: function (dt) {
            this.integrationParameters.dt = dt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(World.prototype, "maxVelocityIterations", {
        /**
         * The maximum velocity iterations the velocity-based force constraint solver can make.
         */
        get: function () {
            return this.integrationParameters.maxVelocityIterations;
        },
        /**
         * Sets the maximum number of velocity iterations (default: 4).
         *
         * The greater this value is, the most rigid and realistic the physics simulation will be.
         * However a greater number of iterations is more computationally intensive.
         *
         * @param niter - The new maximum number of velocity iterations.
         */
        set: function (niter) {
            this.integrationParameters.maxVelocityIterations = niter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(World.prototype, "maxPositionIterations", {
        /**
         * The maximum position iterations the position-based constraint regularization solver can make.
         */
        get: function () {
            return this.integrationParameters.maxPositionIterations;
        },
        /**
         * Sets the maximum number of position iterations (default: 1).
         *
         * The greater this value is, the less penetrations will be visible after one timestep where
         * the velocity solver did not converge entirely. Large values will degrade significantly
         * the performance of the simulation.
         *
         * To increase realism of the simulation it is recommended, more efficient, and more effecive,
         * to increase the number of velocity iterations instead of this number of position iterations.
         *
         * @param niter - The new maximum number of position iterations.
         */
        set: function (niter) {
            this.integrationParameters.maxPositionIterations = niter;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates a new rigid-body from the given rigd-body descriptior.
     *
     * @param body - The description of the rigid-body to create.
     */
    World.prototype.createRigidBody = function (body) {
        return this.bodies.get(this.bodies.createRigidBody(body));
    };
    /**
     * Creates a new collider.
     *
     * @param desc - The description of the collider.
     * @param parentHandle - The handle of the rigid-body this collider is attached to.
     */
    World.prototype.createCollider = function (desc, parentHandle) {
        return this.colliders.get(this.colliders.createCollider(this.bodies, desc, parentHandle));
    };
    /**
     * Creates a new joint from the given joint descriptior.
     *
     * @param joint - The description of the joint to create.
     * @param parent1 - The first rigid-body attached to this joint.
     * @param parent2 - The second rigid-body attached to this joint.
     */
    World.prototype.createJoint = function (params, parent1, parent2) {
        return this.joints.get(this.joints.createJoint(this.bodies, params, parent1.handle, parent2.handle));
    };
    /**
     * Retrieves a rigid-body from its handle.
     *
     * @param handle - The integer handle of the rigid-body to retrieve.
     */
    World.prototype.getRigidBody = function (handle) {
        return this.bodies.get(handle);
    };
    /**
     * Retrieves a collider from its handle.
     *
     * @param handle - The integer handle of the collider to retrieve.
     */
    World.prototype.getCollider = function (handle) {
        return this.colliders.get(handle);
    };
    /**
     * Retrieves a joint from its handle.
     *
     * @param handle - The integer handle of the rigid-body to retrieve.
     */
    World.prototype.getJoint = function (handle) {
        return this.joints.get(handle);
    };
    /**
     * Removes the given rigid-body from this physics world.
     *
     * This will remove this rigid-body as well as all its attached colliders and joints.
     * Every other bodies touching or attached by joints to this rigid-body will be woken-up.
     *
     * @param body - The rigid-body to remove.
     */
    World.prototype.removeRigidBody = function (body) {
        this.bodies.remove(body.handle, this.islands, this.colliders, this.joints);
    };
    /**
     * Removes the given collider from this physics world.
     *
     * @param collider - The collider to remove.
     * @param wakeUp - If set to `true`, the rigid-body this collider is attached to will be awaken.
     */
    World.prototype.removeCollider = function (collider, wakeUp) {
        this.colliders.remove(collider.handle, this.islands, this.bodies, wakeUp);
    };
    /**
     * Removes the given joint from this physics world.
     *
     * @param joint - The joint to remove.
     * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
     */
    World.prototype.removeJoint = function (joint, wakeUp) {
        this.joints.remove(joint.handle, this.islands, this.bodies, wakeUp);
    };
    /**
     * Applies the given closure to each collider managed by this physics world.
     *
     * @param f(collider) - The function to apply to each collider managed by this physics world. Called as `f(collider)`.
     */
    World.prototype.forEachCollider = function (f) {
        this.colliders.forEachCollider(f);
    };
    /**
     * Applies the given closure to the integer handle of each collider managed by this physics world.
     *
     * @param f(handle) - The function to apply to the integer handle of each collider managed by this physics world. Called as `f(collider)`.
     */
    World.prototype.forEachColliderHandle = function (f) {
        this.colliders.forEachColliderHandle(f);
    };
    /**
     * Applies the given closure to each rigid-body managed by this physics world.
     *
     * @param f(body) - The function to apply to each rigid-body managed by this physics world. Called as `f(collider)`.
     */
    World.prototype.forEachRigidBody = function (f) {
        this.bodies.forEachRigidBody(f);
    };
    /**
     * Applies the given closure to the integer handle of each rigid-body managed by this physics world.
     *
     * @param f(handle) - The function to apply to the integer handle of each rigid-body managed by this physics world. Called as `f(collider)`.
     */
    World.prototype.forEachRigidBodyHandle = function (f) {
        this.bodies.forEachRigidBodyHandle(f);
    };
    /**
     * Applies the given closure to each active rigid-body managed by this physics world.
     *
     * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
     * the physics engine in order to save computational power. A sleeping rigid-body never moves
     * unless it is moved manually by the user.
     *
     * @param f - The function to apply to each active rigid-body managed by this physics world. Called as `f(collider)`.
     */
    World.prototype.forEachActiveRigidBody = function (f) {
        this.bodies.forEachActiveRigidBody(this.islands, f);
    };
    /**
     * Applies the given closure to the integer handle of each active rigid-body
     * managed by this physics world.
     *
     * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
     * the physics engine in order to save computational power. A sleeping rigid-body never moves
     * unless it is moved manually by the user.
     *
     * @param f(handle) - The function to apply to the integer handle of each active rigid-body managed by this
     *   physics world. Called as `f(collider)`.
     */
    World.prototype.forEachActiveRigidBodyHandle = function (f) {
        this.islands.forEachActiveRigidBodyHandle(f);
    };
    /**
     * Find the closest intersection between a ray and the physics world.
     *
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     */
    World.prototype.castRay = function (ray, maxToi, solid, groups) {
        return this.queryPipeline.castRay(this.colliders, ray, maxToi, solid, groups);
    };
    /**
     * Find the closest intersection between a ray and the physics world.
     *
     * This also computes the normal at the hit point.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     */
    World.prototype.castRayAndGetNormal = function (ray, maxToi, solid, groups) {
        return this.queryPipeline.castRayAndGetNormal(this.colliders, ray, maxToi, solid, groups);
    };
    /**
     * Cast a ray and collects all the intersections between a ray and the scene.
     *
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
     *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
     */
    World.prototype.intersectionsWithRay = function (ray, maxToi, solid, groups, callback) {
        this.queryPipeline.intersectionsWithRay(this.colliders, ray, maxToi, solid, groups, callback);
    };
    /**
     * Gets the handle of up to one collider intersecting the given shape.
     *
     * @param shapePos - The position of the shape used for the intersection test.
     * @param shapeRot - The orientation of the shape used for the intersection test.
     * @param shape - The shape used for the intersection test.
     * @param groups - The bit groups and filter associated to the ray, in order to only
     *   hit the colliders with collision groups compatible with the ray's group.
     */
    World.prototype.intersectionWithShape = function (shapePos, shapeRot, shape, groups) {
        return this.queryPipeline.intersectionWithShape(this.colliders, shapePos, shapeRot, shape, groups);
    };
    /**
     * Find the projection of a point on the closest collider.
     *
     * @param point - The point to project.
     * @param solid - If this is set to `true` then the collider shapes are considered to
     *   be plain (if the point is located inside of a plain shape, its projection is the point
     *   itself). If it is set to `false` the collider shapes are considered to be hollow
     *   (if the point is located inside of an hollow shape, it is projected on the shape's
     *   boundary).
     * @param groups - The bit groups and filter associated to the point to project, in order to only
     *   project on colliders with collision groups compatible with the ray's group.
     */
    World.prototype.projectPoint = function (point, solid, groups) {
        return this.queryPipeline.projectPoint(this.colliders, point, solid, groups);
    };
    /**
     * Find all the colliders containing the given point.
     *
     * @param point - The point used for the containment test.
     * @param groups - The bit groups and filter associated to the point to test, in order to only
     *   test on colliders with collision groups compatible with the ray's group.
     * @param callback - A function called with the handles of each collider with a shape
     *   containing the `point`.
     */
    World.prototype.intersectionsWithPoint = function (point, groups, callback) {
        this.queryPipeline.intersectionsWithPoint(this.colliders, point, groups, callback);
    };
    /**
     * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
     * This is similar to ray-casting except that we are casting a whole shape instead of
     * just a point (the ray origin).
     *
     * @param shapePos - The initial position of the shape to cast.
     * @param shapeRot - The initial rotation of the shape to cast.
     * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
     * @param shape - The shape to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
     * @param groups - The bit groups and filter associated to the shape to cast, in order to only
     *   test on colliders with collision groups compatible with this group.
     */
    World.prototype.castShape = function (shapePos, shapeRot, shapeVel, shape, maxToi, groups) {
        return this.queryPipeline.castShape(this.colliders, shapePos, shapeRot, shapeVel, shape, maxToi, groups);
    };
    /**
     * Retrieve all the colliders intersecting the given shape.
     *
     * @param shapePos - The position of the shape to test.
     * @param shapeRot - The orientation of the shape to test.
     * @param shape - The shape to test.
     * @param groups - The bit groups and filter associated to the shape to test, in order to only
     *   test on colliders with collision groups compatible with this group.
     * @param callback - A function called with the handles of each collider intersecting the `shape`.
     */
    World.prototype.intersectionsWithShape = function (shapePos, shapeRot, shape, groups, callback) {
        this.queryPipeline.intersectionsWithShape(this.colliders, shapePos, shapeRot, shape, groups, callback);
    };
    /**
     * Finds the handles of all the colliders with an AABB intersecting the given AABB.
     *
     * @param aabbCenter - The center of the AABB to test.
     * @param aabbHalfExtents - The half-extents of the AABB to test.
     * @param callback - The callback that will be called with the handles of all the colliders
     *                   currently intersecting the given AABB.
     */
    World.prototype.collidersWithAabbIntersectingAabb = function (aabbCenter, aabbHalfExtents, callback) {
        this.queryPipeline.collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback);
    };
    /**
     * Enumerates all the colliders potentially in contact with the given collider.
     *
     * @param collider1 - The second collider involved in the contact.
     * @param f - Closure that will be called on each collider that is in contact with `collider1`.
     */
    World.prototype.contactsWith = function (collider1, f) {
        this.narrowPhase.contactsWith(collider1, f);
    };
    /**
     * Enumerates all the colliders intersecting the given colliders, assuming one of them
     * is a sensor.
     */
    World.prototype.intersectionsWith = function (collider1, f) {
        this.narrowPhase.intersectionsWith(collider1, f);
    };
    /**
     * Iterates through all the contact manifolds between the given pair of colliders.
     *
     * @param collider1 - The first collider involved in the contact.
     * @param collider2 - The second collider involved in the contact.
     * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
     *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
     *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
     */
    World.prototype.contactPair = function (collider1, collider2, f) {
        this.narrowPhase.contactPair(collider1, collider2, f);
    };
    /**
     * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
     * @param collider1 − The first collider involved in the intersection.
     * @param collider2 − The second collider involved in the intersection.
     */
    World.prototype.intersectionPair = function (collider1, collider2) {
        return this.narrowPhase.intersectionPair(collider1, collider2);
    };
    return World;
}());


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/rapier.js":
/*!***************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/rapier.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ActiveCollisionTypes),
/* harmony export */   "ActiveEvents": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ActiveEvents),
/* harmony export */   "ActiveHooks": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ActiveHooks),
/* harmony export */   "Ball": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Ball),
/* harmony export */   "BallJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.BallJoint),
/* harmony export */   "BroadPhase": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.BroadPhase),
/* harmony export */   "CCDSolver": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.CCDSolver),
/* harmony export */   "Capsule": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Capsule),
/* harmony export */   "CoefficientCombineRule": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.CoefficientCombineRule),
/* harmony export */   "Collider": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Collider),
/* harmony export */   "ColliderDesc": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ColliderDesc),
/* harmony export */   "ColliderSet": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ColliderSet),
/* harmony export */   "Cone": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Cone),
/* harmony export */   "ConvexPolyhedron": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ConvexPolyhedron),
/* harmony export */   "Cuboid": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Cuboid),
/* harmony export */   "Cylinder": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Cylinder),
/* harmony export */   "EventQueue": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.EventQueue),
/* harmony export */   "FixedJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.FixedJoint),
/* harmony export */   "Heightfield": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Heightfield),
/* harmony export */   "IntegrationParameters": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.IntegrationParameters),
/* harmony export */   "IslandManager": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.IslandManager),
/* harmony export */   "Joint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Joint),
/* harmony export */   "JointParams": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.JointParams),
/* harmony export */   "JointSet": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.JointSet),
/* harmony export */   "JointType": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.JointType),
/* harmony export */   "NarrowPhase": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.NarrowPhase),
/* harmony export */   "PhysicsPipeline": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.PhysicsPipeline),
/* harmony export */   "PointColliderProjection": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.PointColliderProjection),
/* harmony export */   "Polyline": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Polyline),
/* harmony export */   "PrismaticJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.PrismaticJoint),
/* harmony export */   "Quaternion": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Quaternion),
/* harmony export */   "Ray": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Ray),
/* harmony export */   "RayColliderIntersection": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RayColliderIntersection),
/* harmony export */   "RayColliderToi": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RayColliderToi),
/* harmony export */   "RevoluteJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RevoluteJoint),
/* harmony export */   "RigidBody": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RigidBody),
/* harmony export */   "RigidBodyDesc": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RigidBodyDesc),
/* harmony export */   "RigidBodySet": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RigidBodySet),
/* harmony export */   "RigidBodyType": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RigidBodyType),
/* harmony export */   "RotationOps": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RotationOps),
/* harmony export */   "RoundCone": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RoundCone),
/* harmony export */   "RoundConvexPolyhedron": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RoundConvexPolyhedron),
/* harmony export */   "RoundCuboid": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RoundCuboid),
/* harmony export */   "RoundCylinder": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RoundCylinder),
/* harmony export */   "RoundTriangle": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RoundTriangle),
/* harmony export */   "Segment": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Segment),
/* harmony export */   "SerializationPipeline": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.SerializationPipeline),
/* harmony export */   "ShapeColliderTOI": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ShapeColliderTOI),
/* harmony export */   "ShapeType": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ShapeType),
/* harmony export */   "SolverFlags": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.SolverFlags),
/* harmony export */   "SpringModel": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.SpringModel),
/* harmony export */   "TempContactManifold": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.TempContactManifold),
/* harmony export */   "TriMesh": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.TriMesh),
/* harmony export */   "Triangle": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Triangle),
/* harmony export */   "UnitJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.UnitJoint),
/* harmony export */   "Vector3": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Vector3),
/* harmony export */   "VectorOps": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.VectorOps),
/* harmony export */   "World": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.World),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.version)
/* harmony export */ });
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports */ "./node_modules/@dimforge/rapier3d/exports.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_exports__WEBPACK_IMPORTED_MODULE_0__]);
_exports__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_exports__WEBPACK_IMPORTED_MODULE_0__);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawBroadPhase": () => (/* binding */ RawBroadPhase),
/* harmony export */   "RawCCDSolver": () => (/* binding */ RawCCDSolver),
/* harmony export */   "RawColliderSet": () => (/* binding */ RawColliderSet),
/* harmony export */   "RawContactManifold": () => (/* binding */ RawContactManifold),
/* harmony export */   "RawContactPair": () => (/* binding */ RawContactPair),
/* harmony export */   "RawDeserializedWorld": () => (/* binding */ RawDeserializedWorld),
/* harmony export */   "RawEventQueue": () => (/* binding */ RawEventQueue),
/* harmony export */   "RawIntegrationParameters": () => (/* binding */ RawIntegrationParameters),
/* harmony export */   "RawIslandManager": () => (/* binding */ RawIslandManager),
/* harmony export */   "RawJointParams": () => (/* binding */ RawJointParams),
/* harmony export */   "RawJointSet": () => (/* binding */ RawJointSet),
/* harmony export */   "RawJointType": () => (/* binding */ RawJointType),
/* harmony export */   "RawNarrowPhase": () => (/* binding */ RawNarrowPhase),
/* harmony export */   "RawPhysicsPipeline": () => (/* binding */ RawPhysicsPipeline),
/* harmony export */   "RawPointColliderProjection": () => (/* binding */ RawPointColliderProjection),
/* harmony export */   "RawQueryPipeline": () => (/* binding */ RawQueryPipeline),
/* harmony export */   "RawRayColliderIntersection": () => (/* binding */ RawRayColliderIntersection),
/* harmony export */   "RawRayColliderToi": () => (/* binding */ RawRayColliderToi),
/* harmony export */   "RawRigidBodySet": () => (/* binding */ RawRigidBodySet),
/* harmony export */   "RawRigidBodyType": () => (/* binding */ RawRigidBodyType),
/* harmony export */   "RawRotation": () => (/* binding */ RawRotation),
/* harmony export */   "RawSerializationPipeline": () => (/* binding */ RawSerializationPipeline),
/* harmony export */   "RawShape": () => (/* binding */ RawShape),
/* harmony export */   "RawShapeColliderTOI": () => (/* binding */ RawShapeColliderTOI),
/* harmony export */   "RawShapeType": () => (/* binding */ RawShapeType),
/* harmony export */   "RawSpringModel": () => (/* binding */ RawSpringModel),
/* harmony export */   "RawVector": () => (/* binding */ RawVector),
/* harmony export */   "__wbg_bind_07839579f523aa89": () => (/* binding */ __wbg_bind_07839579f523aa89),
/* harmony export */   "__wbg_buffer_79a3294266d4e783": () => (/* binding */ __wbg_buffer_79a3294266d4e783),
/* harmony export */   "__wbg_call_72facd37dbc97ddb": () => (/* binding */ __wbg_call_72facd37dbc97ddb),
/* harmony export */   "__wbg_call_c143b19d87139944": () => (/* binding */ __wbg_call_c143b19d87139944),
/* harmony export */   "__wbg_call_e3c72355d091d5d4": () => (/* binding */ __wbg_call_e3c72355d091d5d4),
/* harmony export */   "__wbg_call_e91f71ddf1f45cff": () => (/* binding */ __wbg_call_e91f71ddf1f45cff),
/* harmony export */   "__wbg_get_6d26c712aa73c8b2": () => (/* binding */ __wbg_get_6d26c712aa73c8b2),
/* harmony export */   "__wbg_globalThis_038a6ea0ff17789f": () => (/* binding */ __wbg_globalThis_038a6ea0ff17789f),
/* harmony export */   "__wbg_global_4f93ce884bcee597": () => (/* binding */ __wbg_global_4f93ce884bcee597),
/* harmony export */   "__wbg_length_68e13e7bbd918464": () => (/* binding */ __wbg_length_68e13e7bbd918464),
/* harmony export */   "__wbg_new_945397fb09fec0b8": () => (/* binding */ __wbg_new_945397fb09fec0b8),
/* harmony export */   "__wbg_newnoargs_1a11e7e8c906996c": () => (/* binding */ __wbg_newnoargs_1a11e7e8c906996c),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_22a36e6023ad3cd0": () => (/* binding */ __wbg_newwithbyteoffsetandlength_22a36e6023ad3cd0),
/* harmony export */   "__wbg_now_885ca88fafee0fd1": () => (/* binding */ __wbg_now_885ca88fafee0fd1),
/* harmony export */   "__wbg_rawraycolliderintersection_new": () => (/* binding */ __wbg_rawraycolliderintersection_new),
/* harmony export */   "__wbg_self_b4546ea7b590539e": () => (/* binding */ __wbg_self_b4546ea7b590539e),
/* harmony export */   "__wbg_set_223873223acf6d07": () => (/* binding */ __wbg_set_223873223acf6d07),
/* harmony export */   "__wbg_window_c279fea81f426a68": () => (/* binding */ __wbg_window_c279fea81f426a68),
/* harmony export */   "__wbindgen_boolean_get": () => (/* binding */ __wbindgen_boolean_get),
/* harmony export */   "__wbindgen_debug_string": () => (/* binding */ __wbindgen_debug_string),
/* harmony export */   "__wbindgen_is_undefined": () => (/* binding */ __wbindgen_is_undefined),
/* harmony export */   "__wbindgen_memory": () => (/* binding */ __wbindgen_memory),
/* harmony export */   "__wbindgen_number_get": () => (/* binding */ __wbindgen_number_get),
/* harmony export */   "__wbindgen_number_new": () => (/* binding */ __wbindgen_number_new),
/* harmony export */   "__wbindgen_object_clone_ref": () => (/* binding */ __wbindgen_object_clone_ref),
/* harmony export */   "__wbindgen_object_drop_ref": () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   "__wbindgen_string_new": () => (/* binding */ __wbindgen_string_new),
/* harmony export */   "__wbindgen_throw": () => (/* binding */ __wbindgen_throw),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rapier_wasm3d_bg.wasm */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(_rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(_rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetFloat64Memory0;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(_rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* @returns {string}
*/
function version() {
    try {
        const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.version(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1);
    }
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
    if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetFloat32Memory0 = new Float32Array(_rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(_rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
*/
const RawJointType = Object.freeze({ Ball:0,"0":"Ball",Fixed:1,"1":"Fixed",Prismatic:2,"2":"Prismatic",Revolute:3,"3":"Revolute", });
/**
*/
const RawSpringModel = Object.freeze({ Disabled:0,"0":"Disabled",VelocityBased:1,"1":"VelocityBased",AccelerationBased:2,"2":"AccelerationBased",ForceBased:3,"3":"ForceBased", });
/**
*/
const RawRigidBodyType = Object.freeze({ Dynamic:0,"0":"Dynamic",Static:1,"1":"Static",KinematicPositionBased:2,"2":"KinematicPositionBased",KinematicVelocityBased:3,"3":"KinematicVelocityBased", });
/**
*/
const RawShapeType = Object.freeze({ Ball:0,"0":"Ball",Cuboid:1,"1":"Cuboid",Capsule:2,"2":"Capsule",Segment:3,"3":"Segment",Polyline:4,"4":"Polyline",Triangle:5,"5":"Triangle",TriMesh:6,"6":"TriMesh",HeightField:7,"7":"HeightField",Compound:8,"8":"Compound",ConvexPolyhedron:9,"9":"ConvexPolyhedron",Cylinder:10,"10":"Cylinder",Cone:11,"11":"Cone",RoundCuboid:12,"12":"RoundCuboid",RoundTriangle:13,"13":"RoundTriangle",RoundCylinder:14,"14":"RoundCylinder",RoundCone:15,"15":"RoundCone",RoundConvexPolyhedron:16,"16":"RoundConvexPolyhedron", });
/**
*/
class RawBroadPhase {

    static __wrap(ptr) {
        const obj = Object.create(RawBroadPhase.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawbroadphase_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawbroadphase_new();
        return RawBroadPhase.__wrap(ret);
    }
}
/**
*/
class RawCCDSolver {

    static __wrap(ptr) {
        const obj = Object.create(RawCCDSolver.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawccdsolver_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawccdsolver_new();
        return RawCCDSolver.__wrap(ret);
    }
}
/**
*/
class RawColliderSet {

    static __wrap(ptr) {
        const obj = Object.create(RawColliderSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawcolliderset_free(ptr);
    }
    /**
    * The world-space translation of this collider.
    * @param {number} handle
    * @returns {RawVector}
    */
    coTranslation(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space orientation of this collider.
    * @param {number} handle
    * @returns {RawRotation}
    */
    coRotation(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Sets the translation of this collider.
    *
    * # Parameters
    * - `x`: the world-space position of the collider along the `x` axis.
    * - `y`: the world-space position of the collider along the `y` axis.
    * - `z`: the world-space position of the collider along the `z` axis.
    * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    coSetTranslation(handle, x, y, z) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetTranslation(this.ptr, handle, x, y, z);
    }
    /**
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    coSetTranslationWrtParent(handle, x, y, z) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetTranslationWrtParent(this.ptr, handle, x, y, z);
    }
    /**
    * Sets the rotation quaternion of this collider.
    *
    * This does nothing if a zero quaternion is provided.
    *
    * # Parameters
    * - `x`: the first vector component of the quaternion.
    * - `y`: the second vector component of the quaternion.
    * - `z`: the third vector component of the quaternion.
    * - `w`: the scalar component of the quaternion.
    * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    */
    coSetRotation(handle, x, y, z, w) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetRotation(this.ptr, handle, x, y, z, w);
    }
    /**
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    */
    coSetRotationWrtParent(handle, x, y, z, w) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetRotationWrtParent(this.ptr, handle, x, y, z, w);
    }
    /**
    * Is this collider a sensor?
    * @param {number} handle
    * @returns {boolean}
    */
    coIsSensor(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coIsSensor(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The type of the shape of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coShapeType(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coShapeType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The half-extents of this collider if it is has a cuboid shape.
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    coHalfExtents(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHalfExtents(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * The radius of this collider if it is a ball, capsule, cylinder, or cone shape.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coRadius(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRadius(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The radius of this collider if it is a capsule, cylinder, or cone shape.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coHalfHeight(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHalfHeight(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The radius of the round edges of this collider if it is a round cylinder.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coRoundRadius(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRoundRadius(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The vertices of this triangle mesh, polyline, convex polyhedron, or convex polyhedron, if it is one.
    * @param {number} handle
    * @returns {Float32Array | undefined}
    */
    coVertices(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coVertices(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF32FromWasm0(r0, r1).slice();
                _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The indices of this triangle mesh, polyline, or convex polyhedron, if it is one.
    * @param {number} handle
    * @returns {Uint32Array | undefined}
    */
    coIndices(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coIndices(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU32FromWasm0(r0, r1).slice();
                _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The height of this heightfield if it is one.
    * @param {number} handle
    * @returns {Float32Array | undefined}
    */
    coHeightfieldHeights(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHeightfieldHeights(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF32FromWasm0(r0, r1).slice();
                _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The scaling factor applied of this heightfield if it is one.
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    coHeightfieldScale(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHeightfieldScale(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * The number of rows on this heightfield's height matrix, if it is one.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coHeightfieldNRows(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHeightfieldNRows(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The number of columns on this heightfield's height matrix, if it is one.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coHeightfieldNCols(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHeightfieldNCols(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The unique integer identifier of the collider this collider is attached to.
    * @param {number} handle
    * @returns {number}
    */
    coParent(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coParent(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The friction coefficient of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coFriction(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coFriction(this.ptr, handle);
        return ret;
    }
    /**
    * The density of this collider.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coDensity(handle) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coDensity(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The collision groups of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coCollisionGroups(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coCollisionGroups(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The solver groups of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coSolverGroups(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSolverGroups(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The physics hooks enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveHooks(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coActiveHooks(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The collision types enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveCollisionTypes(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coActiveCollisionTypes(this.ptr, handle);
        return ret;
    }
    /**
    * The events enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveEvents(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coActiveEvents(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {boolean} is_sensor
    */
    coSetSensor(handle, is_sensor) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetSensor(this.ptr, handle, is_sensor);
    }
    /**
    * @param {number} handle
    * @param {number} restitution
    */
    coSetRestitution(handle, restitution) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetRestitution(this.ptr, handle, restitution);
    }
    /**
    * @param {number} handle
    * @param {number} friction
    */
    coSetFriction(handle, friction) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetFriction(this.ptr, handle, friction);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    coFrictionCombineRule(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coFrictionCombineRule(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {number} rule
    */
    coSetFrictionCombineRule(handle, rule) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetFrictionCombineRule(this.ptr, handle, rule);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    coRestitutionCombineRule(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRestitutionCombineRule(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {number} rule
    */
    coSetRestitutionCombineRule(handle, rule) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetRestitutionCombineRule(this.ptr, handle, rule);
    }
    /**
    * @param {number} handle
    * @param {number} groups
    */
    coSetCollisionGroups(handle, groups) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetCollisionGroups(this.ptr, handle, groups);
    }
    /**
    * @param {number} handle
    * @param {number} groups
    */
    coSetSolverGroups(handle, groups) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetSolverGroups(this.ptr, handle, groups);
    }
    /**
    * @param {number} handle
    * @param {number} hooks
    */
    coSetActiveHooks(handle, hooks) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetActiveHooks(this.ptr, handle, hooks);
    }
    /**
    * @param {number} handle
    * @param {number} events
    */
    coSetActiveEvents(handle, events) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetActiveEvents(this.ptr, handle, events);
    }
    /**
    * @param {number} handle
    * @param {number} types
    */
    coSetActiveCollisionTypes(handle, types) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetActiveCollisionTypes(this.ptr, handle, types);
    }
    /**
    * @param {number} handle
    * @param {RawShape} shape
    */
    coSetShape(handle, shape) {
        _assertClass(shape, RawShape);
        var ptr0 = shape.ptr;
        shape.ptr = 0;
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetShape(this.ptr, handle, ptr0);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_new();
        return RawColliderSet.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * @param {RawShape} shape
    * @param {RawVector} translation
    * @param {RawRotation} rotation
    * @param {boolean} useMassProps
    * @param {number} mass
    * @param {RawVector} centerOfMass
    * @param {RawVector} principalAngularInertia
    * @param {RawRotation} angularInertiaFrame
    * @param {number} density
    * @param {number} friction
    * @param {number} restitution
    * @param {number} frictionCombineRule
    * @param {number} restitutionCombineRule
    * @param {boolean} isSensor
    * @param {number} collisionGroups
    * @param {number} solverGroups
    * @param {number} activeCollisionTypes
    * @param {number} activeHooks
    * @param {number} activeEvents
    * @param {boolean} hasParent
    * @param {number} parent
    * @param {RawRigidBodySet} bodies
    * @returns {number | undefined}
    */
    createCollider(shape, translation, rotation, useMassProps, mass, centerOfMass, principalAngularInertia, angularInertiaFrame, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, hasParent, parent, bodies) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(shape, RawShape);
            _assertClass(translation, RawVector);
            _assertClass(rotation, RawRotation);
            _assertClass(centerOfMass, RawVector);
            _assertClass(principalAngularInertia, RawVector);
            _assertClass(angularInertiaFrame, RawRotation);
            _assertClass(bodies, RawRigidBodySet);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_createCollider(retptr, this.ptr, shape.ptr, translation.ptr, rotation.ptr, useMassProps, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, hasParent, parent, bodies.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Removes a collider from this set and wake-up the rigid-body it is attached to.
    * @param {number} handle
    * @param {RawIslandManager} islands
    * @param {RawRigidBodySet} bodies
    * @param {boolean} wakeUp
    */
    remove(handle, islands, bodies, wakeUp) {
        _assertClass(islands, RawIslandManager);
        _assertClass(bodies, RawRigidBodySet);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_remove(this.ptr, handle, islands.ptr, bodies.ptr, wakeUp);
    }
    /**
    * Checks if a collider with the given integer handle exists.
    * @param {number} handle
    * @returns {boolean}
    */
    isHandleValid(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each collider managed by this collider set.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each collider managed by this collider set. Called as `f(handle)`.
    * @param {Function} f
    */
    forEachColliderHandle(f) {
        try {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_forEachColliderHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawContactManifold {

    static __wrap(ptr) {
        const obj = Object.create(RawContactManifold.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawcontactmanifold_free(ptr);
    }
    /**
    * @returns {RawVector}
    */
    normal() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    local_n1() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_local_n1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    local_n2() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_local_n1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    subshape1() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_subshape1(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    subshape2() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_subshape1(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    num_contacts() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_num_contacts(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    contact_local_p1(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_local_p1(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    contact_local_p2(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_local_p1(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_dist(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_dist(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_fid1(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_fid1(this.ptr, i);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_fid2(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_fid2(this.ptr, i);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_impulse(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_impulse(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_tangent_impulse_x(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_tangent_impulse_x(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_tangent_impulse_y(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_tangent_impulse_y(this.ptr, i);
        return ret;
    }
    /**
    * @returns {number}
    */
    num_solver_contacts() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_num_solver_contacts(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    solver_contact_point(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_point(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_dist(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_dist(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_friction(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_friction(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_restitution(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_restitution(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {RawVector}
    */
    solver_contact_tangent_velocity(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr, i);
        return RawVector.__wrap(ret);
    }
}
/**
*/
class RawContactPair {

    static __wrap(ptr) {
        const obj = Object.create(RawContactPair.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawcontactpair_free(ptr);
    }
    /**
    * @returns {number}
    */
    collider1() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactpair_collider1(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    collider2() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactpair_collider2(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    numContactManifolds() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactpair_numContactManifolds(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawContactManifold | undefined}
    */
    contactManifold(i) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactpair_contactManifold(this.ptr, i);
        return ret === 0 ? undefined : RawContactManifold.__wrap(ret);
    }
}
/**
*/
class RawDeserializedWorld {

    static __wrap(ptr) {
        const obj = Object.create(RawDeserializedWorld.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawdeserializedworld_free(ptr);
    }
    /**
    * @returns {RawVector | undefined}
    */
    takeGravity() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeGravity(this.ptr);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @returns {RawIntegrationParameters | undefined}
    */
    takeIntegrationParameters() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeIntegrationParameters(this.ptr);
        return ret === 0 ? undefined : RawIntegrationParameters.__wrap(ret);
    }
    /**
    * @returns {RawIslandManager | undefined}
    */
    takeIslandManager() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeIslandManager(this.ptr);
        return ret === 0 ? undefined : RawIslandManager.__wrap(ret);
    }
    /**
    * @returns {RawBroadPhase | undefined}
    */
    takeBroadPhase() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeBroadPhase(this.ptr);
        return ret === 0 ? undefined : RawBroadPhase.__wrap(ret);
    }
    /**
    * @returns {RawNarrowPhase | undefined}
    */
    takeNarrowPhase() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeNarrowPhase(this.ptr);
        return ret === 0 ? undefined : RawNarrowPhase.__wrap(ret);
    }
    /**
    * @returns {RawRigidBodySet | undefined}
    */
    takeBodies() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeBodies(this.ptr);
        return ret === 0 ? undefined : RawRigidBodySet.__wrap(ret);
    }
    /**
    * @returns {RawColliderSet | undefined}
    */
    takeColliders() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeColliders(this.ptr);
        return ret === 0 ? undefined : RawColliderSet.__wrap(ret);
    }
    /**
    * @returns {RawJointSet | undefined}
    */
    takeJoints() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeJoints(this.ptr);
        return ret === 0 ? undefined : RawJointSet.__wrap(ret);
    }
}
/**
* A structure responsible for collecting events generated
* by the physics engine.
*/
class RawEventQueue {

    static __wrap(ptr) {
        const obj = Object.create(RawEventQueue.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_raweventqueue_free(ptr);
    }
    /**
    * Creates a new event collector.
    *
    * # Parameters
    * - `autoDrain`: setting this to `true` is strongly recommended. If true, the collector will
    * be automatically drained before each `world.step(collector)`. If false, the collector will
    * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
    * RAM if no drain is performed.
    * @param {boolean} autoDrain
    */
    constructor(autoDrain) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.raweventqueue_new(autoDrain);
        return RawEventQueue.__wrap(ret);
    }
    /**
    * Applies the given javascript closure on each contact event of this collector, then clear
    * the internal contact event buffer.
    *
    * # Parameters
    * - `f(handle1, handle2, started)`:  JavaScript closure applied to each contact event. The
    * closure should take three arguments: two integers representing the handles of the colliders
    * involved in the contact, and a boolean indicating if the contact started (true) or stopped
    * (false).
    * @param {Function} f
    */
    drainContactEvents(f) {
        try {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.raweventqueue_drainContactEvents(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Applies the given javascript closure on each proximity event of this collector, then clear
    * the internal proximity event buffer.
    *
    * # Parameters
    * - `f(handle1, handle2, prev_prox, new_prox)`:  JavaScript closure applied to each proximity event. The
    * closure should take four arguments: two integers representing the handles of the colliders
    * involved in the proximity, and one boolean representing the intersection status.
    * @param {Function} f
    */
    drainIntersectionEvents(f) {
        try {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.raweventqueue_drainIntersectionEvents(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Removes all events contained by this collector.
    */
    clear() {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.raweventqueue_clear(this.ptr);
    }
}
/**
*/
class RawIntegrationParameters {

    static __wrap(ptr) {
        const obj = Object.create(RawIntegrationParameters.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawintegrationparameters_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_new();
        return RawIntegrationParameters.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get dt() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get erp() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_erp(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get jointErp() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_jointErp(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get warmstartCoeff() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_warmstartCoeff(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get allowedLinearError() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_allowedLinearError(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get predictionDistance() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_predictionDistance(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get allowedAngularError() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_allowedAngularError(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get maxLinearCorrection() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxLinearCorrection(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get maxAngularCorrection() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxAngularCorrection(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get maxVelocityIterations() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxVelocityIterations(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get maxPositionIterations() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxPositionIterations(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get minIslandSize() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_minIslandSize(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get maxCcdSubsteps() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxCcdSubsteps(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} value
    */
    set dt(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_dt(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set erp(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_erp(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set jointErp(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_jointErp(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set warmstartCoeff(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_warmstartCoeff(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set allowedLinearError(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_allowedLinearError(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set predictionDistance(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_predictionDistance(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set allowedAngularError(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_allowedAngularError(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxLinearCorrection(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxLinearCorrection(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxAngularCorrection(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxAngularCorrection(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxVelocityIterations(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxVelocityIterations(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxPositionIterations(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxPositionIterations(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set minIslandSize(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_minIslandSize(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxCcdSubsteps(value) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, value);
    }
}
/**
*/
class RawIslandManager {

    static __wrap(ptr) {
        const obj = Object.create(RawIslandManager.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawislandmanager_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawislandmanager_new();
        return RawIslandManager.__wrap(ret);
    }
    /**
    * Applies the given JavaScript function to the integer handle of each active rigid-body
    * managed by this island manager.
    *
    * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
    * the physics engine in order to save computational power. A sleeping rigid-body never moves
    * unless it is moved manually by the user.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each active rigid-body managed by this
    *   set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachActiveRigidBodyHandle(f) {
        try {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawJointParams {

    static __wrap(ptr) {
        const obj = Object.create(RawJointParams.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawjointparams_free(ptr);
    }
    /**
    * Create a new joint descriptor that builds Ball joints.
    *
    * A ball joints allows three relative rotational degrees of freedom
    * by preventing any relative translation between the anchors of the
    * two attached rigid-bodies.
    * @param {RawVector} anchor1
    * @param {RawVector} anchor2
    * @returns {RawJointParams}
    */
    static ball(anchor1, anchor2) {
        _assertClass(anchor1, RawVector);
        _assertClass(anchor2, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointparams_ball(anchor1.ptr, anchor2.ptr);
        return RawJointParams.__wrap(ret);
    }
    /**
    * Creates a new joint descriptor that builds a Prismatic joint.
    *
    * A prismatic joint removes all the degrees of freedom between the
    * affected bodies, except for the translation along one axis.
    *
    * Returns `None` if any of the provided axes cannot be normalized.
    * @param {RawVector} anchor1
    * @param {RawVector} axis1
    * @param {RawVector} tangent1
    * @param {RawVector} anchor2
    * @param {RawVector} axis2
    * @param {RawVector} tangent2
    * @param {boolean} limitsEnabled
    * @param {number} limitsMin
    * @param {number} limitsMax
    * @returns {RawJointParams | undefined}
    */
    static prismatic(anchor1, axis1, tangent1, anchor2, axis2, tangent2, limitsEnabled, limitsMin, limitsMax) {
        _assertClass(anchor1, RawVector);
        _assertClass(axis1, RawVector);
        _assertClass(tangent1, RawVector);
        _assertClass(anchor2, RawVector);
        _assertClass(axis2, RawVector);
        _assertClass(tangent2, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointparams_prismatic(anchor1.ptr, axis1.ptr, tangent1.ptr, anchor2.ptr, axis2.ptr, tangent2.ptr, limitsEnabled, limitsMin, limitsMax);
        return ret === 0 ? undefined : RawJointParams.__wrap(ret);
    }
    /**
    * Creates a new joint descriptor that builds a Fixed joint.
    *
    * A fixed joint removes all the degrees of freedom between the affected bodies.
    * @param {RawVector} anchor1
    * @param {RawRotation} axes1
    * @param {RawVector} anchor2
    * @param {RawRotation} axes2
    * @returns {RawJointParams}
    */
    static fixed(anchor1, axes1, anchor2, axes2) {
        _assertClass(anchor1, RawVector);
        _assertClass(axes1, RawRotation);
        _assertClass(anchor2, RawVector);
        _assertClass(axes2, RawRotation);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointparams_fixed(anchor1.ptr, axes1.ptr, anchor2.ptr, axes2.ptr);
        return RawJointParams.__wrap(ret);
    }
    /**
    * Create a new joint descriptor that builds Revolute joints.
    *
    * A revolute joint removes all degrees of freedom between the affected
    * bodies except for the rotation along one axis.
    * @param {RawVector} anchor1
    * @param {RawVector} axis1
    * @param {RawVector} anchor2
    * @param {RawVector} axis2
    * @returns {RawJointParams | undefined}
    */
    static revolute(anchor1, axis1, anchor2, axis2) {
        _assertClass(anchor1, RawVector);
        _assertClass(axis1, RawVector);
        _assertClass(anchor2, RawVector);
        _assertClass(axis2, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointparams_revolute(anchor1.ptr, axis1.ptr, anchor2.ptr, axis2.ptr);
        return ret === 0 ? undefined : RawJointParams.__wrap(ret);
    }
}
/**
*/
class RawJointSet {

    static __wrap(ptr) {
        const obj = Object.create(RawJointSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawjointset_free(ptr);
    }
    /**
    * The unique integer identifier of the first rigid-body this joint it attached to.
    * @param {number} handle
    * @returns {number}
    */
    jointBodyHandle1(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointBodyHandle1(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The unique integer identifier of the second rigid-body this joint is attached to.
    * @param {number} handle
    * @returns {number}
    */
    jointBodyHandle2(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointBodyHandle2(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The type of this joint given as a string.
    * @param {number} handle
    * @returns {number}
    */
    jointType(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The rotation quaternion that aligns this joint's first local axis to the `x` axis.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX1(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointFrameX1(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The rotation matrix that aligns this joint's second local axis to the `x` axis.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX2(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointFrameX2(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The position of the first anchor of this joint.
    *
    * The first anchor gives the position of the points application point on the
    * local frame of the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor1(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointAnchor1(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The position of the second anchor of this joint.
    *
    * The second anchor gives the position of the points application point on the
    * local frame of the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor2(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointAnchor2(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The first axis of this joint, if any.
    *
    * For joints where an application axis makes sense (e.g. the revolute and prismatic joins),
    * this returns the application axis on the first rigid-body this joint is attached to, expressed
    * in the local-space of this first rigid-body.
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    jointAxis1(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointAxis1(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * The second axis of this joint, if any.
    *
    * For joints where an application axis makes sense (e.g. the revolute and prismatic joins),
    * this returns the application axis on the second rigid-body this joint is attached to, expressed
    * in the local-space of this second rigid-body.
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    jointAxis2(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointAxis2(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * Are the limits for this joint enabled?
    * @param {number} handle
    * @returns {boolean}
    */
    jointLimitsEnabled(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointLimitsEnabled(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * If this is a prismatic joint, returns its lower limit.
    * @param {number} handle
    * @returns {number}
    */
    jointLimitsMin(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointLimitsMin(this.ptr, handle);
        return ret;
    }
    /**
    * If this is a prismatic joint, returns its upper limit.
    * @param {number} handle
    * @returns {number}
    */
    jointLimitsMax(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointLimitsMax(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} model
    */
    jointConfigureMotorModel(handle, model) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointConfigureMotorModel(this.ptr, handle, model);
    }
    /**
    * @param {number} handle
    * @param {number} vx
    * @param {number} vy
    * @param {number} vz
    * @param {number} factor
    */
    jointConfigureBallMotorVelocity(handle, vx, vy, vz, factor) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointConfigureBallMotorVelocity(this.ptr, handle, vx, vy, vz, factor);
    }
    /**
    * @param {number} handle
    * @param {number} qw
    * @param {number} qx
    * @param {number} qy
    * @param {number} qz
    * @param {number} stiffness
    * @param {number} damping
    */
    jointConfigureBallMotorPosition(handle, qw, qx, qy, qz, stiffness, damping) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointConfigureBallMotorPosition(this.ptr, handle, qw, qx, qy, qz, stiffness, damping);
    }
    /**
    * @param {number} handle
    * @param {number} qw
    * @param {number} qx
    * @param {number} qy
    * @param {number} qz
    * @param {number} vx
    * @param {number} vy
    * @param {number} vz
    * @param {number} stiffness
    * @param {number} damping
    */
    jointConfigureBallMotor(handle, qw, qx, qy, qz, vx, vy, vz, stiffness, damping) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointConfigureBallMotor(this.ptr, handle, qw, qx, qy, qz, vx, vy, vz, stiffness, damping);
    }
    /**
    * @param {number} handle
    * @param {number} targetVel
    * @param {number} factor
    */
    jointConfigureUnitMotorVelocity(handle, targetVel, factor) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointConfigureUnitMotorVelocity(this.ptr, handle, targetVel, factor);
    }
    /**
    * @param {number} handle
    * @param {number} targetPos
    * @param {number} stiffness
    * @param {number} damping
    */
    jointConfigureUnitMotorPosition(handle, targetPos, stiffness, damping) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointConfigureUnitMotorPosition(this.ptr, handle, targetPos, stiffness, damping);
    }
    /**
    * @param {number} handle
    * @param {number} targetPos
    * @param {number} targetVel
    * @param {number} stiffness
    * @param {number} damping
    */
    jointConfigureUnitMotor(handle, targetPos, targetVel, stiffness, damping) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_jointConfigureUnitMotor(this.ptr, handle, targetPos, targetVel, stiffness, damping);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_new();
        return RawJointSet.__wrap(ret);
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawJointParams} params
    * @param {number} parent1
    * @param {number} parent2
    * @returns {number}
    */
    createJoint(bodies, params, parent1, parent2) {
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(params, RawJointParams);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_createJoint(this.ptr, bodies.ptr, params.ptr, parent1, parent2);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {RawIslandManager} islands
    * @param {RawRigidBodySet} bodies
    * @param {boolean} wakeUp
    */
    remove(handle, islands, bodies, wakeUp) {
        _assertClass(islands, RawIslandManager);
        _assertClass(bodies, RawRigidBodySet);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_remove(this.ptr, handle, islands.ptr, bodies.ptr, wakeUp);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachJointHandle(f) {
        try {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawjointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawNarrowPhase {

    static __wrap(ptr) {
        const obj = Object.create(RawNarrowPhase.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawnarrowphase_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_new();
        return RawNarrowPhase.__wrap(ret);
    }
    /**
    * @param {number} handle1
    * @param {Function} f
    */
    contacts_with(handle1, f) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_contacts_with(this.ptr, handle1, addHeapObject(f));
    }
    /**
    * @param {number} handle1
    * @param {number} handle2
    * @returns {RawContactPair | undefined}
    */
    contact_pair(handle1, handle2) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_contact_pair(this.ptr, handle1, handle2);
        return ret === 0 ? undefined : RawContactPair.__wrap(ret);
    }
    /**
    * @param {number} handle1
    * @param {Function} f
    */
    intersections_with(handle1, f) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_intersections_with(this.ptr, handle1, addHeapObject(f));
    }
    /**
    * @param {number} handle1
    * @param {number} handle2
    * @returns {boolean}
    */
    intersection_pair(handle1, handle2) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_intersection_pair(this.ptr, handle1, handle2);
        return ret !== 0;
    }
}
/**
*/
class RawPhysicsPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawPhysicsPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawphysicspipeline_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawphysicspipeline_new();
        return RawPhysicsPipeline.__wrap(ret);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawJointSet} joints
    * @param {RawCCDSolver} ccd_solver
    */
    step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, ccd_solver) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawJointSet);
        _assertClass(ccd_solver, RawCCDSolver);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawphysicspipeline_step(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, ccd_solver.ptr);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawJointSet} joints
    * @param {RawCCDSolver} ccd_solver
    * @param {RawEventQueue} eventQueue
    * @param {object} hookObject
    * @param {Function} hookFilterContactPair
    * @param {Function} hookFilterIntersectionPair
    */
    stepWithEvents(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, ccd_solver, eventQueue, hookObject, hookFilterContactPair, hookFilterIntersectionPair) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawJointSet);
        _assertClass(ccd_solver, RawCCDSolver);
        _assertClass(eventQueue, RawEventQueue);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawphysicspipeline_stepWithEvents(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, ccd_solver.ptr, eventQueue.ptr, addHeapObject(hookObject), addHeapObject(hookFilterContactPair), addHeapObject(hookFilterIntersectionPair));
    }
}
/**
*/
class RawPointColliderProjection {

    static __wrap(ptr) {
        const obj = Object.create(RawPointColliderProjection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawpointcolliderprojection_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {RawVector}
    */
    point() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_point(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    isInside() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_isInside(this.ptr);
        return ret !== 0;
    }
}
/**
*/
class RawQueryPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawQueryPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawquerypipeline_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_new();
        return RawQueryPipeline.__wrap(ret);
    }
    /**
    * @param {RawIslandManager} islands
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    */
    update(islands, bodies, colliders) {
        _assertClass(islands, RawIslandManager);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_update(this.ptr, islands.ptr, bodies.ptr, colliders.ptr);
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {number} groups
    * @returns {RawRayColliderToi | undefined}
    */
    castRay(colliders, rayOrig, rayDir, maxToi, solid, groups) {
        _assertClass(colliders, RawColliderSet);
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_castRay(this.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, groups);
        return ret === 0 ? undefined : RawRayColliderToi.__wrap(ret);
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {number} groups
    * @returns {RawRayColliderIntersection | undefined}
    */
    castRayAndGetNormal(colliders, rayOrig, rayDir, maxToi, solid, groups) {
        _assertClass(colliders, RawColliderSet);
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_castRayAndGetNormal(this.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, groups);
        return ret === 0 ? undefined : RawRayColliderIntersection.__wrap(ret);
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {number} groups
    * @param {Function} callback
    */
    intersectionsWithRay(colliders, rayOrig, rayDir, maxToi, solid, groups, callback) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(rayOrig, RawVector);
            _assertClass(rayDir, RawVector);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_intersectionsWithRay(this.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, groups, addBorrowedObject(callback));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawShape} shape
    * @param {number} groups
    * @returns {number | undefined}
    */
    intersectionWithShape(colliders, shapePos, shapeRot, shape, groups) {
        try {
            const retptr = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(colliders, RawColliderSet);
            _assertClass(shapePos, RawVector);
            _assertClass(shapeRot, RawRotation);
            _assertClass(shape, RawShape);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_intersectionWithShape(retptr, this.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, groups);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} point
    * @param {boolean} solid
    * @param {number} groups
    * @returns {RawPointColliderProjection | undefined}
    */
    projectPoint(colliders, point, solid, groups) {
        _assertClass(colliders, RawColliderSet);
        _assertClass(point, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_projectPoint(this.ptr, colliders.ptr, point.ptr, solid, groups);
        return ret === 0 ? undefined : RawPointColliderProjection.__wrap(ret);
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} point
    * @param {number} groups
    * @param {Function} callback
    */
    intersectionsWithPoint(colliders, point, groups, callback) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(point, RawVector);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_intersectionsWithPoint(this.ptr, colliders.ptr, point.ptr, groups, addBorrowedObject(callback));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} shapeVel
    * @param {RawShape} shape
    * @param {number} maxToi
    * @param {number} groups
    * @returns {RawShapeColliderTOI | undefined}
    */
    castShape(colliders, shapePos, shapeRot, shapeVel, shape, maxToi, groups) {
        _assertClass(colliders, RawColliderSet);
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(shapeVel, RawVector);
        _assertClass(shape, RawShape);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_castShape(this.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shapeVel.ptr, shape.ptr, maxToi, groups);
        return ret === 0 ? undefined : RawShapeColliderTOI.__wrap(ret);
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawShape} shape
    * @param {number} groups
    * @param {Function} callback
    */
    intersectionsWithShape(colliders, shapePos, shapeRot, shape, groups, callback) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(shapePos, RawVector);
            _assertClass(shapeRot, RawRotation);
            _assertClass(shape, RawShape);
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_intersectionsWithShape(this.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, groups, addBorrowedObject(callback));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawVector} aabbCenter
    * @param {RawVector} aabbHalfExtents
    * @param {Function} callback
    */
    collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
        try {
            _assertClass(aabbCenter, RawVector);
            var ptr0 = aabbCenter.ptr;
            aabbCenter.ptr = 0;
            _assertClass(aabbHalfExtents, RawVector);
            var ptr1 = aabbHalfExtents.ptr;
            aabbHalfExtents.ptr = 0;
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr, ptr0, ptr1, addBorrowedObject(callback));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawRayColliderIntersection {

    static __wrap(ptr) {
        const obj = Object.create(RawRayColliderIntersection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawraycolliderintersection_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {RawVector}
    */
    normal() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    toi() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_toi(this.ptr);
        return ret;
    }
}
/**
*/
class RawRayColliderToi {

    static __wrap(ptr) {
        const obj = Object.create(RawRayColliderToi.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawraycollidertoi_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    toi() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_toi(this.ptr);
        return ret;
    }
}
/**
*/
class RawRigidBodySet {

    static __wrap(ptr) {
        const obj = Object.create(RawRigidBodySet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawrigidbodyset_free(ptr);
    }
    /**
    * The world-space translation of this rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbTranslation(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space orientation of this rigid-body.
    * @param {number} handle
    * @returns {RawRotation}
    */
    rbRotation(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Put the given rigid-body to sleep.
    * @param {number} handle
    */
    rbSleep(handle) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSleep(this.ptr, handle);
    }
    /**
    * Is this rigid-body sleeping?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsSleeping(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsSleeping(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is the velocity of this rigid-body not zero?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsMoving(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsMoving(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The world-space predicted translation of this rigid-body.
    *
    * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
    * method and is used for estimating the kinematic body velocity at the next timestep.
    * For non-kinematic bodies, this value is currently unspecified.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbNextTranslation(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbNextTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space predicted orientation of this rigid-body.
    *
    * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
    * method and is used for estimating the kinematic body velocity at the next timestep.
    * For non-kinematic bodies, this value is currently unspecified.
    * @param {number} handle
    * @returns {RawRotation}
    */
    rbNextRotation(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbNextRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Sets the translation of this rigid-body.
    *
    * # Parameters
    * - `x`: the world-space position of the rigid-body along the `x` axis.
    * - `y`: the world-space position of the rigid-body along the `y` axis.
    * - `z`: the world-space position of the rigid-body along the `z` axis.
    * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {boolean} wakeUp
    */
    rbSetTranslation(handle, x, y, z, wakeUp) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetTranslation(this.ptr, handle, x, y, z, wakeUp);
    }
    /**
    * Sets the rotation quaternion of this rigid-body.
    *
    * This does nothing if a zero quaternion is provided.
    *
    * # Parameters
    * - `x`: the first vector component of the quaternion.
    * - `y`: the second vector component of the quaternion.
    * - `z`: the third vector component of the quaternion.
    * - `w`: the scalar component of the quaternion.
    * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    * @param {boolean} wakeUp
    */
    rbSetRotation(handle, x, y, z, w, wakeUp) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetRotation(this.ptr, handle, x, y, z, w, wakeUp);
    }
    /**
    * Sets the linear velocity of this rigid-body.
    * @param {number} handle
    * @param {RawVector} linvel
    * @param {boolean} wakeUp
    */
    rbSetLinvel(handle, linvel, wakeUp) {
        _assertClass(linvel, RawVector);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetLinvel(this.ptr, handle, linvel.ptr, wakeUp);
    }
    /**
    * Sets the angular velocity of this rigid-body.
    * @param {number} handle
    * @param {RawVector} angvel
    * @param {boolean} wakeUp
    */
    rbSetAngvel(handle, angvel, wakeUp) {
        _assertClass(angvel, RawVector);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetAngvel(this.ptr, handle, angvel.ptr, wakeUp);
    }
    /**
    * If this rigid body is kinematic, sets its future translation after the next timestep integration.
    *
    * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
    * interacting with this kinematic body behave as expected. Internally, Rapier will compute
    * an artificial velocity for this rigid-body from its current position and its next kinematic
    * position. This velocity will be used to compute forces on dynamic bodies interacting with
    * this body.
    *
    * # Parameters
    * - `x`: the world-space position of the rigid-body along the `x` axis.
    * - `y`: the world-space position of the rigid-body along the `y` axis.
    * - `z`: the world-space position of the rigid-body along the `z` axis.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    rbSetNextKinematicTranslation(handle, x, y, z) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, handle, x, y, z);
    }
    /**
    * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
    *
    * This should be used instead of `rigidBody.setRotation` to make the dynamic object
    * interacting with this kinematic body behave as expected. Internally, Rapier will compute
    * an artificial velocity for this rigid-body from its current position and its next kinematic
    * position. This velocity will be used to compute forces on dynamic bodies interacting with
    * this body.
    *
    * # Parameters
    * - `x`: the first vector component of the quaternion.
    * - `y`: the second vector component of the quaternion.
    * - `z`: the third vector component of the quaternion.
    * - `w`: the scalar component of the quaternion.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    */
    rbSetNextKinematicRotation(handle, x, y, z, w) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, handle, x, y, z, w);
    }
    /**
    * The linear velocity of this rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbLinvel(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbLinvel(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The angular velocity of this rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbAngvel(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbAngvel(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {boolean} locked
    * @param {boolean} wake_up
    */
    rbLockTranslations(handle, locked, wake_up) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbLockRotations(this.ptr, handle, locked, wake_up);
    }
    /**
    * @param {number} handle
    * @param {boolean} locked
    * @param {boolean} wake_up
    */
    rbLockRotations(handle, locked, wake_up) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbLockRotations(this.ptr, handle, locked, wake_up);
    }
    /**
    * @param {number} handle
    * @param {boolean} allow_x
    * @param {boolean} allow_y
    * @param {boolean} allow_z
    * @param {boolean} wake_up
    */
    rbRestrictRotations(handle, allow_x, allow_y, allow_z, wake_up) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbRestrictRotations(this.ptr, handle, allow_x, allow_y, allow_z, wake_up);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    rbDominanceGroup(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbDominanceGroup(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} group
    */
    rbSetDominanceGroup(handle, group) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetDominanceGroup(this.ptr, handle, group);
    }
    /**
    * @param {number} handle
    * @param {boolean} enabled
    */
    rbEnableCcd(handle, enabled) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbEnableCcd(this.ptr, handle, enabled);
    }
    /**
    * The mass of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbMass(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbMass(this.ptr, handle);
        return ret;
    }
    /**
    * Wakes this rigid-body up.
    *
    * A dynamic rigid-body that does not move during several consecutive frames will
    * be put to sleep by the physics engine, i.e., it will stop being simulated in order
    * to avoid useless computations.
    * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
    * the position of a dynamic body so that it is properly simulated afterwards.
    * @param {number} handle
    */
    rbWakeUp(handle) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbWakeUp(this.ptr, handle);
    }
    /**
    * Is Continuous Collision Detection enabled for this rigid-body?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsCcdEnabled(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsCcdEnabled(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The number of colliders attached to this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbNumColliders(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbNumColliders(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * Retrieves the `i-th` collider attached to this rigid-body.
    *
    * # Parameters
    * - `at`: The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
    *         This index is **not** the same as the unique identifier of the collider.
    * @param {number} handle
    * @param {number} at
    * @returns {number}
    */
    rbCollider(handle, at) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbCollider(this.ptr, handle, at);
        return ret >>> 0;
    }
    /**
    * The status of this rigid-body: static, dynamic, or kinematic.
    * @param {number} handle
    * @returns {number}
    */
    rbBodyType(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbBodyType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * Is this rigid-body static?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsStatic(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsStatic(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is this rigid-body kinematic?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsKinematic(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsKinematic(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is this rigid-body dynamic?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsDynamic(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsDynamic(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The linear damping coefficient of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbLinearDamping(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbLinearDamping(this.ptr, handle);
        return ret;
    }
    /**
    * The angular damping coefficient of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbAngularDamping(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbAngularDamping(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} factor
    */
    rbSetLinearDamping(handle, factor) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetLinearDamping(this.ptr, handle, factor);
    }
    /**
    * @param {number} handle
    * @param {number} factor
    */
    rbSetAngularDamping(handle, factor) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetAngularDamping(this.ptr, handle, factor);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    rbGravityScale(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbGravityScale(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} factor
    * @param {boolean} wakeUp
    */
    rbSetGravityScale(handle, factor, wakeUp) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetGravityScale(this.ptr, handle, factor, wakeUp);
    }
    /**
    * Applies a force at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `force`: the world-space force to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} force
    * @param {boolean} wakeUp
    */
    rbApplyForce(handle, force, wakeUp) {
        _assertClass(force, RawVector);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyForce(this.ptr, handle, force.ptr, wakeUp);
    }
    /**
    * Applies an impulse at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `impulse`: the world-space impulse to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} impulse
    * @param {boolean} wakeUp
    */
    rbApplyImpulse(handle, impulse, wakeUp) {
        _assertClass(impulse, RawVector);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyImpulse(this.ptr, handle, impulse.ptr, wakeUp);
    }
    /**
    * Applies a torque at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `torque`: the world-space torque to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} torque
    * @param {boolean} wakeUp
    */
    rbApplyTorque(handle, torque, wakeUp) {
        _assertClass(torque, RawVector);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyTorque(this.ptr, handle, torque.ptr, wakeUp);
    }
    /**
    * Applies an impulsive torque at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `torque impulse`: the world-space torque impulse to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} torque_impulse
    * @param {boolean} wakeUp
    */
    rbApplyTorqueImpulse(handle, torque_impulse, wakeUp) {
        _assertClass(torque_impulse, RawVector);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, handle, torque_impulse.ptr, wakeUp);
    }
    /**
    * Applies a force at the given world-space point of this rigid-body.
    *
    * # Parameters
    * - `force`: the world-space force to apply on the rigid-body.
    * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} force
    * @param {RawVector} point
    * @param {boolean} wakeUp
    */
    rbApplyForceAtPoint(handle, force, point, wakeUp) {
        _assertClass(force, RawVector);
        _assertClass(point, RawVector);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyForceAtPoint(this.ptr, handle, force.ptr, point.ptr, wakeUp);
    }
    /**
    * Applies an impulse at the given world-space point of this rigid-body.
    *
    * # Parameters
    * - `impulse`: the world-space impulse to apply on the rigid-body.
    * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} impulse
    * @param {RawVector} point
    * @param {boolean} wakeUp
    */
    rbApplyImpulseAtPoint(handle, impulse, point, wakeUp) {
        _assertClass(impulse, RawVector);
        _assertClass(point, RawVector);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, handle, impulse.ptr, point.ptr, wakeUp);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_new();
        return RawRigidBodySet.__wrap(ret);
    }
    /**
    * @param {RawVector} translation
    * @param {RawRotation} rotation
    * @param {number} gravityScale
    * @param {number} mass
    * @param {boolean} translationsEnabled
    * @param {RawVector} centerOfMass
    * @param {RawVector} linvel
    * @param {RawVector} angvel
    * @param {RawVector} principalAngularInertia
    * @param {RawRotation} angularInertiaFrame
    * @param {boolean} rotationEnabledX
    * @param {boolean} rotationEnabledY
    * @param {boolean} rotationEnabledZ
    * @param {number} linearDamping
    * @param {number} angularDamping
    * @param {number} rb_type
    * @param {boolean} canSleep
    * @param {boolean} ccdEnabled
    * @param {number} dominanceGroup
    * @returns {number}
    */
    createRigidBody(translation, rotation, gravityScale, mass, translationsEnabled, centerOfMass, linvel, angvel, principalAngularInertia, angularInertiaFrame, rotationEnabledX, rotationEnabledY, rotationEnabledZ, linearDamping, angularDamping, rb_type, canSleep, ccdEnabled, dominanceGroup) {
        _assertClass(translation, RawVector);
        _assertClass(rotation, RawRotation);
        _assertClass(centerOfMass, RawVector);
        _assertClass(linvel, RawVector);
        _assertClass(angvel, RawVector);
        _assertClass(principalAngularInertia, RawVector);
        _assertClass(angularInertiaFrame, RawRotation);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_createRigidBody(this.ptr, translation.ptr, rotation.ptr, gravityScale, mass, translationsEnabled, centerOfMass.ptr, linvel.ptr, angvel.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, rotationEnabledX, rotationEnabledY, rotationEnabledZ, linearDamping, angularDamping, rb_type, canSleep, ccdEnabled, dominanceGroup);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {RawIslandManager} islands
    * @param {RawColliderSet} colliders
    * @param {RawJointSet} joints
    */
    remove(handle, islands, colliders, joints) {
        _assertClass(islands, RawIslandManager);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawJointSet);
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_remove(this.ptr, handle, islands.ptr, colliders.ptr, joints.ptr);
    }
    /**
    * The number of rigid-bodies on this set.
    * @returns {number}
    */
    len() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * Checks if a rigid-body with the given integer handle exists.
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each rigid-body managed by this set.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each rigid-body managed by this set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachRigidBodyHandle(f) {
        try {
            _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
* A rotation quaternion.
*/
class RawRotation {

    static __wrap(ptr) {
        const obj = Object.create(RawRotation.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawrotation_free(ptr);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    */
    constructor(x, y, z, w) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_new(x, y, z, w);
        return RawRotation.__wrap(ret);
    }
    /**
    * The identity quaternion.
    * @returns {RawRotation}
    */
    static identity() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_identity();
        return RawRotation.__wrap(ret);
    }
    /**
    * The `x` component of this quaternion.
    * @returns {number}
    */
    get x() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * The `y` component of this quaternion.
    * @returns {number}
    */
    get y() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_y(this.ptr);
        return ret;
    }
    /**
    * The `z` component of this quaternion.
    * @returns {number}
    */
    get z() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_erp(this.ptr);
        return ret;
    }
    /**
    * The `w` component of this quaternion.
    * @returns {number}
    */
    get w() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_jointErp(this.ptr);
        return ret;
    }
}
/**
*/
class RawSerializationPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawSerializationPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawserializationpipeline_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawserializationpipeline_new();
        return RawSerializationPipeline.__wrap(ret);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawJointSet} joints
    * @returns {Uint8Array | undefined}
    */
    serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawJointSet);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawserializationpipeline_serializeAll(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {RawDeserializedWorld | undefined}
    */
    deserializeAll(data) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawserializationpipeline_deserializeAll(this.ptr, addHeapObject(data));
        return ret === 0 ? undefined : RawDeserializedWorld.__wrap(ret);
    }
}
/**
*/
class RawShape {

    static __wrap(ptr) {
        const obj = Object.create(RawShape.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawshape_free(ptr);
    }
    /**
    * @param {number} hx
    * @param {number} hy
    * @param {number} hz
    * @returns {RawShape}
    */
    static cuboid(hx, hy, hz) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_cuboid(hx, hy, hz);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} hx
    * @param {number} hy
    * @param {number} hz
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundCuboid(hx, hy, hz, borderRadius) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundCuboid(hx, hy, hz, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} radius
    * @returns {RawShape}
    */
    static ball(radius) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_ball(radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @returns {RawShape}
    */
    static capsule(halfHeight, radius) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_capsule(halfHeight, radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @returns {RawShape}
    */
    static cylinder(halfHeight, radius) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_cylinder(halfHeight, radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundCylinder(halfHeight, radius, borderRadius) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundCylinder(halfHeight, radius, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @returns {RawShape}
    */
    static cone(halfHeight, radius) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_cone(halfHeight, radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundCone(halfHeight, radius, borderRadius) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundCone(halfHeight, radius, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @returns {RawShape}
    */
    static polyline(vertices, indices) {
        var ptr0 = passArrayF32ToWasm0(vertices, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray32ToWasm0(indices, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_polyline(ptr0, len0, ptr1, len1);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @returns {RawShape}
    */
    static trimesh(vertices, indices) {
        var ptr0 = passArrayF32ToWasm0(vertices, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray32ToWasm0(indices, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_trimesh(ptr0, len0, ptr1, len1);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} nrows
    * @param {number} ncols
    * @param {Float32Array} heights
    * @param {RawVector} scale
    * @returns {RawShape}
    */
    static heightfield(nrows, ncols, heights, scale) {
        var ptr0 = passArrayF32ToWasm0(heights, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(scale, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_heightfield(nrows, ncols, ptr0, len0, scale.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @returns {RawShape}
    */
    static segment(p1, p2) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_segment(p1.ptr, p2.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @param {RawVector} p3
    * @returns {RawShape}
    */
    static triangle(p1, p2, p3) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        _assertClass(p3, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_triangle(p1.ptr, p2.ptr, p3.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @param {RawVector} p3
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundTriangle(p1, p2, p3, borderRadius) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        _assertClass(p3, RawVector);
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundTriangle(p1.ptr, p2.ptr, p3.ptr, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} points
    * @returns {RawShape | undefined}
    */
    static convexHull(points) {
        var ptr0 = passArrayF32ToWasm0(points, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_convexHull(ptr0, len0);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} points
    * @param {number} borderRadius
    * @returns {RawShape | undefined}
    */
    static roundConvexHull(points, borderRadius) {
        var ptr0 = passArrayF32ToWasm0(points, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundConvexHull(ptr0, len0, borderRadius);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @returns {RawShape | undefined}
    */
    static convexMesh(vertices, indices) {
        var ptr0 = passArrayF32ToWasm0(vertices, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray32ToWasm0(indices, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_convexMesh(ptr0, len0, ptr1, len1);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @param {number} borderRadius
    * @returns {RawShape | undefined}
    */
    static roundConvexMesh(vertices, indices, borderRadius) {
        var ptr0 = passArrayF32ToWasm0(vertices, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray32ToWasm0(indices, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundConvexMesh(ptr0, len0, ptr1, len1, borderRadius);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
}
/**
*/
class RawShapeColliderTOI {

    static __wrap(ptr) {
        const obj = Object.create(RawShapeColliderTOI.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawshapecollidertoi_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    toi() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_toi(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    witness1() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    witness2() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal1() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapecollidertoi_normal1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal2() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapecollidertoi_normal1(this.ptr);
        return RawVector.__wrap(ret);
    }
}
/**
* A vector.
*/
class RawVector {

    static __wrap(ptr) {
        const obj = Object.create(RawVector.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawvector_free(ptr);
    }
    /**
    * Creates a new vector filled with zeros.
    * @returns {RawVector}
    */
    static zero() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_zero();
        return RawVector.__wrap(ret);
    }
    /**
    * Creates a new 3D vector from its two components.
    *
    * # Parameters
    * - `x`: the `x` component of this 3D vector.
    * - `y`: the `y` component of this 3D vector.
    * - `z`: the `z` component of this 3D vector.
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    constructor(x, y, z) {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_new(x, y, z);
        return RawVector.__wrap(ret);
    }
    /**
    * The `x` component of this vector.
    * @returns {number}
    */
    get x() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * Sets the `x` component of this vector.
    * @param {number} x
    */
    set x(x) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_dt(this.ptr, x);
    }
    /**
    * The `y` component of this vector.
    * @returns {number}
    */
    get y() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_y(this.ptr);
        return ret;
    }
    /**
    * Sets the `y` component of this vector.
    * @param {number} y
    */
    set y(y) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_set_y(this.ptr, y);
    }
    /**
    * The `z` component of this vector.
    * @returns {number}
    */
    get z() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_erp(this.ptr);
        return ret;
    }
    /**
    * Sets the `z` component of this vector.
    * @param {number} z
    */
    set z(z) {
        _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_erp(this.ptr, z);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{x, y, z}`.
    *
    * This will effectively return a copy of `this`. This method exist for completeness with the
    * other swizzling functions.
    * @returns {RawVector}
    */
    xyz() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_xyz(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{y, x, z}`.
    * @returns {RawVector}
    */
    yxz() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_yxz(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{z, x, y}`.
    * @returns {RawVector}
    */
    zxy() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_zxy(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{x, z, y}`.
    * @returns {RawVector}
    */
    xzy() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_xzy(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{y, z, x}`.
    * @returns {RawVector}
    */
    yzx() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_yzx(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{z, y, x}`.
    * @returns {RawVector}
    */
    zyx() {
        var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_zyx(this.ptr);
        return RawVector.__wrap(ret);
    }
}

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_number_new(arg0) {
    var ret = arg0;
    return addHeapObject(ret);
};

function __wbg_rawraycolliderintersection_new(arg0) {
    var ret = RawRayColliderIntersection.__wrap(arg0);
    return addHeapObject(ret);
};

function __wbindgen_string_new(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

function __wbg_now_885ca88fafee0fd1(arg0) {
    var ret = getObject(arg0).now();
    return ret;
};

function __wbg_newnoargs_1a11e7e8c906996c(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_get_6d26c712aa73c8b2() { return handleError(function (arg0, arg1) {
    var ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_e91f71ddf1f45cff() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_object_clone_ref(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

function __wbg_call_e3c72355d091d5d4() { return handleError(function (arg0, arg1, arg2) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_c143b19d87139944() { return handleError(function (arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_72facd37dbc97ddb() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3), getObject(arg4));
    return addHeapObject(ret);
}, arguments) };

function __wbg_bind_07839579f523aa89(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).bind(getObject(arg1), getObject(arg2), getObject(arg3));
    return addHeapObject(ret);
};

function __wbg_buffer_79a3294266d4e783(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

function __wbg_self_b4546ea7b590539e() { return handleError(function () {
    var ret = self.self;
    return addHeapObject(ret);
}, arguments) };

function __wbg_window_c279fea81f426a68() { return handleError(function () {
    var ret = window.window;
    return addHeapObject(ret);
}, arguments) };

function __wbg_globalThis_038a6ea0ff17789f() { return handleError(function () {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

function __wbg_global_4f93ce884bcee597() { return handleError(function () {
    var ret = __webpack_require__.g.global;
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_is_undefined(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

function __wbg_newwithbyteoffsetandlength_22a36e6023ad3cd0(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_new_945397fb09fec0b8(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_set_223873223acf6d07(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

function __wbg_length_68e13e7bbd918464(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

function __wbindgen_number_get(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'number' ? obj : undefined;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

function __wbindgen_boolean_get(arg0) {
    const v = getObject(arg0);
    var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    return ret;
};

function __wbindgen_debug_string(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

function __wbindgen_memory() {
    var ret = _rapier_wasm3d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory;
    return addHeapObject(ret);
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.wasm":
/*!***************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.wasm ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "90dbd5e862e295625ea4", {
		"./rapier_wasm3d_bg.js": {
			"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
			"__wbindgen_number_new": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_new,
			"__wbg_rawraycolliderintersection_new": WEBPACK_IMPORTED_MODULE_0.__wbg_rawraycolliderintersection_new,
			"__wbindgen_string_new": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,
			"__wbg_now_885ca88fafee0fd1": WEBPACK_IMPORTED_MODULE_0.__wbg_now_885ca88fafee0fd1,
			"__wbg_newnoargs_1a11e7e8c906996c": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_1a11e7e8c906996c,
			"__wbg_get_6d26c712aa73c8b2": WEBPACK_IMPORTED_MODULE_0.__wbg_get_6d26c712aa73c8b2,
			"__wbg_call_e91f71ddf1f45cff": WEBPACK_IMPORTED_MODULE_0.__wbg_call_e91f71ddf1f45cff,
			"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
			"__wbg_call_e3c72355d091d5d4": WEBPACK_IMPORTED_MODULE_0.__wbg_call_e3c72355d091d5d4,
			"__wbg_call_c143b19d87139944": WEBPACK_IMPORTED_MODULE_0.__wbg_call_c143b19d87139944,
			"__wbg_call_72facd37dbc97ddb": WEBPACK_IMPORTED_MODULE_0.__wbg_call_72facd37dbc97ddb,
			"__wbg_bind_07839579f523aa89": WEBPACK_IMPORTED_MODULE_0.__wbg_bind_07839579f523aa89,
			"__wbg_buffer_79a3294266d4e783": WEBPACK_IMPORTED_MODULE_0.__wbg_buffer_79a3294266d4e783,
			"__wbg_self_b4546ea7b590539e": WEBPACK_IMPORTED_MODULE_0.__wbg_self_b4546ea7b590539e,
			"__wbg_window_c279fea81f426a68": WEBPACK_IMPORTED_MODULE_0.__wbg_window_c279fea81f426a68,
			"__wbg_globalThis_038a6ea0ff17789f": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_038a6ea0ff17789f,
			"__wbg_global_4f93ce884bcee597": WEBPACK_IMPORTED_MODULE_0.__wbg_global_4f93ce884bcee597,
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbg_newwithbyteoffsetandlength_22a36e6023ad3cd0": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithbyteoffsetandlength_22a36e6023ad3cd0,
			"__wbg_new_945397fb09fec0b8": WEBPACK_IMPORTED_MODULE_0.__wbg_new_945397fb09fec0b8,
			"__wbg_set_223873223acf6d07": WEBPACK_IMPORTED_MODULE_0.__wbg_set_223873223acf6d07,
			"__wbg_length_68e13e7bbd918464": WEBPACK_IMPORTED_MODULE_0.__wbg_length_68e13e7bbd918464,
			"__wbindgen_number_get": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_get,
			"__wbindgen_boolean_get": WEBPACK_IMPORTED_MODULE_0.__wbindgen_boolean_get,
			"__wbindgen_debug_string": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,
			"__wbindgen_memory": WEBPACK_IMPORTED_MODULE_0.__wbindgen_memory
		}
	});
}
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
	try {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./rapier_wasm3d_bg.js */ "./node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "90dbd5e862e295625ea4", {
		"./rapier_wasm3d_bg.js": {
			"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
			"__wbindgen_number_new": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_new,
			"__wbg_rawraycolliderintersection_new": WEBPACK_IMPORTED_MODULE_0.__wbg_rawraycolliderintersection_new,
			"__wbindgen_string_new": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,
			"__wbg_now_885ca88fafee0fd1": WEBPACK_IMPORTED_MODULE_0.__wbg_now_885ca88fafee0fd1,
			"__wbg_newnoargs_1a11e7e8c906996c": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_1a11e7e8c906996c,
			"__wbg_get_6d26c712aa73c8b2": WEBPACK_IMPORTED_MODULE_0.__wbg_get_6d26c712aa73c8b2,
			"__wbg_call_e91f71ddf1f45cff": WEBPACK_IMPORTED_MODULE_0.__wbg_call_e91f71ddf1f45cff,
			"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
			"__wbg_call_e3c72355d091d5d4": WEBPACK_IMPORTED_MODULE_0.__wbg_call_e3c72355d091d5d4,
			"__wbg_call_c143b19d87139944": WEBPACK_IMPORTED_MODULE_0.__wbg_call_c143b19d87139944,
			"__wbg_call_72facd37dbc97ddb": WEBPACK_IMPORTED_MODULE_0.__wbg_call_72facd37dbc97ddb,
			"__wbg_bind_07839579f523aa89": WEBPACK_IMPORTED_MODULE_0.__wbg_bind_07839579f523aa89,
			"__wbg_buffer_79a3294266d4e783": WEBPACK_IMPORTED_MODULE_0.__wbg_buffer_79a3294266d4e783,
			"__wbg_self_b4546ea7b590539e": WEBPACK_IMPORTED_MODULE_0.__wbg_self_b4546ea7b590539e,
			"__wbg_window_c279fea81f426a68": WEBPACK_IMPORTED_MODULE_0.__wbg_window_c279fea81f426a68,
			"__wbg_globalThis_038a6ea0ff17789f": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_038a6ea0ff17789f,
			"__wbg_global_4f93ce884bcee597": WEBPACK_IMPORTED_MODULE_0.__wbg_global_4f93ce884bcee597,
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbg_newwithbyteoffsetandlength_22a36e6023ad3cd0": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithbyteoffsetandlength_22a36e6023ad3cd0,
			"__wbg_new_945397fb09fec0b8": WEBPACK_IMPORTED_MODULE_0.__wbg_new_945397fb09fec0b8,
			"__wbg_set_223873223acf6d07": WEBPACK_IMPORTED_MODULE_0.__wbg_set_223873223acf6d07,
			"__wbg_length_68e13e7bbd918464": WEBPACK_IMPORTED_MODULE_0.__wbg_length_68e13e7bbd918464,
			"__wbindgen_number_get": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_get,
			"__wbindgen_boolean_get": WEBPACK_IMPORTED_MODULE_0.__wbindgen_boolean_get,
			"__wbindgen_debug_string": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,
			"__wbindgen_memory": WEBPACK_IMPORTED_MODULE_0.__wbindgen_memory
		}
	});
	__webpack_async_result__();
	} catch(e) { __webpack_async_result__(e); }
}, 1);

/***/ })

}]);