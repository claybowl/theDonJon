## Day 2: Rank-Nullity Theorem

### Statement

Let f be a linear transformation from a finite-dimensional vector space V to a finite-dimensional vector space W, and let dim(V) and dim(W) be the dimensions of V and W, respectively. According to the Rank-Nullity Theorem, the following equation is satisfied:

  dim(V) = rank(f) + null(f)

where rank(f) is the dimension of the image of f or the rank of f and null(f) is the dimension of the kernel of f or the nullity of f.

### Proof

Without loss of generality, suppose the linear transformation f maps vectors from a m-dimensional to a n-dimensional vector space. Let B_k be a basis for the kernel of f with k as its dimension. We can extend B_k to a basis B for the domain space by adding (m-k) additional vectors. By the Steinitz Exchange Lemma we can further extend this extended basis B to cover the n-dimensional image space, such that (n - k) vectors are added. However, since the image of a vector set is always a subspace of the image space, the additional vectors must be linearly dependent. Thus the dimension of the image space of f can be defined as n - k, which means that the Rank-Nullity Theorem holds.

### Course Resources

- Introduction to Linear Algebra by Gilbert Strang: https://math.mit.edu/~gs/linearalgebra/
