function Train() {

	// lookup table index associated with the current input level of gauge
	this.mHead = null;
	this.mTail = null;
	this.mNumCars = 0;

	return this;
}

function Car(newId, inColor, inType, inNext, inPrev) {
	this.mId = newId;
	this.mColor = inColor;
	this.mType = inType;
	this.mNext = inNext;
	this.mPrev = inPrev;
	this.mScreenPos = {0,0};

	return this;
}
