'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var cx = _interopDefault(require('classnames'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var core = require('@material-ui/core');
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var AddIcon = _interopDefault(require('@material-ui/icons/Add'));
var SvgIcon = _interopDefault(require('@material-ui/core/SvgIcon'));
var List = _interopDefault(require('@material-ui/core/List'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemSecondaryAction = _interopDefault(require('@material-ui/core/ListItemSecondaryAction'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var RootRef = _interopDefault(require('@material-ui/core/RootRef'));
var Avatar = _interopDefault(require('@material-ui/core/Avatar'));
var Grow = _interopDefault(require('@material-ui/core/Grow'));
var Input = _interopDefault(require('@material-ui/core/Input'));
var reactPopper = require('react-popper');
var Search = _interopDefault(require('@material-ui/icons/Search'));
var Clear = _interopDefault(require('@material-ui/icons/Clear'));
var Link = _interopDefault(require('@material-ui/core/Link'));
var Collapse = _interopDefault(require('@material-ui/core/Collapse'));
var ExpandLess = _interopDefault(require('@material-ui/icons/ExpandLess'));
var ExpandMore = _interopDefault(require('@material-ui/icons/ExpandMore'));
var CheckCircleOutlined = _interopDefault(require('@material-ui/icons/CheckCircleOutlined'));
var CheckCircle = _interopDefault(require('@material-ui/icons/CheckCircle'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var MoreHorizIcon = _interopDefault(require('@material-ui/icons/MoreHoriz'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var CloseIcon = _interopDefault(require('@material-ui/icons/Close'));
var ErrorIcon = _interopDefault(require('@material-ui/icons/Error'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var InfoIcon = _interopDefault(require('@material-ui/icons/Info'));
var Snackbar = _interopDefault(require('@material-ui/core/Snackbar'));
var SnackbarContent = _interopDefault(require('@material-ui/core/SnackbarContent'));
var WarningIcon = _interopDefault(require('@material-ui/icons/Warning'));
var amber = _interopDefault(require('@material-ui/core/colors/amber'));
var green = _interopDefault(require('@material-ui/core/colors/green'));
var styles$g = require('@material-ui/core/styles');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var styles = function styles(theme) {
  return {
    button: {
      minHeight: '40px'
    },
    smallText: {
      fontSize: 'x-small'
    },
    label: {
      fontWeight: 'bold'
    },
    squared: {
      borderRadius: '0'
    }
  };
};
/**
 * Button component to be used for all standard buttons
 * @param {*} props
 */


var VcButton = function VcButton(props) {
  var className = props.className,
      classes = props.classes,
      squared = props.squared,
      onClick = props.onClick,
      variant = props.variant,
      isSelected = props.isSelected,
      selectedColor = props.selectedColor,
      color = props.color,
      disabled = props.disabled,
      value = props.value,
      children = props.children,
      smallText = props.smallText,
      otherProps = _objectWithoutProperties(props, ["className", "classes", "squared", "onClick", "variant", "isSelected", "selectedColor", "color", "disabled", "value", "children", "smallText"]);

  return /*#__PURE__*/React__default.createElement(Button, _extends({
    testId: "vc-ui-buttons",
    className: cx(className, classes.button, squared ? classes.squared : undefined, smallText ? classes.smallText : undefined),
    onClick: onClick,
    variant: variant,
    color: isSelected && selectedColor ? selectedColor : color,
    classes: {
      label: styles.label
    },
    disabled: disabled
  }, otherProps), children, value);
};

VcButton.propTypes = {
  /** The class name to apply to the component */
  className: PropTypes.string,

  /** The classes injected by Material UI */
  classes: PropTypes.shape({}),

  /** Boolean to show if the button is disabled */
  disabled: PropTypes.bool,

  /** The text or icon to be displayed in the button */
  value: PropTypes.node,

  /** Callback function triggered on click */
  onClick: PropTypes.func,

  /** Boolean to show if button is selected or not */
  isSelected: PropTypes.bool,

  /** button type can be either of primary or secondary */
  color: PropTypes.oneOf(['primary', 'secondary', 'default', 'inherit']),
  selectedColor: PropTypes.oneOf(['primary', 'secondary', 'default', 'inherit']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained', 'fab', 'extendedFab']),

  /** Should the button be squared */
  squared: PropTypes.bool,

  /** Children node to be rendered */
  children: PropTypes.node,

  /** smaller text in buttons, used for relatively smaller components */
  smallText: PropTypes.bool
};
VcButton.defaultProps = {
  disabled: false,
  value: '',
  isSelected: false,
  color: 'default',
  variant: 'contained',
  squared: false,
  className: undefined,
  onClick: undefined,
  selectedColor: 'default',
  children: undefined,
  classes: {},
  smallText: false
};
var VcButton$1 = core.withStyles(styles)(VcButton);

var DiagnosisIcon = function DiagnosisIcon(props) {
  var className = props.className;
  return /*#__PURE__*/React__default.createElement(SvgIcon, {
    className: className
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M19,8C19.56,8 20,8.43 20,9A1,1 0 0,1 19,10C18.43,10 18,9.55 18,9C18,8.43 18.43,8 19,8M2,2V11C2,13.96 4.19,16.5 7.14,16.91C7.76,19.92 10.42,22 13.5,22A6.5,6.5 0 0,0 20,15.5V11.81C21.16,11.39 22,10.29 22,9A3,3 0 0,0 19,6A3,3 0 0,0 16,9C16,10.29 16.84,11.4 18,11.81V15.41C18,17.91 16,19.91 13.5,19.91C11.5,19.91 9.82,18.7 9.22,16.9C12,16.3 14,13.8 14,11V2H10V5H12V11A4,4 0 0,1 8,15A4,4 0 0,1 4,11V5H6V2H2Z"
  }));
};

DiagnosisIcon.propTypes = {
  /** The class name to apply to the component */
  className: PropTypes.string
};
DiagnosisIcon.defaultProps = {
  className: undefined
};

var DeleteIcon = function DeleteIcon(props) {
  var className = props.className;
  return /*#__PURE__*/React__default.createElement(SvgIcon, {
    className: className,
    viewBox: "0 0 40 49"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M 30.10,4.69           C 33.43,5.60 38.96,3.92 39.85,10.04             40.76,16.30 37.02,15.79 37.00,27.00             36.99,31.38 38.26,45.59 34.69,47.98             32.84,49.21 29.19,49.00 27.00,49.00             27.00,49.00 11.00,49.00 11.00,49.00             8.87,48.96 6.35,49.05 4.74,47.40             2.06,44.67 3.01,31.21 3.00,27.00             2.98,17.12 -2.18,12.31 1.17,7.43             3.28,4.37 7.23,5.42 9.90,4.69             12.09,4.09 13.63,2.36 15.37,1.00             24.69,-2.48 25.71,3.48 30.10,4.69 Z           M 4.00,10.00           C 4.00,10.00 6.31,13.70 6.31,13.70             6.31,13.70 28.00,13.70 28.00,13.70             28.00,13.70 32.85,13.70 32.85,13.70             32.85,13.70 36.00,10.00 36.00,10.00             36.00,10.00 4.00,10.00 4.00,10.00 Z           M 7.00,18.00           C 7.00,18.00 7.00,37.00 7.00,37.00             7.01,38.82 6.85,41.92 8.02,43.40             9.37,45.10 12.05,44.96 14.00,45.00             29.42,45.28 32.84,46.56 33.00,38.00             33.00,38.00 33.00,18.00 33.00,18.00             33.00,18.00 7.00,18.00 7.00,18.00 Z           M 14.20,26.41           C 15.44,28.61 15.41,40.53 14.20,42.41             13.05,43.62 12.23,43.57 11.00,44.00             11.00,44.00 12.00,24.00 12.00,24.00             13.12,24.84 13.76,24.96 14.20,26.41 Z           M 21.00,24.00           C 21.00,24.00 22.00,44.00 22.00,44.00             20.77,43.57 19.95,43.62 19.01,42.41             16.92,39.65 18.04,27.37 19.01,24.00             19.01,24.00 21.00,24.00 21.00,24.00 Z           M 25.80,42.41           C 24.59,40.53 24.56,28.61 25.80,26.41             26.24,24.96 26.88,24.84 28.00,24.00             30.83,30.11 30.57,37.53 29.00,44.00             27.77,43.57 26.95,43.62 25.80,42.41 Z"
  }));
};

DeleteIcon.propTypes = {
  /** The class name to apply to the component */
  className: PropTypes.string
};
DeleteIcon.defaultProps = {
  className: undefined
};

/**
 * Diagnosis Certainty
 * @type {{POSSIBLE: string, CONFIRMED: string}}
 */

var DIAGNOSIS_CERTAINTY = {
  CONFIRMED: 'Confirmed',
  POSSIBLE: 'Possible'
};
/**
 * Acuity color mapping
 * Each acuity is color coded
 * @type {{"1": string, "2": string, "3": string, "4": string, "5": string}}
 */

var ACUITY_COLORS = {
  1: '#8a0301',
  2: '#f24c51',
  3: '#e4d302',
  4: '#03780f',
  5: '#abb2b9'
};
/**
 * ListItemLink
 * Wrapper around ListItem to include links as LinkItem
 * @param props component properties
 * @returns {*}
 * @constructor
 */

var ListItemLink = function ListItemLink(props) {
  var children = props.children,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/React__default.createElement(core.ListItem, {
    component: "div",
    className: className
  }, /*#__PURE__*/React__default.createElement(core.Link, otherProps, children));
};

ListItemLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
ListItemLink.defaultProps = {
  children: undefined,
  className: undefined
};

var styles$1 = function styles(theme) {
  return {
    diagnosisItem: {
      paddingTop: '0px'
    },
    diagnosisIcon: {
      marginRight: theme.spacing.unit,
      alignItems: 'center',
      margin: 'auto',
      borderRadius: '50%',
      padding: '5px'
    },
    deleteIconListIcon: {
      marginRight: theme.spacing.unit,
      alignItems: 'center',
      margin: 'auto',
      borderRadius: '50%',
      padding: '5px'
    },
    deleteIcon: {
      color: theme.palette.primary.main
    },
    diagnosisText: {
      padding: 0,
      textAlign: 'left',
      marginTop: '6px',
      marginRight: '6px'
    },
    possibleDiagnosisText: {
      marginRight: '48px'
    },
    diagnosis: {},
    upperCase: {
      textTransform: 'uppercase'
    }
  };
};

function getIconStyle(diagnosis) {
  if (diagnosis.certainty === DIAGNOSIS_CERTAINTY.CONFIRMED) {
    return {
      color: '#FFFFFF',
      backgroundColor: ACUITY_COLORS[diagnosis.acuity]
    };
  }

  return {
    color: ACUITY_COLORS[diagnosis.acuity]
  };
}
/**
 * Displays Diagnosis List
 * @param props component properties
 * @returns {*}
 * @constructor
 */

var VcDiagnosisList = function VcDiagnosisList(props) {
  var classes = props.classes,
      className = props.className,
      diagnoses = props.diagnoses,
      action = props.action,
      confirmText = props.confirmText,
      resolveText = props.resolveText,
      onConfirmedClick = props.onConfirmedClick,
      onDelete = props.onDelete;

  function renderDiagnosis(diagnosis) {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
      key: diagnosis.uuid
    }, /*#__PURE__*/React__default.createElement(core.ListItem, {
      className: classes.diagnosisItem
    }, onDelete ? /*#__PURE__*/React__default.createElement(core.ListItemIcon, {
      className: classes.deleteIconListIcon
    }, /*#__PURE__*/React__default.createElement(core.IconButton, {
      onClick: function onClick() {
        return onDelete(diagnosis);
      }
    }, /*#__PURE__*/React__default.createElement(DeleteIcon, {
      className: classes.deleteIcon
    }))) : null, /*#__PURE__*/React__default.createElement(core.ListItemIcon, {
      className: classes.diagnosisIcon,
      style: getIconStyle(diagnosis)
    }, /*#__PURE__*/React__default.createElement(DiagnosisIcon, null)), diagnosis.certainty === DIAGNOSIS_CERTAINTY.CONFIRMED ? /*#__PURE__*/React__default.createElement(ListItemLink, {
      component: "button",
      variant: "body1",
      onClick: function onClick() {
        return onConfirmedClick && onConfirmedClick(diagnosis.uuid);
      },
      className: classes.diagnosisText
    }, /*#__PURE__*/React__default.createElement(core.ListItemText, {
      className: classes.diagnosisText,
      primary: diagnosis.name,
      disableTypography: true
    })) : /*#__PURE__*/React__default.createElement(core.ListItemText, {
      primary: diagnosis.name,
      className: cx(classes.diagnosisText, classes.possibleDiagnosisText)
    }), /*#__PURE__*/React__default.createElement(core.ListItemSecondaryAction, null, /*#__PURE__*/React__default.createElement(core.Link, {
      component: "button",
      className: classes.upperCase,
      onClick: function onClick() {
        return action && action(diagnosis);
      }
    }, diagnosis.certainty === DIAGNOSIS_CERTAINTY.CONFIRMED ? resolveText : confirmText))), /*#__PURE__*/React__default.createElement(core.Divider, {
      component: "li",
      style: {
        marginLeft: '48px'
      }
    }));
  }

  return /*#__PURE__*/React__default.createElement(core.List, {
    className: cx(classes.diagnosis, className)
  }, diagnoses.map(renderDiagnosis));
};

VcDiagnosisList.propTypes = {
  /**
   * Css classes automatically injected by Material UI theme.
   */
  classes: PropTypes.shape({}),

  /**
   * Diagnosis list to display
   */
  diagnoses: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    acuity: PropTypes.oneOf([1, 2, 3, 4, 5]),
    certainty: PropTypes.oneOf([DIAGNOSIS_CERTAINTY.CONFIRMED, DIAGNOSIS_CERTAINTY.POSSIBLE])
  })),

  /**
   * Callback function to be called when the action is clicked
   */
  action: PropTypes.func,

  /**
   * The class name to apply to the top level component
   */
  className: PropTypes.string,

  /**
   * Confirm text to display
   */
  confirmText: PropTypes.string,

  /**
   * Resolve text to display
   */
  resolveText: PropTypes.string,

  /**
   * Callback function to be called when the confirmed diagnosis is clicked
   */
  onConfirmedClick: PropTypes.func,

  /**
   * Callback function to be called when the confirmed diagnosis is clicked
   */
  onDelete: PropTypes.func
};
VcDiagnosisList.defaultProps = {
  diagnoses: [],
  action: undefined,
  classes: {},
  className: undefined,
  confirmText: 'Confirm',
  resolveText: 'Resolve',
  onConfirmedClick: undefined,
  onDelete: undefined
};
var VcDiagnosisList$1 = core.withStyles(styles$1)(VcDiagnosisList);

var styles$2 = function styles(theme) {
  return {
    root: {},
    cardHeader: {
      width: '100%',
      height: '36px',
      boxSizing: 'border-box',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '0px',
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      boxShadow: 'none'
    },
    cardHeaderText: {
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: '16px',
      color: theme.palette.primary.contrastText,
      textAlign: 'left',
      lineHeight: 2,
      paddingLeft: theme.spacing.unit
    },
    actions: {
      padding: theme.spacing.unit
    },
    content: {},
    confirmed: {
      padding: theme.spacing.unit
    },
    confirmedLabel: {
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: '0.9em',
      textTransform: 'uppercase'
    },
    possible: {
      padding: theme.spacing.unit
    },
    possibleLabel: {
      fontSize: '0.9em',
      textTransform: 'uppercase'
    },
    divider: {
      width: '100%',
      backgroundColor: theme.palette.primary.main
    },
    diagnosis: {
      maxHeight: '120px',
      overflow: 'auto',
      paddingTop: 0
    }
  };
};

function getConfirmedDiagnoses(diagnoses) {
  return diagnoses.filter(function (diagnosis) {
    return diagnosis.certainty && diagnosis.certainty.toUpperCase() === DIAGNOSIS_CERTAINTY.CONFIRMED.toUpperCase();
  });
}
function getPossibleDiagnoses(diagnoses) {
  return diagnoses.filter(function (diagnosis) {
    return diagnosis.certainty && diagnosis.certainty.toUpperCase() === DIAGNOSIS_CERTAINTY.POSSIBLE.toUpperCase();
  });
}
/**
 * Displays possible and confirmed diagnoses in a card
 * @param props component properties
 * @returns {*}
 * @constructor
 */

var VcDiagnosisCard = function VcDiagnosisCard(props) {
  var classes = props.classes,
      diagnoses = props.diagnoses,
      onConfirm = props.onConfirm,
      onResolve = props.onResolve,
      onConfirmedClick = props.onConfirmedClick,
      className = props.className,
      cardHeader = props.cardHeader,
      confirmedText = props.confirmedText,
      possibleText = props.possibleText,
      addMoreText = props.addMoreText,
      onAddMore = props.onAddMore,
      onDelete = props.onDelete;
  var confirmedDiagnoses = getConfirmedDiagnoses(diagnoses);
  var possibleDiagnoses = getPossibleDiagnoses(diagnoses);
  return /*#__PURE__*/React__default.createElement(Paper, {
    className: cx(classes.root, className),
    square: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.cardHeader
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "subtitle1",
    className: classes.cardHeaderText
  }, cardHeader)), /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    className: classes.content
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    className: classes.confirmed
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 3
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body1",
    className: classes.confirmedLabel,
    color: "primary"
  }, confirmedText)), /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 9
  }, /*#__PURE__*/React__default.createElement(VcDiagnosisList$1, {
    diagnoses: confirmedDiagnoses,
    action: onResolve,
    className: classes.diagnosis,
    onConfirmedClick: onConfirmedClick,
    onDelete: onDelete
  }))), /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true
  }, /*#__PURE__*/React__default.createElement(core.Divider, {
    className: classes.divider
  })), /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    className: classes.possible
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 3
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body1",
    className: classes.possibleLabel
  }, possibleText)), /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 9
  }, /*#__PURE__*/React__default.createElement(VcDiagnosisList$1, {
    diagnoses: possibleDiagnoses,
    action: onConfirm,
    className: classes.diagnosis
  })))), /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    justify: "flex-end",
    className: classes.actions
  }, /*#__PURE__*/React__default.createElement(VcButton$1, {
    value: addMoreText,
    color: "primary",
    squared: true,
    size: "small",
    onClick: onAddMore
  }, /*#__PURE__*/React__default.createElement(AddIcon, null))));
};

VcDiagnosisCard.propTypes = {
  /**
   * Diagnosis list to display
   */
  diagnoses: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    acuity: PropTypes.oneOf([1, 2, 3, 4, 5]),
    certainty: PropTypes.oneOf([DIAGNOSIS_CERTAINTY.CONFIRMED, DIAGNOSIS_CERTAINTY.POSSIBLE])
  })),

  /**
   * The class name to be applied on the component
   */
  className: PropTypes.string,

  /**
   * Classes automatically injected by material UI
   */
  classes: PropTypes.shape({}),

  /**
   * Callback to call when confirm action is clicked
   */
  onConfirm: PropTypes.func,

  /**
   * Callback to call when Resolve action is clicked
   */
  onResolve: PropTypes.func,

  /**
   * Text to show on the card header
   */
  cardHeader: PropTypes.string,

  /**
   * Confirmed text to show
   */
  confirmedText: PropTypes.string,

  /**
   * Possible text to show
   */
  possibleText: PropTypes.string,

  /**
   * Add more text to show
   */
  addMoreText: PropTypes.string,

  /**
   * Call back to call when confirmed diagnosis link is clicked
   */
  onConfirmedClick: PropTypes.func,

  /**
   * Call back to be call when add more is clicked
   */
  onAddMore: PropTypes.func,

  /**
   * Callback function to be called when the confirmed diagnosis is clicked
   */
  onDelete: PropTypes.func
};
VcDiagnosisCard.defaultProps = {
  diagnoses: [],
  onConfirm: undefined,
  onResolve: undefined,
  classes: {},
  className: undefined,
  cardHeader: 'Diagnosis',
  confirmedText: 'Confirmed',
  possibleText: 'Possible',
  addMoreText: 'Add More',
  onAddMore: undefined,
  onConfirmedClick: undefined,
  onDelete: undefined
};
var index = core.withStyles(styles$2)(VcDiagnosisCard);

var CheckSquareIcon = function CheckSquareIcon(props) {
  var className = props.className;
  return /*#__PURE__*/React__default.createElement(SvgIcon, {
    className: className,
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
};

var PlusBoxIcon = function PlusBoxIcon(props) {
  var className = props.className;
  return /*#__PURE__*/React__default.createElement(SvgIcon, {
    className: className,
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

/**
 * Grid Column flex container that arranges children in a column
 * @param {*} props
 */

var styles$3 = function styles(theme) {
  return {
    column: {
      flex: 'auto',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      overflowY: 'auto'
    }
  };
};

var VcGridColumn = function VcGridColumn(props) {
  var classes = props.classes;
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      flex: props.flex
    },
    className: cx(classes.column, props.className)
  }, props.children);
};

VcGridColumn.propTypes = {
  /** Nodes to be displayed in the grid column */
  children: PropTypes.node,

  /** a number for the flex ratio */
  flex: PropTypes.number
};
VcGridColumn.defaultProps = {
  flex: 1
};
var VcGridColumn$1 = core.withStyles(styles$3)(VcGridColumn);

/**
 * Grid Row flex container that arranges children in a row
 * @param {*} props
 */

var styles$4 = function styles(theme) {
  return {
    row: {
      flex: 'auto',
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      overflowX: 'auto'
    }
  };
};

var VcGridRow = function VcGridRow(props) {
  var classes = props.classes;
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      flex: props.flex
    },
    className: cx(classes.row, props.className)
  }, props.children);
};

VcGridRow.propTypes = {
  /** Nodes to be displayed in the grid row */
  children: PropTypes.node,

  /** a number for the flex ratio */
  flex: PropTypes.number
};
VcGridRow.defaultProps = {
  flex: 1
};
var VcGridRow$1 = core.withStyles(styles$4)(VcGridRow);

/**
 * A Grid component for arranging other nodes using flex
 * @param {*} props
 */

var styles$5 = function styles(theme) {
  return {
    grid: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

var VcGrid = function VcGrid(props) {
  var classes = props.classes;
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(classes.grid, props.className)
  }, props.children);
};

VcGrid.propTypes = {
  /** nodes to be displayed within the grid */
  children: PropTypes.node,

  /** class to be added to the grid */
  className: PropTypes.string
};
VcGrid.defaultProps = {};
var VcGrid$1 = core.withStyles(styles$5)(VcGrid);

/**
 * A component to present some data with a label on top
 * @param {*} props
 */

var styles$6 = function styles(theme) {
  return {
    root: {
      width: '100%'
    },
    flexrow: {
      display: 'flex',
      flex: '1',
      height: '500px'
    },
    stick: {
      alignItems: 'center',
      color: theme.palette.primary.main,
      "float": 'left'
    },
    right: {
      margin: '0px',
      width: '90%',
      overflow: 'auto',
      "float": 'right',
      flex: '9',
      height: 'inherit'
    },
    xButton: {
      color: theme.palette.primary.contrastText,
      fontSize: '18px',
      margin: '-16px -21px -20px 0px',
      "float": 'right'
    },
    closeButton: {
      color: theme.palette.primary.contrastText,
      fontSize: '18px',
      margin: '-10px 0px -15px 0px'
    },
    fillBackground: {
      backgroundImage: 'radial-gradient(' + theme.palette.secondary.main + ' 42%, ' + theme.palette.primary.contrastText + ' 0%)'
    },
    noBackground: {
      backgroundImage: 'radial-gradient(' + theme.palette.primary.contrastText + ',' + theme.palette.primary.contrastText + ')'
    },
    background: {
      minWidth: '300px',
      height: '619px',
      overflow: 'auto'
    },
    cont: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    vl: {
      borderLeft: '2px solid',
      borderColor: theme.palette.primary.main,
      "float": 'left'
    },
    vlright: {
      borderLeft: '5px solid',
      borderColor: theme.palette.primary.main,
      "float": 'right'
    },
    top: {
      color: theme.palette.primary.contrastText,
      fontWeight: '700',
      background: theme.palette.primary.main,
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '18px',
      overflow: 'hidden'
    },
    bottom: {
      color: theme.palette.primary.contrastText,
      fontWeight: '700',
      background: theme.palette.primary.main,
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    checkSquare: {
      color: theme.palette.inherit,
      fontSize: '41px'
    },
    plusBox: {
      color: theme.palette.primary.main,
      fontSize: '41px'
    }
  };
};

var VcAlphaScrollList = /*#__PURE__*/function (_React$Component) {
  _inherits(VcAlphaScrollList, _React$Component);

  var _super = _createSuper(VcAlphaScrollList);

  function VcAlphaScrollList(props) {
    var _this;

    _classCallCheck(this, VcAlphaScrollList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "scrollIntoView", function () {
      if (_this.state.scroll) {
        var element = document.getElementById(_this.state.index);
        var next = 1;
        var alphabet = _this.state.index;

        while (!element) {
          if (alphabet === 'Z') {
            next = -1;
            alphabet = _this.state.index;
          }

          var asciiValue = alphabet.charCodeAt(0) + next;
          alphabet = String.fromCharCode(asciiValue);
          element = document.getElementById(alphabet);
          if (alphabet === 'A') return;
        }

        element.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });

        _this.setState({
          scroll: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleShow", function (i) {
      _this.setState({
        index: i,
        scroll: true
      });
    });

    _this.state = {
      index: 'A',
      scroll: false
    };
    return _this;
  }

  _createClass(VcAlphaScrollList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollIntoView();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className;
      return /*#__PURE__*/React__default.createElement(Paper, {
        className: cx(classes.background, className)
      }, /*#__PURE__*/React__default.createElement(VcGrid$1, null, /*#__PURE__*/React__default.createElement(VcGridRow$1, {
        className: cx(classes.top)
      }, /*#__PURE__*/React__default.createElement("div", null, this.props.title), /*#__PURE__*/React__default.createElement(Button, {
        className: cx(classes.xButton),
        onClick: this.props.onToggle
      }, /*#__PURE__*/React__default.createElement("b", null, "X"))), /*#__PURE__*/React__default.createElement(VcGridRow$1, {
        className: cx(classes.flexrow),
        flex: 1
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx(classes.vl)
      }), /*#__PURE__*/React__default.createElement(VcGridColumn$1, {
        className: classes.stick
      }, alpha.map(function (value) {
        return /*#__PURE__*/React__default.createElement("div", {
          key: value,
          onClick: _this2.handleShow.bind(_this2, value)
        }, value);
      })), /*#__PURE__*/React__default.createElement("div", {
        className: cx(classes.vl)
      }), /*#__PURE__*/React__default.createElement(VcGridColumn$1, {
        className: classes.right,
        flex: 9
      }, /*#__PURE__*/React__default.createElement(List, {
        className: classes.root
      }, this.props.options ? this.props.options.map(function (option) {
        return /*#__PURE__*/React__default.createElement(ListItem, {
          id: option.display.substring(0, 1),
          key: option.display,
          onClick: _this2.props.toggleSelected.bind(_this2, option),
          dense: true,
          button: true
        }, /*#__PURE__*/React__default.createElement(ListItemText, {
          primary: option.display
        }), /*#__PURE__*/React__default.createElement(ListItemSecondaryAction, {
          onClick: _this2.props.toggleSelected.bind(_this2, option)
        }, /*#__PURE__*/React__default.createElement("div", {
          className: _this2.props.highlighted.find(function (pos) {
            return pos.display.toLowerCase() === option.display.toLowerCase();
          }) ? classes.fillBackground : classes.noBackground
        }, _this2.props.selectedOptions.find(function (confirm) {
          return confirm.display.toLowerCase() === option.display.toLowerCase();
        }) ? /*#__PURE__*/React__default.createElement(CheckSquareIcon, {
          className: classes.checkSquare
        }) : /*#__PURE__*/React__default.createElement(PlusBoxIcon, {
          className: classes.plusBox
        }))));
      }) : null)), /*#__PURE__*/React__default.createElement("div", {
        className: classes.vlright
      })), /*#__PURE__*/React__default.createElement(VcGridRow$1, {
        className: classes.bottom
      }, /*#__PURE__*/React__default.createElement(Button, {
        className: classes.closeButton,
        onClick: this.props.onToggle
      }, this.props.buttonLabel))));
    }
  }]);

  return VcAlphaScrollList;
}(React__default.Component);

VcAlphaScrollList.propTypes = {
  /** The class name to apply to the component */
  className: PropTypes.string,

  /** text for the label */
  title: PropTypes.string,

  /** list of all the options available */
  options: PropTypes.arrayOf(PropTypes.object).isRequired,

  /** options that are highlighted */
  highlighted: PropTypes.arrayOf(PropTypes.object),

  /** options that are selected */
  selectedOptions: PropTypes.arrayOf(PropTypes.object),

  /** onChange function */
  toggleSelected: PropTypes.func.isRequired,

  /** callback function for submit/close */
  onToggle: PropTypes.func.isRequired,

  /** text for submit buton */
  buttonLabel: PropTypes.string
};
VcAlphaScrollList.defaultProps = {
  title: 'Alphabet Scroll List',
  buttonLabel: 'CLOSE',
  className: undefined
};
var index$1 = core.withStyles(styles$6)(VcAlphaScrollList);

var styles$7 = function styles(theme) {
  return {
    root: {},
    cardHeader: {
      width: '100%',
      height: '36px',
      boxSizing: 'border-box',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '0px',
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      boxShadow: 'none'
    },
    cardHeaderText: {
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: '16px',
      color: theme.palette.secondary.contrastText,
      textAlign: 'left',
      lineHeight: 2,
      paddingLeft: theme.spacing.unit
    },
    actions: {
      padding: theme.spacing.unit
    },
    content: {},
    summary: {
      padding: theme.spacing.unit
    },
    divider: {
      marginLeft: '48px'
    },
    timeline: {
      minHeight: '60px',
      maxHeight: '257px',
      overflow: 'auto',
      paddingTop: 0
    },
    timelineItem: {
      paddingTop: '0px'
    },
    timelineText: {
      padding: 0,
      color: theme.palette.inherit,
      textAlign: 'left'
    }
  };
};
/**
 * Displays the visit summary (a timeline of events) in a card
 * @param props component properties
 * @returns {*}
 * @constructor
 */


var VcVisitSummaryCard = /*#__PURE__*/function (_React$Component) {
  _inherits(VcVisitSummaryCard, _React$Component);

  var _super = _createSuper(VcVisitSummaryCard);

  function VcVisitSummaryCard(props) {
    var _this;

    _classCallCheck(this, VcVisitSummaryCard);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "scrollToBottom", function () {
      if (_this.timelineList && _this.timelineList.current) {
        var scrollHeight = _this.timelineList.current.scrollHeight;
        _this.timelineList.current.scrollTop = scrollHeight;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderTimelineEvent", function (timelineEvent) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
        key: timelineEvent.message
      }, /*#__PURE__*/React__default.createElement(core.ListItem, {
        className: _this.props.classes.timelineItem
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        container: true,
        justify: "flex-start"
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 4
      }, /*#__PURE__*/React__default.createElement(Typography, {
        className: _this.props.classes.timelineText
      }, timelineEvent.timeStamp)), /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 8
      }, /*#__PURE__*/React__default.createElement(Typography, {
        className: _this.props.classes.timelineText
      }, timelineEvent.message)))), /*#__PURE__*/React__default.createElement(core.Divider, {
        component: "li",
        className: _this.props.classes.divider
      }));
    });

    _this.timelineList = /*#__PURE__*/React__default.createRef();
    return _this;
  }

  _createClass(VcVisitSummaryCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToBottom();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToBottom();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement(Paper, {
        className: cx(this.props.classes.root, this.props.className),
        square: true
      }, /*#__PURE__*/React__default.createElement("div", {
        className: this.props.classes.cardHeader
      }, /*#__PURE__*/React__default.createElement(Typography, {
        variant: "subtitle1",
        className: this.props.classes.cardHeaderText
      }, this.props.cardHeader)), /*#__PURE__*/React__default.createElement(core.Grid, {
        container: true,
        className: this.props.classes.content
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        container: true,
        className: this.props.classes.summary
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React__default.createElement(RootRef, {
        rootRef: this.timelineList
      }, /*#__PURE__*/React__default.createElement(core.List, {
        className: cx(this.props.classes.timeline, this.props.className)
      }, this.props.timeline.map(this.renderTimelineEvent)))))), this.props.onEndVisit !== undefined ? /*#__PURE__*/React__default.createElement(core.Grid, {
        container: true,
        justify: "flex-end",
        className: this.props.classes.actions
      }, /*#__PURE__*/React__default.createElement(VcButton$1, {
        value: this.props.endVisitText,
        color: "primary",
        squared: true,
        size: "small",
        onClick: this.props.onEndVisit
      })) : /*#__PURE__*/React__default.createElement("div", null));
    }
  }]);

  return VcVisitSummaryCard;
}(React__default.Component);

VcVisitSummaryCard.propTypes = {
  /**
   * Timeline list to display
   */
  timeline: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    timeStamp: PropTypes.string
  })),

  /**
   * The class name to be applied on the component
   */
  className: PropTypes.string,

  /**
   * Classes automatically injected by material UI
   */
  classes: PropTypes.shape({}),

  /**
   * Text to show on the card header
   */
  cardHeader: PropTypes.string,

  /**
   * Add more text to show
   */
  endVisitText: PropTypes.string,

  /**
   * Callback function that ends the visit when end visit is clicked
   */
  onEndVisit: PropTypes.func
};
VcVisitSummaryCard.defaultProps = {
  timeline: [],
  classes: {},
  className: undefined,
  cardHeader: 'Visit Summary',
  endVisitText: 'End Visit',
  onEndVisit: undefined
};
var index$2 = core.withStyles(styles$7)(VcVisitSummaryCard);

var styles$8 = function styles(theme) {
  return {
    button: {
      minHeight: '40px'
    },
    label: {
      fontWeight: 'bold'
    },
    avatar: {
      backgroundColor: 'inherit'
    },
    container: {
      width: '100%',
      paddingLeft: '4px',
      paddingRight: '4px',
      direction: 'ltr',
      display: 'flex'
    },
    icon: {
      color: theme.palette.inherit,
      alignSelf: 'center',
      marginLeft: 'auto'
    },
    paper: _defineProperty({
      borderRadius: '0px',
      display: 'flex',
      textAlign: 'center',
      alignContent: 'center',
      justifyContent: 'flex-start',
      minWidth: '100%'
    }, "minWidth", 'fill-available'),
    searchIcon: {
      color: theme.palette.inherit,
      alignSelf: 'center',
      marginLeft: 'auto',
      marginRight: '20px'
    }
  };
};
/**
 * Button component to be used for all standard buttons
 * @param {*} props
 */


var VcSearchButton = /*#__PURE__*/function (_React$Component) {
  _inherits(VcSearchButton, _React$Component);

  var _super = _createSuper(VcSearchButton);

  function VcSearchButton(props) {
    var _this;

    _classCallCheck(this, VcSearchButton);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState(function (previousState) {
        return {
          open: !previousState.open
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      // setTimeout to ensure a close event comes after a target click event
      _this.timeout = setTimeout(function () {
        _this.setState({
          open: false
        });
      });

      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (event.key === 'Enter') {
        _this.props.onEnter(_this.props.value);
      }
    });

    var shouldDisplay = props.value ? props.value.length !== 0 : false;
    _this.state = {
      open: shouldDisplay
    };
    return _this;
  }

  _createClass(VcSearchButton, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    } // Change state to the opposite of what it was before

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      return /*#__PURE__*/React__default.createElement(reactPopper.Manager, null, open ? /*#__PURE__*/React__default.createElement(reactPopper.Popper, {
        eventsEnabled: open
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement,
            arrowProps = _ref.arrowProps;
        return /*#__PURE__*/React__default.createElement(Grow, {
          style: {
            transformOrigin: '0 0 0'
          },
          timeout: 300,
          "in": open
        }, /*#__PURE__*/React__default.createElement(Paper, {
          className: _this2.props.classes.paper,
          elevation: 0
        }, /*#__PURE__*/React__default.createElement("div", {
          className: _this2.props.classes.container
        }, /*#__PURE__*/React__default.createElement(Search, {
          className: _this2.props.classes.searchIcon
        }), /*#__PURE__*/React__default.createElement(Input, {
          fullWidth: true,
          disableUnderline: true,
          value: _this2.props.value,
          placeholder: _this2.props.searchPlaceholder,
          onChange: _this2.props.onSearchChange,
          onKeyPress: _this2.handleKeyPress
        }), /*#__PURE__*/React__default.createElement(Clear, {
          onClick: _this2.handleClose,
          className: _this2.props.classes.icon
        }))));
      }) : null, /*#__PURE__*/React__default.createElement(reactPopper.Reference, null, function (_ref2) {
        var ref = _ref2.ref;
        return /*#__PURE__*/React__default.createElement("div", {
          ref: ref
        }, /*#__PURE__*/React__default.createElement(Avatar, {
          onClick: _this2.handleClick,
          className: _this2.props.classes.avatar
        }, /*#__PURE__*/React__default.createElement(Search, null)));
      }));
    }
  }]);

  return VcSearchButton;
}(React__default.Component);

VcSearchButton.propTypes = {
  /** value of the search textfield */
  value: PropTypes.string,

  /** callback called when search text changes */
  onSearchChange: PropTypes.func,

  /** Callback called when close key (X) is pressed */
  onClose: PropTypes.func,

  /** callback called when enter key is pressed */
  onEnter: PropTypes.func,

  /** The placeholder text shown when the search bar appears */
  searchPlaceholder: PropTypes.string
};
VcSearchButton.defaultProps = {
  value: '',
  onSearchChange: function onSearchChange() {},
  onClose: function onClose() {},
  onEnter: function onEnter() {},
  searchPlaceholder: ''
};
var index$3 = core.withStyles(styles$8)(VcSearchButton);

/**
 * A component to present some data with a label on top and buttons at the bottom
 * @param {*} props
 */

var styles$9 = function styles(theme) {
  return {
    flexrow: {
      display: 'flex',
      flex: '1',
      marginBottom: '5px',
      margin: '0px 3px 3px 3px'
    },
    bottomRow: {
      display: 'flex',
      flex: '1',
      marginBottom: '15px',
      margin: '0px 3px 3px 3px'
    },
    xButton: {
      color: theme.palette.primary.contrastText,
      fontSize: '18px',
      margin: '-16px -21px -20px 0px',
      "float": 'right'
    },
    primaryBackground: {
      background: theme.palette.primary.main
    },
    secondaryBackground: {
      background: theme.palette.secondary.main
    },
    window: {
      minWidth: '600px',
      maxWidth: '700px',
      overflow: 'auto',
      borderRadius: '15px'
    },
    top: {
      color: theme.palette.primary.contrastText,
      fontWeight: '700',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '18px',
      overflow: 'hidden'
    },
    papers: {
      width: '100%',
      textAlign: 'center',
      background: theme.palette.primary.contrastText,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    referButton: {
      color: theme.palette.primary.contrastText,
      background: theme.palette.secondary.main,
      fontSize: '14px',
      margin: '5px'
    },
    saveButton: {
      color: theme.palette.primary.main,
      fontSize: '14px',
      margin: '5px',
      border: '2px solid',
      padding: '4px 6px 4px 6px'
    },
    dischargeButton: {
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main,
      fontSize: '14px',
      margin: '5px'
    }
  };
};

var VcCardexWindow = function VcCardexWindow(props) {
  var classes = props.classes,
      className = props.className,
      rows = props.rows,
      title = props.title,
      onClose = props.onClose,
      buttons = props.buttons,
      secondaryBackground = props.secondaryBackground;
  return /*#__PURE__*/React__default.createElement(Paper, {
    className: cx(classes.window, className, secondaryBackground ? classes.secondaryBackground : classes.primaryBackground)
  }, /*#__PURE__*/React__default.createElement(VcGrid$1, null, /*#__PURE__*/React__default.createElement(VcGridRow$1, {
    className: cx(classes.top, secondaryBackground ? classes.secondaryBackground : classes.primaryBackground)
  }, /*#__PURE__*/React__default.createElement("div", null, title), /*#__PURE__*/React__default.createElement(Button, {
    className: cx(classes.xButton),
    onClick: onClose
  }, /*#__PURE__*/React__default.createElement("b", null, "X"))), rows.map(function (row, index) {
    return /*#__PURE__*/React__default.createElement(VcGridRow$1, {
      key: index,
      className: cx(classes.flexrow),
      flex: 1
    }, /*#__PURE__*/React__default.createElement("div", {
      className: cx(classes.papers)
    }, row));
  }), /*#__PURE__*/React__default.createElement(VcGridRow$1, {
    className: cx(classes.bottomRow)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx(classes.papers)
  }, buttons ? buttons.map(function (button) {
    return /*#__PURE__*/React__default.createElement(VcButton$1, {
      className: button.type === 'discharge' ? classes.dischargeButton : button.type === 'refer' ? classes.referButton : button.type === 'save' || button.type === 'returnToCardex' ? classes.saveButton : null,
      key: button.label,
      onClick: button.callBack,
      flex: 4,
      value: button.label
    });
  }) : null))));
};

VcCardexWindow.propTypes = {
  /** text for the label */
  title: PropTypes.string,

  /** rows of children */
  rows: PropTypes.arrayOf(PropTypes.any),

  /** callback function for close */
  onClose: PropTypes.func,

  /** text for discharge buton */
  dischargeLabel: PropTypes.string,

  /** text for save buton */
  saveLabel: PropTypes.string,

  /** text for refer buton */
  referLabel: PropTypes.string,

  /** background color selection */
  secondaryBackground: PropTypes.bool
};
VcCardexWindow.defaultProps = {
  dischargeLabel: 'DISCHARGE',
  saveLabel: 'SAVE',
  referLabel: 'REFER',
  title: 'Patient Notes',
  rows: [],
  secondaryBackground: false,
  onClose: function onClose() {
    return console.log('onClose not provided');
  }
};
var index$4 = core.withStyles(styles$9)(VcCardexWindow);

/**
 * A component to present some data with a 3 different tabs
 * @param {*} props
 */

var styles$a = function styles(theme) {
  return {
    flexrow: {
      display: 'flex',
      flex: '1',
      margin: '20px 10px 0px 5px'
    },
    rowWithBorder: {
      display: 'flex',
      flex: '1',
      marginBottom: '5px',
      margin: '0px 10px 0px 10px',
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.inherit,
      padding: '5px'
    },
    xButton: {
      fontSize: '14px',
      border: '3px solid',
      borderColor: theme.palette.primary.main,
      margin: '15px 5px 0px 5px',
      flex: '1 0 21%',
      borderRadius: '15px 15px 0px 0px',
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main
    },
    activeTab: {
      color: theme.palette.primary.main,
      fontSize: '14px',
      border: '3px solid',
      borderColor: theme.palette.primary.main,
      margin: '15px 5px 0px 5px',
      flex: '1 0 21%',
      borderRadius: '15px 15px 0px 0px',
      borderBottomColor: theme.palette.primary.contrastText
    },
    line: {
      marginTop: '-3px',
      width: '100%',
      border: 'none',
      background: theme.palette.primary.main
    },
    background: {
      background: theme.palette.primary.contrastText,
      minWidth: '600px',
      overflow: 'auto'
    },
    top: {
      color: theme.palette.primary.main,
      fontWeight: '700',
      background: theme.palette.primary.contrastText,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      fontSize: '18px',
      overflow: 'hidden'
    },
    papers: {
      width: '100%',
      textAlign: 'center',
      background: theme.palette.primary.contrastText,
      margin: '10px 10px 0px 10px'
    },
    doctorNotes: {
      color: theme.palette.doctorNotes
    },
    notes: {
      maxHeight: '250px',
      overflowY: 'auto'
    }
  };
};

var VcCardexTabs = /*#__PURE__*/function (_React$Component) {
  _inherits(VcCardexTabs, _React$Component);

  var _super = _createSuper(VcCardexTabs);

  function VcCardexTabs(props) {
    var _this;

    _classCallCheck(this, VcCardexTabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onToggle", function (n) {
      _this.setState({
        activeTab: n
      });

      _this.props.onTabChange(n === 1 ? 'Nurse' : n === 2 ? 'Doctor' : 'All');
    });

    _this.state = {
      activeTab: _this.props.activeTab === 'All' ? 3 : _this.props.activeTab === 'Doctor' ? 2 : 1
    };
    return _this;
  }

  _createClass(VcCardexTabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className;
      var data = this.props.values ? this.props.values : [];
      return /*#__PURE__*/React__default.createElement("div", {
        className: cx(classes.background, className)
      }, /*#__PURE__*/React__default.createElement(VcGrid$1, null, /*#__PURE__*/React__default.createElement(VcGridRow$1, {
        className: cx(classes.top)
      }, /*#__PURE__*/React__default.createElement(Button, {
        className: this.state.activeTab === 1 ? cx(classes.activeTab) : cx(classes.xButton),
        onClick: this.onToggle.bind(this, 1)
      }, /*#__PURE__*/React__default.createElement("b", null, this.props.tabLabels[0])), /*#__PURE__*/React__default.createElement(Button, {
        className: this.state.activeTab === 2 ? cx(classes.activeTab) : cx(classes.xButton),
        onClick: this.onToggle.bind(this, 2)
      }, /*#__PURE__*/React__default.createElement("b", null, this.props.tabLabels[1])), /*#__PURE__*/React__default.createElement(Button, {
        className: this.state.activeTab === 3 ? cx(classes.activeTab) : cx(classes.xButton),
        onClick: this.onToggle.bind(this, 3)
      }, /*#__PURE__*/React__default.createElement("b", null, this.props.tabLabels[2])), /*#__PURE__*/React__default.createElement("hr", {
        size: "5",
        className: cx(classes.line)
      })), /*#__PURE__*/React__default.createElement("div", {
        className: cx(classes.notes)
      }, data.map(function (row) {
        return row.type === 'Nurse' && _this2.state.activeTab === 1 || row.type === 'Doctor' && _this2.state.activeTab === 2 || _this2.state.activeTab === 3 ? /*#__PURE__*/React__default.createElement(VcGridRow$1, {
          className: cx(classes.rowWithBorder, row.type === 'Doctor' ? classes.doctorNotes : null),
          flex: 1,
          key: row.notesValues
        }, /*#__PURE__*/React__default.createElement(VcGridColumn$1, null, row.timeDisplay), /*#__PURE__*/React__default.createElement(VcGridColumn$1, {
          flex: 5
        }, row.notesValue), row.hasEdit && _this2.state.activeTab !== 3 ? /*#__PURE__*/React__default.createElement("div", {
          onClick: _this2.props.onEditRow.bind(_this2, row)
        }, /*#__PURE__*/React__default.createElement(Typography, null, /*#__PURE__*/React__default.createElement(Link, {
          className: classes.link
        }, _this2.props.editButtonLabel))) : null) : null;
      })), this.state.activeTab < 3 ? /*#__PURE__*/React__default.createElement(VcGridRow$1, {
        className: cx(classes.flexrow)
      }, this.props.editTabs ? this.props.editTabs.map(function (component, index) {
        return /*#__PURE__*/React__default.createElement(VcGridColumn$1, {
          className: cx(classes.papers),
          flex: _this2.props.editTabsSizes[_this2.props.editTabs.indexOf(component)],
          key: index
        }, component);
      }) : null) : null));
    }
  }]);

  return VcCardexTabs;
}(React__default.Component);

VcCardexTabs.propTypes = {
  /** text for the label */
  title: PropTypes.string,

  /** values to be displayed in each row */
  values: PropTypes.arrayOf(PropTypes.shape({})),

  /** flex sizes for each tab */
  editTabsSizes: PropTypes.arrayOf(PropTypes.number),

  /** call back function when active tabs is changed */
  onTabChange: PropTypes.func.isRequired,

  /** Label for the Edit button */
  editButtonLabel: PropTypes.string,

  /** Callback function for editing a row */
  onEditRow: PropTypes.func,

  /** Labels for each tab */
  tabLabels: PropTypes.arrayOf(PropTypes.string),

  /** Default active tab */
  activeTab: PropTypes.string
};
VcCardexTabs.defaultProps = {
  buttonLabel: 'ADD',
  values: [],
  title: 'Patient Notes',
  editTabsSizes: [1, 1, 1],
  editButtonLabel: 'EDIT',
  tabLabels: ['NURSE', 'DOCTOR', 'ALL'],
  onEditRow: function onEditRow() {
    return console.log('Editrow callback not defined');
  },
  activeTab: 'All'
};
var index$5 = core.withStyles(styles$a)(VcCardexTabs);

/**
 * A component to present some data in rows and an option to include child components to enter data
 * @param {*} props
 */

var styles$b = function styles(theme) {
  return {
    title: {
      margin: '15px',
      fontWeight: 'bold'
    },
    flexrow: {
      display: 'flex',
      flex: '1',
      margin: '20px 10px 0px 5px',
      overflowX: 'hidden'
    },
    rowWithBorder: {
      display: 'flex',
      flex: '1',
      marginBottom: '5px',
      margin: '0px 10px 0px 10px',
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.inherit,
      padding: '5px'
    },
    background: {
      background: theme.palette.primary.contrastText,
      overflow: 'auto',
      width: '100%'
    },
    papers: {
      width: '100%',
      textAlign: 'center',
      background: theme.palette.primary.contrastText,
      margin: '10px 10px 0px 10px'
    },
    doctorNotes: {
      color: theme.palette.doctorNotes
    },
    notes: {
      maxHeight: '250px',
      overflowY: 'auto'
    },
    timeDisplay: {
      minWidth: '70px'
    }
  };
};

var VcCardexNotes = function VcCardexNotes(props) {
  var classes = props.classes,
      className = props.className;
  var data = props.values;
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(classes.background, className)
  }, /*#__PURE__*/React__default.createElement(VcGrid$1, null, props.label ? /*#__PURE__*/React__default.createElement(VcGridRow$1, {
    className: cx(classes.title)
  }, props.label) : null, /*#__PURE__*/React__default.createElement("div", {
    className: cx(classes.notes)
  }, data.map(function (row) {
    return /*#__PURE__*/React__default.createElement(VcGridRow$1, {
      className: cx(classes.rowWithBorder, row.type === 'Doctor' ? classes.doctorNotes : null),
      flex: 1,
      key: row.notesValue
    }, /*#__PURE__*/React__default.createElement(VcGridColumn$1, null, row.timeDisplay), /*#__PURE__*/React__default.createElement(VcGridColumn$1, {
      flex: 5
    }, row.notesValue));
  })), /*#__PURE__*/React__default.createElement(VcGridRow$1, {
    className: cx(classes.flexrow)
  }, props.editTabs.map(function (component, index) {
    return /*#__PURE__*/React__default.createElement(VcGridColumn$1, {
      className: cx(classes.papers),
      flex: props.editTabsSizes[props.editTabs.indexOf(component)],
      key: index
    }, component);
  }))));
};

VcCardexNotes.propTypes = {
  /** text for the label */
  label: PropTypes.string,

  /** values to be displayed in each row */
  values: PropTypes.arrayOf(PropTypes.shape({})),

  /** children/low level components used to enter data */
  editTabs: PropTypes.arrayOf(PropTypes.any),

  /** flex sizes of the low-level components */
  editTabsSizes: PropTypes.array
};
VcCardexNotes.defaultProps = {
  values: [],
  editTabs: [],
  editTabsSizes: []
};
var index$6 = core.withStyles(styles$b)(VcCardexNotes);

var BlankIcon = function BlankIcon(props) {
  var width = props.width,
      height = props.height;
  return /*#__PURE__*/React__default.createElement(core.SvgIcon, {
    viewBox: "0 0 ".concat(width, " ").concat(height)
  }, /*#__PURE__*/React__default.createElement("line", {
    width: "0",
    height: "0"
  }));
};

BlankIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};
BlankIcon.defaultProps = {
  width: 24,
  height: 24
};

var DotIcon = function DotIcon(props) {
  var width = props.width,
      height = props.height,
      r = props.r,
      className = props.className;
  return /*#__PURE__*/React__default.createElement(core.SvgIcon, {
    viewBox: "0 0 ".concat(width, " ").concat(height),
    className: className
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: width / 2,
    cy: height / 2,
    r: width * r
  }));
};

DotIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  r: PropTypes.number,
  className: PropTypes.string
};
DotIcon.defaultProps = {
  width: 24,
  height: 24,
  r: 0.25,
  className: undefined
};

var styles$c = function styles(theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      // paddingLeft: theme.spacing.unit * 4,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      marginTop: '8px',
      marginBottom: '8px'
    },

    /* Styles applied to the inner `component` `button`. */
    menuItemButton: {
      '&:hover,&:focus': {
        textDecoration: 'none',
        backgroundColor: theme.palette.background.paper
      }
    },
    menuItemButtonNested: {
      '&:hover,&:focus': {
        textDecoration: 'none',
        backgroundColor: theme.palette.primary.main
      }
    },
    menuIcon: {
      marginRight: '0px',
      zIndex: 1,
      color: theme.palette.primary.light
    },
    menuIconNested: {
      marginRight: '0px',
      zIndex: 1,
      color: theme.palette.primary.contrastText
    },
    menuIconCompleted: {
      zIndex: 1,
      marginRight: '0px',
      borderRadius: '50%',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.main
    },
    menuIconChildCompleted: {
      zIndex: 1,
      marginRight: '0px',
      borderRadius: '50%',
      color: theme.palette.background.paper,
      backgroundColor: theme.palette.primary.main
    },
    menuIconChild: {
      width: '16px',
      height: '16px',
      marginLeft: '6px'
    },
    menuIconNotStarted: {
      zIndex: 1,
      marginRight: '0px',
      borderRadius: '50%',
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.main
    },
    menuIconStarted: {
      zIndex: 1,
      marginRight: '0px',
      borderRadius: '50%',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main
    },
    hLine: {
      borderLeft: "2px solid ".concat(theme.palette.primary.main),
      top: '32px',
      left: '28px',
      width: '1px',
      height: '85%',
      display: 'block',
      position: 'absolute',
      overflow: 'hidden'
    },
    hOutline: {
      top: 0,
      left: 'auto',
      width: '28px',
      height: '100%',
      display: 'block',
      zIndex: '0',
      position: 'absolute',
      overflow: 'hidden',
      backgroundColor: theme.palette.primary.main
    },
    hOutlineFirst: {
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px'
    },
    hOutlineLast: {
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px'
    }
  };
};

var MENU_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED'
};

var getParentMenuIcon = function getParentMenuIcon(status) {
  switch (status) {
    case MENU_STATUS.COMPLETED:
      return /*#__PURE__*/React__default.createElement(CheckCircle, null);

    case MENU_STATUS.STARTED:
      return /*#__PURE__*/React__default.createElement(MoreHorizIcon, null);

    default:
      return /*#__PURE__*/React__default.createElement(BlankIcon, null);
  }
};

var VcPatientMenu = function VcPatientMenu(props) {
  var menus = props.menus,
      selectedMenu = props.selectedMenu,
      classes = props.classes,
      onMenuClick = props.onMenuClick;
  var initialMenuState = menus.filter(function (menu) {
    return menu.childrenMenu && menu.childrenMenu.length;
  }).reduce(function (acc, menu) {
    acc[menu.display] = false;
    return acc;
  }, {});

  var _useState = React.useState(initialMenuState),
      _useState2 = _slicedToArray(_useState, 2),
      menuState = _useState2[0],
      setMenuState = _useState2[1];

  var isOpen = function isOpen(menu) {
    return menuState[menu];
  };

  var toggleMenu = function toggleMenu(menu) {
    var updatedState = _objectSpread2({}, menuState);

    updatedState[menu] = !updatedState[menu];
    setMenuState(updatedState);
  };
  /**
   * Get the status of the parent menu based on its children menu
   * If all the children menu are completed, then the parent is completed.
   * If any of it's children is started, then the parent is started.
   * Otherwise, it's not started.
   * @param children children menu
   * @return {string} parent status based on children status
   */


  var getParentStatus = function getParentStatus(children) {
    var parentStatus = children.reduce(function (acc, child) {
      var completed = child.status === MENU_STATUS.COMPLETED;
      var started = child.display === selectedMenu || child.status === MENU_STATUS.STARTED || completed;
      acc.started = acc.started || started;
      acc.completed = acc.completed && completed;
      return acc;
    }, {
      started: false,
      completed: true
    });

    if (parentStatus.completed) {
      return MENU_STATUS.COMPLETED;
    }

    if (parentStatus.started) {
      return MENU_STATUS.STARTED;
    }

    return MENU_STATUS.NOT_STARTED;
  };

  var getMenuIcon = function getMenuIcon(status, isChild) {
    switch (status) {
      case MENU_STATUS.COMPLETED:
        return isChild ? /*#__PURE__*/React__default.createElement(ListItemIcon, {
          className: classes.menuIconChildCompleted
        }, /*#__PURE__*/React__default.createElement(CheckCircle, {
          className: classes.menuIconChild
        })) : /*#__PURE__*/React__default.createElement(ListItemIcon, {
          className: classes.menuIconCompleted
        }, /*#__PURE__*/React__default.createElement(CheckCircleOutlined, null));

      case MENU_STATUS.STARTED:
        return /*#__PURE__*/React__default.createElement(ListItemIcon, {
          className: classes.menuIconStarted
        }, isChild ? /*#__PURE__*/React__default.createElement(DotIcon, {
          r: 0.5,
          className: classes.menuIconChild
        }) : /*#__PURE__*/React__default.createElement(DotIcon, null));

      default:
        return /*#__PURE__*/React__default.createElement(ListItemIcon, {
          className: classes.menuIconNotStarted
        }, isChild ? /*#__PURE__*/React__default.createElement(DotIcon, {
          r: 0.5,
          className: classes.menuIconChild
        }) : /*#__PURE__*/React__default.createElement(DotIcon, null));
    }
  };

  var renderSubMenu = function renderSubMenu(subMenus) {
    return /*#__PURE__*/React__default.createElement(List, {
      component: "div",
      disablePadding: true
    }, subMenus.map(function (menu, index) {
      var _cx;

      return /*#__PURE__*/React__default.createElement(ListItem, {
        button: true,
        key: menu.display,
        classes: {
          button: classes.menuItemButton
        },
        onClick: function onClick() {
          return onMenuClick && onMenuClick(menu);
        }
      }, /*#__PURE__*/React__default.createElement(ListItemIcon, {
        className: classes.menuIcon
      }, getMenuIcon(menu.status, true)), /*#__PURE__*/React__default.createElement(ListItemText, {
        primary: menu.display,
        primaryTypographyProps: {
          color: 'primary'
        }
      }), /*#__PURE__*/React__default.createElement("div", {
        className: cx(classes.hOutline, (_cx = {}, _defineProperty(_cx, classes.hOutlineFirst, index === 0), _defineProperty(_cx, classes.hOutlineLast, index === subMenus.length - 1), _cx))
      }));
    }));
  };

  var renderMenuItem = function renderMenuItem(menu) {
    var display = menu.display,
        status = menu.status,
        childrenMenu = menu.childrenMenu;
    return childrenMenu && childrenMenu.length ? /*#__PURE__*/React__default.createElement(React__default.Fragment, {
      key: display
    }, /*#__PURE__*/React__default.createElement(ListItem, {
      button: true,
      className: classes.nested,
      onClick: function onClick() {
        return toggleMenu(display);
      },
      classes: {
        button: classes.menuItemButtonNested
      }
    }, /*#__PURE__*/React__default.createElement(ListItemIcon, {
      className: classes.menuIconNested
    }, status ? getParentMenuIcon(status) : getParentMenuIcon(getParentStatus(childrenMenu))), /*#__PURE__*/React__default.createElement(ListItemText, {
      primary: display,
      disableTypography: true
    }), isOpen(display) ? /*#__PURE__*/React__default.createElement(ExpandLess, null) : /*#__PURE__*/React__default.createElement(ExpandMore, null)), /*#__PURE__*/React__default.createElement(Collapse, {
      "in": isOpen(display),
      timeout: "auto",
      unmountOnExit: true
    }, renderSubMenu(childrenMenu))) : /*#__PURE__*/React__default.createElement(ListItem, {
      button: true,
      classes: {
        button: classes.menuItemButton
      },
      key: display,
      onClick: function onClick() {
        return onMenuClick && onMenuClick(menu);
      }
    }, getMenuIcon(status, false), /*#__PURE__*/React__default.createElement(ListItemText, {
      primary: display,
      primaryTypographyProps: {
        color: 'primary'
      }
    }));
  };

  return /*#__PURE__*/React__default.createElement(List, {
    component: "nav",
    className: classes.root
  }, menus.map(renderMenuItem), /*#__PURE__*/React__default.createElement("div", {
    className: classes.hLine
  }));
};

VcPatientMenu.propTypes = {
  /**
   * Injected by withStyles
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.shape(),

  /**
   * List of menu items to display. Only one level nesting is supported
   */
  menus: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.values(MENU_STATUS)),
    childrenMenu: PropTypes.arrayOf(PropTypes.shape({
      display: PropTypes.string.isRequired,
      status: PropTypes.oneOf(Object.values(MENU_STATUS)).isRequired
    }))
  })),

  /**
   * The name of the selected menu
   */
  selectedMenu: PropTypes.string,

  /**
   * Callback to call when menu is clicked
   */
  onMenuClick: PropTypes.func
};
VcPatientMenu.defaultProps = {
  menus: [],
  classes: {},
  selectedMenu: undefined,
  onMenuClick: undefined
};
var index$7 = core.withStyles(styles$c)(VcPatientMenu);

var styles$d = function styles(theme) {
  return {
    visitStatus: {
      position: 'relative',
      height: '100%'
    },
    statusLabel: {
      color: theme.palette.inherit,
      fontSize: '13px',
      fontWeight: '500',
      textTransform: 'uppercase'
    },
    buttonContainer: {
      display: 'inline-flex',
      width: '100%',
      position: 'absolute',
      bottom: '0',
      justifyContent: 'space-between',
      textTransform: 'uppercase'
    },
    notesButton: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.contrastText,
      border: '2px solid',
      borderColor: theme.palette.primary.main,
      hover: {
        color: theme.palette.inherit
      }
    },
    invisible: {
      visibility: 'hidden'
    },
    notes: {
      overflow: 'auto',
      maxHeight: '170px'
    }
  };
};
/**
 * A component to present the Visit Cardex
 * @param {*} props
 */


var vcCardex = function vcCardex(props) {
  var className = props.className,
      classes = props.classes,
      visitStatus = props.visitStatus,
      admitOrDischargeLabel = props.admitOrDischargeLabel,
      onAdmitOrDischarge = props.onAdmitOrDischarge,
      showNotes = props.showNotes,
      onNotes = props.onNotes,
      notesLabel = props.notesLabel,
      onRefer = props.onRefer,
      referLabel = props.referLabel,
      allNotes = props.allNotes;
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(classes.visitStatus, className)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.statusLabel
  }, " ", visitStatus), /*#__PURE__*/React__default.createElement("div", {
    className: classes.notes
  }, allNotes), /*#__PURE__*/React__default.createElement("div", {
    className: classes.buttonContainer
  }, /*#__PURE__*/React__default.createElement(VcButton$1, {
    color: "primary",
    squared: true,
    onClick: onAdmitOrDischarge,
    value: admitOrDischargeLabel,
    size: "small",
    smallText: true
  }), /*#__PURE__*/React__default.createElement(VcButton$1, {
    squared: true,
    color: "secondary",
    onClick: onRefer,
    value: referLabel,
    size: "small",
    smallText: true
  }), /*#__PURE__*/React__default.createElement(VcButton$1, {
    className: cx(classes.notesButton, showNotes ? undefined : classes.invisible),
    squared: true,
    onClick: onNotes,
    value: notesLabel,
    size: "small",
    smallText: true
  })));
};

vcCardex.propTypes = {
  /** The class name to apply to the top level component */
  className: PropTypes.string,

  /** string with the status to be displayed */
  visitStatus: PropTypes.string,

  /** text for AdmitOrDischarge button */
  admitOrDischargeLabel: PropTypes.string,

  /** callback function for AdmitOrDischarge action */
  onAdmitOrDischarge: PropTypes.func,

  /** Boolean that controls if the Button is seen or not */
  showNotes: PropTypes.bool,

  /** callback function for Notes action */
  onNotes: PropTypes.func,

  /** text for Notes button */
  notesLabel: PropTypes.string,

  /** callback function for Refer action */
  onRefer: PropTypes.func,

  /** text for Refer button */
  referLabel: PropTypes.string,

  /** notes for the cardex */
  allNotes: PropTypes.any
};
vcCardex.defaultProps = {
  className: undefined,
  visitStatus: 'Not Admitted',
  admitOrDischargeLabel: 'Admit',
  onAdmitOrDischarge: undefined,
  showNotes: false,
  onNotes: undefined,
  notesLabel: 'Notes',
  onRefer: undefined,
  referLabel: 'Refer',
  allNotes: ''
};
var index$8 = core.withStyles(styles$d)(vcCardex);

/**
 * A component to present enter time values
 * @param {*} props
 */

var styles$e = function styles(theme) {
  return {
    root: {
      maxWidth: '90px'
    },
    hours: {
      minWidth: '20px',
      maxWidth: '25px',
      margin: '0px'
    },
    minutes: {
      minWidth: '20px',
      maxWidth: '25px',
      margin: '0px',
      marginLeft: '5px'
    },
    seperator: {
      marginTop: '5px'
    }
  };
};

var handleHourChange = function handleHourChange(event, onChange) {
  var value = event.target.value;

  if (value >= 0 && value <= 23) {
    onChange(value);
  }
};

var handleMinuteChange = function handleMinuteChange(event, onChange) {
  var value = event.target.value;

  if (value >= 0 && value <= 59) {
    onChange(value);
  }
};

var VcTimeInput = function VcTimeInput(props) {
  var classes = props.classes,
      className = props.className,
      hours = props.hours,
      minutes = props.minutes,
      onHourChange = props.onHourChange,
      onMinuteChange = props.onMinuteChange;
  return /*#__PURE__*/React__default.createElement(VcGridRow$1, {
    className: cx(className, classes.root)
  }, /*#__PURE__*/React__default.createElement(TextField, {
    className: classes.hours,
    value: hours,
    onChange: function onChange(value) {
      return handleHourChange(value, onHourChange);
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: classes.seperator
  }, ":"), /*#__PURE__*/React__default.createElement(TextField, {
    className: classes.minutes,
    value: minutes,
    onChange: function onChange(value) {
      return handleMinuteChange(value, onMinuteChange);
    }
  }));
}; //}


VcTimeInput.propTypes = {
  /** The class name to apply to the component */
  className: PropTypes.string,

  /** time value in hours */
  hours: PropTypes.string,

  /** time value in minutes */
  minutes: PropTypes.string,

  /** callback function for change in hours */
  onHourChange: PropTypes.func.isRequired,

  /** callback function for change in minutes */
  onMinuteChange: PropTypes.func.isRequired
};
VcTimeInput.defaultProps = {
  hours: '',
  minutes: '',
  className: ''
};
var index$9 = core.withStyles(styles$e)(VcTimeInput);

var variantIcon = {
  success: CheckCircle,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

var styles$f = function styles(theme) {
  return {
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  };
};

function VcNotificationContent(props) {
  var classes = props.classes,
      className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["classes", "className", "message", "onClose", "variant"]);

  var Icon = variantIcon[variant];
  return /*#__PURE__*/React__default.createElement(SnackbarContent, _extends({
    className: cx(classes[variant], className),
    "aria-describedby": "snackbar",
    message: /*#__PURE__*/React__default.createElement("span", {
      className: classes.message
    }, /*#__PURE__*/React__default.createElement(Icon, {
      className: cx(classes.icon, classes.iconVariant)
    }), message),
    action: onClose ? [/*#__PURE__*/React__default.createElement(IconButton, {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.close,
      onClick: onClose
    }, /*#__PURE__*/React__default.createElement(CloseIcon, {
      className: classes.icon
    }))] : null
  }, other));
}

VcNotificationContent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
};
VcNotificationContent.defaultProps = {
  className: '',
  onClose: undefined
};
var VcNotificationContentWrapper = styles$g.withStyles(styles$f)(VcNotificationContent);
/**
 * Component that displays a notification message.
 * The message can be of type success, warning, error, or info
 * @param props see VcNotification.propTypes
 * @returns {*} The component
 * @constructor
 */

var VcNotification = function VcNotification(props) {
  var open = props.open,
      position = props.position,
      variant = props.variant,
      message = props.message,
      autoHideDuration = props.autoHideDuration,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, ["open", "position", "variant", "message", "autoHideDuration", "onClose"]);

  return /*#__PURE__*/React__default.createElement(Snackbar, {
    anchorOrigin: position,
    open: open,
    autoHideDuration: autoHideDuration,
    onClose: onClose
  }, /*#__PURE__*/React__default.createElement(VcNotificationContentWrapper, _extends({
    onClose: onClose,
    variant: variant,
    message: message
  }, other)));
};

VcNotification.propTypes = {
  /** Message to display */
  message: PropTypes.node,

  /** Determines if the message is shown or not */
  open: PropTypes.bool,

  /** Function to handle closing when the message is dismissed */
  onClose: PropTypes.func,

  /** Number of ms after which the message will disappear. Requires onClose to be defined */
  autoHideDuration: PropTypes.number,

  /** Type of message to display */
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),

  /** Where to position the message */
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'right', 'center'])
  })
};
VcNotification.defaultProps = {
  open: false,
  autoHideDuration: 6000,
  onClose: undefined,
  position: {
    vertical: 'top',
    horizontal: 'right'
  },
  message: '',
  variant: 'info'
};

exports.DeleteIcon = DeleteIcon;
exports.DiagnosisIcon = DiagnosisIcon;
exports.VcAlphaScrollList = index$1;
exports.VcButton = VcButton$1;
exports.VcCardex = index$8;
exports.VcCardexNotes = index$6;
exports.VcCardexTabs = index$5;
exports.VcCardexWindow = index$4;
exports.VcDiagnosisCard = index;
exports.VcDiagnosisList = VcDiagnosisList$1;
exports.VcNotification = VcNotification;
exports.VcPatientMenu = index$7;
exports.VcSearchButton = index$3;
exports.VcTimeInput = index$9;
exports.VcVisitSummaryCard = index$2;
//# sourceMappingURL=index.js.map
