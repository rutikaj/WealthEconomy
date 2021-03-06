﻿using forCrowd.WealthEconomy.BusinessObjects;
using System;

namespace forCrowd.WealthEconomy.DataObjects.Tests
{
    public abstract class BaseTests : IDisposable
    {
        public WealthEconomyContext Context { get; private set; }

        public BaseTests()
        {
            InitializeContext();
        }

        public void InitializeContext()
        {
            Context = new WealthEconomyContext();
        }

        public void Dispose()
        {
            Context.Dispose();
        }
    }
}
