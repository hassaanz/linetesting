/**
 * Observation
 */
class Observation {
    constructor(
        private number: number,
        private shortText: String,
        private inspectionChar: String,
        private toolNumber: String,
        private inspectionMethod: String,
        private maintainanceDesc: String,
        private recordDesc: String,
        private insMetKey: String,
        private prodResDesc: String,
        private respDesc: String,
        private validFrom: Date,
        private validTo: Date,
        private createdOn: Date,
        private prodNum: number
    ) { }
    
}